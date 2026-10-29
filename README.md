# MR Private Label — landing

Landing page de conversão da [MR Private Label](https://www.instagram.com/mr.privatelabel/),
confecção de roupa masculina em Taquaritinga do Norte/PE que produz com a marca
do lojista. O funil leva a um grupo de WhatsApp.

## Como rodar

Não tem build, não tem dependência, não tem framework. `index.html` carrega o
CSS e o JS inline, e as imagens e fontes são locais — a página não faz nenhum
request externo, a não ser o pixel da Meta depois que o visitante aceita os
cookies (seção Pixel e API de conversões).

Abrir o arquivo direto no navegador funciona. Para servir por HTTP:

```bash
python3 -m http.server 4501 --bind 127.0.0.1
```

Para testar junto a rota do servidor (`functions/`), que o Python não roda:

```bash
npx wrangler pages dev . --port 8798 --binding META_PIXEL_ID=<id> --binding META_CAPI_TOKEN=<token>
```

## Estrutura

```
index.html   página inteira: markup + CSS + JS
404.html     página de erro, mesmo sistema visual, CSS próprio
img/         5 fotos, recortadas dos materiais da marca
video/       vídeo do dono (dobra 01) em MP4 + capa
fonts/       8 faces em woff2, subsetadas (latin e latin-ext)
robots.txt   aberto, com a linha Sitemap (molde da seo-mxc)
sitemap.xml  1 URL, no domínio do cliente
_headers     noindex só no *.pages.dev + segurança; não vai para o ar
_redirects   regra de build do Cloudflare; não vai para o ar
functions/   api/meta.js: API de conversões da Meta, roda no servidor do Pages
```

O `404.html` repete os tokens do `index.html` em vez de importar: são dois
arquivos sem build entre eles, e um CSS compartilhado viraria um request a mais
numa página que quase ninguém abre. O que ele **não** pode fazer é usar caminho
relativo — o Cloudflare serve essa página a partir de qualquer endereço que não
existe, e em `/a/b/c` um `fonts/x.woff2` viraria `/a/b/fonts/x.woff2`. Todo
`href` e `url()` dele começa com barra.

⚠️ **O path do símbolo `mr` (`<g id="mrg">`) está duplicado nos dois arquivos.**
É o preço de não ter build: um `.svg` externo custaria um request a mais e
impediria o `currentColor`. Se o símbolo mudar no `index.html`, **mudar no
`404.html` junto** — nada avisa.

## Vídeo da dobra 01 (A fábrica)

O vídeo do dono mora **no próprio site**, não no YouTube (decisão de Mateus,
2026-10-20): o embed traria script, logo e relacionados do YouTube e cookie de
terceiro, e a página deixaria de ser "zero request externo". O molde é a seção
de vídeo da Ritma: título em cima, palco escuro, botão embaixo, logo depois
dos números e entre duas fitas do carimbo "mr" (a de cima corre para a
esquerda, a de baixo para a direita); toca **mudo**
quando entra na tela (regra de autoplay dos navegadores) com a pílula "Ativar
som", pausa ao sair, e depois de ~3,5 s a página escurece em volta ("modo
cinema"). Com movimento reduzido nada toca sozinho.

Trocar o vídeo: reencodar o master e substituir os dois arquivos de `video/`,
mantendo os nomes.

```bash
ffmpeg -i master.mov -vf "scale=1920:-2:flags=lanczos,format=yuv420p" -c:v libx264 -preset slow -crf 28 -profile:v high -movflags +faststart -c:a aac -b:a 128k video/fabrica.mp4
ffmpeg -ss 11.3 -i video/fabrica.mp4 -frames:v 1 -vf scale=1280:-2 -c:v libwebp -quality 78 video/fabrica-poster.webp
```

O master de 272 MB (4K HEVC) virou 11,8 MB. O teto do Cloudflare Pages é 25 MB
por arquivo; o `-ss` da capa é um quadro sem legenda, olhando pra câmera.

## Link do grupo

O link do grupo de WhatsApp mora em **um lugar só**, a constante no topo do
`<script>` (entrou em 2026-10-05):

```js
const GRUPO_URL = "https://chat.whatsapp.com/Lcc3SPFlFLx5NvgtlSBc1Z";
```

Todos os botões com a classe `js-cta` recebem esse valor no carregamento. Se o
grupo trocar de link (ou o convite for redefinido no WhatsApp), muda só aqui.

## Pixel e API de conversões da Meta

Pedido de Rodolpho (chegou por Manolo) em 23/10, instalado em 29/10. Mede dois
eventos: `PageView` ao abrir a página e `Lead` no clique de qualquer botão do
grupo. **Enquanto o ID não entra, nada disso existe na tela** — sem aviso, sem
botão no rodapé, sem request.

Como funciona:

- **Aviso de cookies primeiro.** Nada da Meta carrega antes do "Aceitar"
  (SEO-MXC 3.11). A escolha fica 180 dias no cookie `mr_consent`, e o link
  "Preferências de cookies" no rodapé reabre o aviso. Recusar depois de aceitar
  desliga o pixel e apaga os cookies `_fbp`/`_fbc`.
- **Dois caminhos, um evento.** O mesmo evento sai pelo pixel (navegador) e por
  `functions/api/meta.js` (servidor), com o mesmo id, e a Meta conta um. O
  servidor existe porque bloqueador de anúncio e Safari comem parte do pixel.
- **O token nunca entra no `index.html`**, que é público no GitHub. Ele fica num
  segredo do projeto no Cloudflare Pages. A rota só aceita pedido da própria
  página, com aceite gravado e evento da lista.
- Sem correspondência avançada e com `autoConfig` desligado: o pixel não lê
  campo nem adivinha clique.

Para ligar, com o ID do pixel e o token (Gerenciador de Eventos → Configurações
→ API de conversões → Gerar token):

1. `index.html`, bloco 0 do script: `const PIXEL_ID = "<id>";`
2. Segredos no Cloudflare, rodando da pasta do projeto:
   ```bash
   npx wrangler pages secret put META_PIXEL_ID --project-name mr-private-label
   ```
   ```bash
   npx wrangler pages secret put META_CAPI_TOKEN --project-name mr-private-label
   ```
3. Commit e push (o segredo só vale no deploy seguinte).
4. Conferir na aba "Eventos de teste" do Gerenciador: pôr o código dela em
   `META_TEST_CODE` (mesmo comando), abrir a página, aceitar e clicar num botão.
   Tem que aparecer `PageView` e `Lead` com "Navegador" e "Servidor"
   deduplicados. Depois apagar o `META_TEST_CODE`
   (`npx wrangler pages secret delete META_TEST_CODE --project-name mr-private-label`).

Erro da Meta aparece no log da função (Pages → mr-private-label → Functions →
Real-time logs). A versão da Graph API (`v26.0`) mora no topo de
`functions/api/meta.js`.

## Publicação

O destino de produção é o **Cloudflare Pages** — site estático, deploy a cada
push na `main`, sem build. O GitHub Pages foi só a hospedagem de revisão e foi
desligado em 2026-10-14, com o domínio no ar.

O endereço é **`comercial.mrprivatelabel.com.br`** (decisão de Mateus,
2026-08-11). O caminho alternativo, `mrprivatelabel.com.br/comercial`, foi
descartado: exigiria um Worker de proxy morando na conta Cloudflare da agência
que mantém o site principal, o que é dependência permanente de terceiro para
uma página que passa a depender deles até para continuar existindo. O
subdomínio custa um registro de DNS, criado uma vez.

O DNS de `mrprivatelabel.com.br` está no Cloudflare dessa agência, então mesmo o
subdomínio depende de um pedido a eles. **A loja roda na Faz Agilizar**
(`fazagilizar.com.br`, assets em `s3.fazagilizar.com.br` — conferido 14/10). Os
servidores de nome viraram Cloudflare em 09/02/2026, pelo usuário do cliente no
Registro.br, na mesma semana em que a hospedagem antiga (Hostoo, WordPress) foi
suspensa por falta de crédito — a Hostoo está morta e não manda em nada. A zona não
está no Cloudflare do Gmail da MR (vazio, conferido 14/10): é da plataforma. O pedido:

```
Tipo: CNAME · Nome: comercial · Valor: mr-private-label.pages.dev
Proxy: DNS only (nuvem cinza) · TTL: Auto
```

O "DNS only" não é detalhe: com o proxy laranja ligado, o Cloudflare Pages não
consegue validar o domínio e o certificado nunca é emitido.

Registrado para quem for investigar de novo: o servidor de origem do site
principal roteia **todas** as URLs pela aplicação PHP da agência, inclusive
`.js` e `.svg` (verificado em 2026-08-11 — os assets voltam com `PHPSESSID` e
sem `etag`). Subir uma pasta `comercial/` por FTP nunca teria funcionado.

### Ordem da virada

A infraestrutura pode subir antes da página estar pronta para tráfego. O que
**não** pode acontecer antes do `GRUPO_URL` real entrar é a página ficar
visível para busca ou ser divulgada, porque os CTAs não levam a lugar nenhum.

1. Adicionar `comercial.mrprivatelabel.com.br` em Custom domains no projeto do
   Cloudflare Pages.
2. Pedir o CNAME acima à agência.
3. Domínio validado e SSL emitido: trocar o `og:image` nos **dois** arquivos
   (`index.html` e `404.html`) para o domínio novo.
4. **Só depois do link do grupo entrar:** abrir o `robots.txt` e divulgar. (Feito 14/10.)

O `og:image` aponta para `mr-private-label.pages.dev`, que existe nos dois
cenários. Se o projeto no Cloudflare Pages nascer com outro nome, corrigir a
tag junto.

## Estado

Link do grupo no ar (2026-10-05): os CTAs já levam ao WhatsApp.
No Google desde 2026-10-14: `comercial.mrprivatelabel.com.br` no ar, a ordem da
virada inteira feita — canônica, `og:url`, `og:image` e `sitemap.xml` no
domínio; `robots.txt` aberto pelo molde da seo-mxc; `_headers` dá `noindex` só
no `*.pages.dev`; cópia do GitHub Pages desligada. Os 3 botões da dobra 03
levam ao grupo por enquanto, até cada nível ganhar destino próprio. Falta
divulgar e confirmar os números do brandbook (SEO.md 1.12).
Pixel da Meta + API de conversões instalados em 2026-10-29, desligados até o ID
e o token de Rodolpho entrarem (seção Pixel e API de conversões). Falta a
política de privacidade (SEO.md 1.29).
