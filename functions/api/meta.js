/* API de conversões da Meta — a metade servidor do bloco 0 do index.html.
 *
 * O navegador manda {evento, id, url} e este arquivo repassa pra Meta com o
 * token, que nunca sai daqui. O mesmo id já foi pelo pixel, e a Meta conta um.
 * Tudo que identifica o visitante vem do próprio pedido (IP, navegador e os
 * cookies _fbp/_fbc do pixel), nunca do corpo: o corpo é público e qualquer um
 * pode forjar. Sem correspondência avançada — nada de e-mail ou telefone.
 *
 * Segredos no projeto mr-private-label do Cloudflare Pages:
 *   META_PIXEL_ID     o mesmo ID que está no PIXEL_ID do index.html
 *   META_CAPI_TOKEN   token gerado no Gerenciador de Eventos (Configurações → API de conversões)
 *   META_TEST_CODE    opcional: o código da aba "Eventos de teste"; tirar depois de conferir
 * Sem os dois primeiros, a rota responde 204 e não faz nada.
 *
 * Versão da Graph API: v26.0 é a atual (jul/2026). A Meta mantém cada versão
 * por uns dois anos; quando vencer, troca aqui.
 */
const VERSAO = 'v26.0';
const EVENTOS = new Set(['PageView', 'Lead']);

const vazio = status => new Response(null, { status });

export async function onRequestPost({ request, env }) {
  if (!env.META_PIXEL_ID || !env.META_CAPI_TOKEN) return vazio(204);

  /* só a própria página fala com esta rota */
  const origem = new URL(request.url).origin;
  if (request.headers.get('Origin') !== origem) return vazio(403);

  const cookies = Object.fromEntries(
    (request.headers.get('Cookie') || '').split(/;\s*/).filter(Boolean).map(c => {
      const i = c.indexOf('=');
      return [c.slice(0, i), c.slice(i + 1)];
    })
  );
  /* o navegador só chama depois do aceite; isto segura quem chamar sem ele */
  if (cookies.mr_consent !== 'sim') return vazio(403);

  let corpo;
  try { corpo = await request.json(); } catch { return vazio(400); }
  const { evento, id, url } = corpo || {};
  if (!EVENTOS.has(evento) || typeof id !== 'string' || !/^[\w-]{8,64}$/.test(id)) return vazio(400);

  const user_data = {
    client_ip_address: request.headers.get('CF-Connecting-IP') || undefined,
    client_user_agent: request.headers.get('User-Agent') || undefined,
    fbp: cookies._fbp || undefined,
    fbc: cookies._fbc || undefined,
  };
  const dados = {
    data: [{
      event_name: evento,
      event_time: Math.floor(Date.now() / 1000),
      event_id: id,
      action_source: 'website',
      event_source_url: typeof url === 'string' && url.startsWith(origem + '/') ? url : origem + '/',
      user_data,
    }],
  };
  if (env.META_TEST_CODE) dados.test_event_code = env.META_TEST_CODE;

  const r = await fetch(
    `https://graph.facebook.com/${VERSAO}/${env.META_PIXEL_ID}/events?access_token=${encodeURIComponent(env.META_CAPI_TOKEN)}`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(dados) }
  );
  /* o erro da Meta vai pro log do Pages (Functions → Real-time logs), sem o token */
  if (!r.ok) console.log('meta', r.status, await r.text());
  return vazio(r.ok ? 204 : 502);
}
