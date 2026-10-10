---
tags: [mxc, mr-private-label, seo]
---

# SEO · MR Private Label — ficha

**Site:** MR Private Label (confecção de roupa masculina com marca do lojista, Taquaritinga do Norte/PE; via Manolo) · **Domínio:** https://comercial.mrprivatelabel.com.br (decidido em 11/08; **não resolve**, dig/curl 10/10: falta o CNAME na Cloudflare da agência da loja)
**Prévia:** https://mr-private-label.pages.dev (projeto de produção do Pages; fora do Google só por `Disallow: /` no robots, sem `X-Robots-Tag`, curl 10/10) · cópia de revisão ainda no ar e aberta: https://mateusxavierr.github.io/mr-private-label/
**Tipo:** landing estática de uma página (HTML puro, sem build, Cloudflare Pages) · **Etiquetas que valem:** `[landing]` · em aberto: `[pago]` (0.07)
· não valem: `[local]` `[loja]` `[ref]` `[UE]` `[plano 597]` `[blog]` `[portal]` `[evento]` `[saas]` `[vagas]` `[hotel]`
**Plano:** nenhum (landing R$ 750, quitada; vault `projetos/mxc/financeiro.md`) · **Data:** 10/10/2026 · **molde:** `seo-mxc/SEO-MXC.md`

**Ficha nova, lista de 329 itens, 10/10/2026** · 329 itens · 27 feitos · 163 N/A · 139 abertos

"O que falta de SEO na MR?" = esta ficha. Contexto: [README.md](README.md) ("Publicação" e "Ordem da virada").

Prova "no ar" desta rodada: home e 404 servidas em `mr-private-label.pages.dev` e a home de `mateusxavierr.github.io/mr-private-label/`
são idênticas byte a byte ao `index.html`/`404.html` do HEAD (`cmp`, 10/10); onde a prova cita arquivo do repo, vale pro que está na prévia.
O domínio final ainda não existe, então todo o bloco 2 em diante espera a virada.

**O que trava a abertura pro Google, em ordem:** (1) a agência cria o CNAME `comercial` em DNS only (2.01, 2.17);
(2) canônica, `og:url`, `og:image` e sitemap no domínio (1.06, 1.07, 1.15, 1.95); (3) robots aberto e `X-Robots-Tag` só no `pages.dev` (1.13, 1.14, 1.18);
(4) desligar a cópia do GitHub Pages (2.09); (5) os 3 botões mortos da dobra 02 (1.12, 1.93).

**Leitura que precisa de Mateus:** tratei a MR como não `[local]` (fábrica B2B que vende pro Brasil todo; Perfil da Empresa e Apple/Bing Places ficam fora desta landing).
Se a decisão for o contrário, os 45 itens com `[local]` voltam a abrir.

---
## 0 · Antes de começar — perguntas que mudam a lista

- [x] 0.01 Domínio `mrprivatelabel.com.br` no CNPJ do cliente (42.965.811/0001-77, M.R PRIVATE LABEL), Registro.br, vence 07/09/2027; a landing vai no subdomínio `comercial.` — 10/10 (whois)
- [x] 0.02 DNS no Cloudflare da agência que mantém a loja (NS jasper/melissa; README "Publicação"); domínio sem MX, e-mail do cliente é Gmail; a virada é um CNAME pedido à agência — 10/10 (whois + dig)
- [ ] 0.03 Gmail do cliente que vira dono das contas (cliente: informar; Perfil da Empresa fora desta entrega, ver etiquetas)
- [ ] 0.04 Search Console, GA4 ou Merchant já existentes no domínio da marca, e de quem: a agência da loja pode ter propriedade de Domínio em `mrprivatelabel.com.br`, o que muda o 3.01 (Ambos: perguntar ao cliente e à agência)
- [x] 0.05 `[local]` Endereço: comercial com placa · residencial · coworking · caixa postal · só área de… N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [ ] 0.06 Plano mensal: hoje nenhum (vault `projetos/mxc/financeiro.md`, "Sem manutenção nenhuma", com a dúvida "decisão ou esquecimento?") (Mateus: decidir ou oferecer; sem plano vale o 6.05)
- [ ] 0.07 Anúncio pago: não registrado; o comentário do header cita "tráfego pago" (index.html:1977) (cliente: confirmar; decide 3.11 e 3.26)
- [x] 0.08 Público só no Brasil: lojista brasileiro, copy pt-BR, nenhum pedido de outro país (leitura MXC do CLAUDE.md "O que é") — 10/10
- [x] 0.09 Nicho não regulado: confecção de roupa, sem conselho nem ANVISA (leitura MXC) — 10/10
- [ ] 0.10 Treino de IA: sem decisão; hoje o `robots.txt` bloqueia todo robô menos 3 raspadores de prévia (cliente: decidir por escrito; a recusa vai no robots, robô por robô)
- [x] 0.11 Inventário do que já mede N/A — subdomínio novo, nada no ar antes em `comercial.` (não resolve, curl 10/10); a medição da loja é de outra agência e não muda
- [ ] 0.12 O vendido de SEO copiado pra ficha: landing R$ 750 via Manolo, quitada (vault `financeiro.md` e `carteira.md`); o escopo de SEO da proposta ou contrato não foi lido nesta rodada (MXC: copiar)
- [ ] 0.13 Estudo de demanda: não existe; a landing foi desenhada em 27-30/07 sem estudo (MXC: `moldes/ESTUDO-DE-DEMANDA.md` enxuto: "private label roupa masculina", "fábrica de camiseta com sua marca", Agreste/Taquaritinga)
- [ ] 0.14 Concorrentes de busca: nenhum levantamento (MXC: top 10 de "private label roupa masculina" e "confecção marca própria")
- [x] 0.15 `[local]` Quantas unidades reais (com equipe e horário próprios) e quantos profissionais… N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 0.16 Histórico do domínio N/A — domínio do cliente desde 07/09/2021 (whois), não é novo, recomprado nem expirado
- [ ] 0.28 Homônimo do ramo e marca no INPI: não conferidos (Ambos; o domínio já está no CNPJ dele)
- [x] 0.31 `[ref]` Site existente montado no navegador N/A — não é reformulação: subdomínio novo, nada no ar antes
- [x] 0.32 `[pago]` Público criança ou adolescente N/A — o público é lojista adulto (B2B)
- [x] 0.33 WordPress N/A — HTML estático, sem CMS (README "Como rodar")

### Estudo de demanda e mapa de páginas (antes do layout)

- [ ] 0.17 O que vende hoje, ticket e o que quer vender mais: a página diz pronta entrega personalizada (12 peças por cor, 10 dias úteis) e coleção do zero (index.html:2232-2240); margem e ticket não (cliente; CLAUDE.md "Pendências": pedido mínimo e ticket)
- [ ] 0.18 30-90 dias de dúvidas do atendimento, sem nome nem telefone (cliente)
- [ ] 0.19 Situações de compra: existem os dois níveis de consciência do CLAUDE.md ("O que é"), sem gatilho, objeção e onde pesquisa tirados de compras reais (MXC)
- [ ] 0.20 Vocabulário do lojista × jargão ("private label", "marca própria", "DTF") e o que não atrair (ex.: consumidor final) (MXC)
- [ ] 0.21 Expansão grátis com data e local: autocomplete, "as pessoas também perguntam", Planejador, Trends (MXC)
- [ ] 0.22 Intenção validada na página de resultados e prioridade 0-3 (MXC)
- [x] 0.23 `[local]` Tipo de negócio definido N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 0.24 `[local]` Convênios e planos aceitos N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [ ] 0.25 Quem revisa o conteúdo do lado do cliente (cliente: nome; landing única, sem blog)
- [ ] 0.26 Combinado por escrito: volume é faixa, sem promessa de tráfego, IA em % de presença (MXC)
- [ ] 0.27 `MAPA-DE-PAGINAS.md`: não existe; a página é única, mas a busca dona dela não está escrita (MXC: mapa de 1 linha com busca dona, title e H1)
- [ ] 0.29 Site não local: estados ou regiões-alvo, segmento que paga e quem não é público (Ambos: o CLAUDE.md fala em "dono de loja" sem região)
- [x] 0.30 Domínio da landing decidido por escrito: `comercial.mrprivatelabel.com.br`, separado da loja `mrprivatelabel.com.br` (decisão de Mateus) — 11/08 (README "Publicação")

## 1 · Construção — cada página nasce assim


### Página

- [ ] 1.01 5 portões e busca dona no mapa: landing única por decisão (CLAUDE.md §4), sem busca dona escrita (MXC: junto do 0.27)
- [ ] 1.02 Title e descrição: title de 63 caracteres com a marca na frente e sem cidade (`MR Private Label · fábrica de roupa masculina com marca própria`, index.html:6); descrição de 208 (index.html:7) (MXC: serviço + cidade, marca no fim, ~60/~155)
- [ ] 1.03 H1 visível "Nossa fábrica. Sua marca na peça." (index.html:2019-2022) sem a palavra da busca e diferente do title; o subtítulo diz o quê e pra quem, não onde (index.html:2026) (MXC: title = H1, ou subtítulo com serviço + Taquaritinga do Norte/PE)
- [ ] 1.04 Texto no HTML do servidor: estático, todo o texto principal no markup (index.html:2019-2370); o ticker do topo só existe por JS (`FATOS`, index.html:3049-3054) e o markup diz "4 anos" quando já são 5 (index.html:2056; o JS corrige, index.html:3010-3018) (MXC: fatos do ticker no HTML e "5 anos" no markup)
- [ ] 1.05 Links `<a href>`: os 8 CTAs nascem `href="#"` e o link do grupo só entra por JS (index.html:1984, 2391-2392); os 3 botões da dobra 02 são `<button>` sem destino (index.html:2140, 2156, 2172) (MXC: `GRUPO_URL` direto no `href`; destino dos 3 botões no 1.93)
- [ ] 1.06 Canônica: ausente de propósito até o domínio entrar (comentário em index.html:47-49; conferir-seo ❌) (MXC: `https://comercial.mrprivatelabel.com.br/` na virada)
- [ ] 1.07 Prévia de link: título, descrição e imagem 1200×630 com width/height/type/alt (index.html:52-62; `img/og.jpg` 1200×630, 200 na prévia, curl 10/10); falta `og:url` e a imagem aponta pro `pages.dev` (MXC: trocar nos 2 arquivos na virada, README "Ordem da virada" passo 3)
- [ ] 1.08 Ícone: `favicon.ico` tem 16/32/48 mas é declarado `sizes="32x32"`, e o PNG grande declarado com `rel="icon"` não existe (só `.ico`, `.svg` e o `apple-touch-icon.png` 180×180, index.html:31-33; `favicon-32.png` solto no repo) (MXC: PNG quadrado ≥48 com `rel="icon"` e `sizes` certo no `.ico`, nos 2 arquivos)
- [x] 1.09 `lang="pt-BR"` (index.html:2) e títulos sem pular nível, h1 → h2 → h3 (index.html:2019-2359) — 10/10
- [ ] 1.10 Alt: as fotos de conteúdo têm alt descritivo (index.html:2136, 2152, 2168, 2224, 2295, 2328); a foto do hero tem `alt=""` com o rótulo num `div role="img"` (index.html:2010-2011), que o Google não lê como alt (MXC: alt na `<img>` do hero)
- [ ] 1.11 Dados estruturados: nenhum JSON-LD (grep 0; conferir-seo ⚠️) (MXC: `Organization` da fábrica com endereço e redes, só o que está na tela)
- [ ] 1.12 Fora do Google até confirmar: os 3 botões da dobra 02 "AINDA NÃO VÃO A LUGAR NENHUM" (comentário em index.html:2117-2119); os números vêm do brandbook e da bio (CLAUDE.md "Fatos de prova social") e só os 80,3 mil foram confirmados (Ambos: destino dos 3 botões e números confirmados antes de abrir o robots)
- [ ] 1.32 Bloco de fatos citáveis existe (index.html:2052-2056, 2232-2240), mas a lista pede só fato confirmado: 40 mil peças/mês e +1.500 marcas vêm do brandbook e da bio, sem confirmação (CLAUDE.md "Fatos de prova social"; 1.12), e o HTML do servidor diz "4 anos" quando já são 5 (index.html:2056) (Ambos: cliente confirma os 2 números; MXC: "5 anos" no markup)
- [ ] 1.33 Nome de arquivo descritivo: `02-modelo.jpg`, `momento-01.webp`, `vitrine/01-900.webp` (img/) (MXC: renomear com o que a foto mostra)
- [x] 1.34 Página de vídeo N/A — a landing não tem vídeo
- [x] 1.117 Legenda em vídeo com fala N/A — sem vídeo
- [ ] 1.35 Nome do site: `og:site_name` = MR Private Label (index.html:55), sem `WebSite` com `name`/`alternateName` (MXC: junto do 1.11)
- [ ] 1.36 Dados estruturados validados no teste do Google e no schema.org (MXC: depois do 1.11)
- [ ] 1.40 Tipo mais específico do schema.org (MXC: decidir no 1.11; fábrica B2B, sem `LocalBusiness` se não há atendimento no local)
- [x] 1.41 `[local]` Dados do negócio local completos N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [ ] 1.42 `Organization` completo: razão social e CNPJ (estão no CLAUDE.md "Cliente"), logo 112px+, redes, `@id` (MXC: junto do 1.11)
- [x] 1.43 Trilha de navegação N/A — página única, sem níveis
- [ ] 1.44 Quem somos com gente de verdade: o rodapé diz abertura e cidade (index.html:2367-2368); sem nome do dono nem foto real da fábrica (cliente: fotos de fábrica e produção, CLAUDE.md "Pendências")
- [x] 1.45 Texto revisado por profissional habilitado N/A — nicho não regulado (0.09)
- [x] 1.31 Registro e regra de conselho N/A — nicho não regulado (0.09)
- [x] 1.46 `[blog]` `[portal]` Artigo: autor com página própria N/A — não é portal nem tem blog
- [ ] 1.47 Conferido fato a fato: sem registro de conferência; as 3 fotos da dobra 02 são geradas por IA (commit a27f1e4, 30/07) e mostram cena de fábrica (MXC: conferir o texto; cliente: aprovar ou trocar as fotos por reais)
- [ ] 1.48 Perguntas reais com resposta direta: não há bloco de perguntas (cliente: dúvidas do WhatsApp, 0.18; MXC: subtítulo + resposta em 1-2 frases)
- [x] 1.49 Afirmação comercial com prova: sem superlativo nem depoimento; números com fonte registrada (CLAUDE.md "Fatos de prova social") — 10/10
- [x] 1.50 Links externos: só o grupo e o selo MXC; nenhum dado de terceiro citado, link pago ou área de visitante (index.html:2372, 2391) — 10/10
- [x] 1.51 Marca, serviço e cidade por extenso: "MR Private Label", "roupa masculina", "Taquaritinga do Norte, Pernambuco" (index.html:7, 2368); um assunto por endereço — 10/10
- [x] 1.52 Endereço da página: só `/` no subdomínio `comercial` — 10/10
- [ ] 1.53 Imagem em `<img src>` com `src` de reserva no `srcset` (index.html:2011, 2133-2139); sem `license`/`creator` nas fotos (MXC: baixa)
- [x] 1.54 Conteúdo atrás de clique no HTML: os 4 passos com painel estão no markup (index.html:2264-2291); lazy só abaixo da dobra, hero com `fetchpriority="high"` (index.html:2011) — 10/10
- [x] 1.55 Celular com o mesmo conteúdo: um HTML só pra todo aparelho, layout por CSS — 10/10
- [x] 1.56 Nenhum JS mexendo na rolagem nem no `#` na carga (sem `scrollTo`, `history` ou `location` no script, grep 10/10) — 10/10
- [x] 1.57 Sem pop-up de tela cheia (nenhum modal ou dialog no markup, grep 10/10) — 10/10
- [x] 1.58 `[evento]` Só evento em lugar físico que o público em geral pode reservar ou comprar ganha… N/A — não tem agenda de eventos
- [x] 1.59 `[saas]` App ou SaaS com `SoftwareApplication` N/A — não é app nem SaaS
- [x] 1.60 `[vagas]` Vaga com `JobPosting` e data de validade N/A — não publica vaga
- [x] 1.61 `[blog]` Uma página-mãe por serviço e artigos que respondem dúvidas dela, com link de ida e… N/A — não tem blog nem é portal
- [ ] 1.75 Title da home com serviço + cidade: hoje marca + serviço, sem Taquaritinga do Norte/PE (index.html:6) (MXC: ex. "Fábrica de roupa masculina com sua marca em Taquaritinga/PE | MR Private Label", ajustado a ~60)
- [ ] 1.76 Rótulo literal nos H2: o literal está nos eyebrows ("O modelo", "O momento"), os H2 são de efeito (index.html:2075, 2125, 2187, 2257, 2314) (MXC: H2 com o assunto, efeito no corpo)
- [ ] 1.77 Página de serviço no molde: tem prazo, mínimo e como funciona (index.html:2232-2291); faltam quanto custa (faixa ou "do que depende") e 4-8 perguntas reais (Ambos: ticket, CLAUDE.md "Pendências")
- [ ] 1.78 Escrito pra ser citado: números com unidade e entidades nomeadas; falta a frase definitória do que a MR é e faz (MXC)
- [ ] 1.79 Varredura anti-texto-de-IA: sem registro (MXC: rodar na página)
- [x] 1.80 Página por serviço N/A — landing de página única por decisão de Mateus (CLAUDE.md §4, 28/07); vira tarefa se o projeto virar site
- [x] 1.81 Página por segmento ou tipo de cliente N/A — landing única (CLAUDE.md §4)
- [x] 1.82 Material do cliente como fonte de páginas N/A — landing única (CLAUDE.md §4); o brandbook já alimentou a página
- [x] 1.83 `[local]` Páginas de lugar pela regra do tipo de negócio N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 1.84 `[local]` Página de lugar nasce com `noindex`, fora do mapa do site e sem link N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 1.85 `[local]` Hub "Áreas atendidas" ou "Unidades" no menu ou na home N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 1.86 `[local]` Clínica, vet ou laboratório N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 1.87 Comparativo ou "melhores X" N/A — não há na página
- [x] 1.88 Registro do profissional no dado estruturado N/A — nicho não regulado
- [ ] 1.89 Licenças e certificações da empresa (cliente: informar se tem alguma; nada registrado)
- [x] 1.90 Duas naturezas no mesmo endereço N/A — a landing fala só da fábrica; a loja de atacado é outro site (CLAUDE.md "Fora do escopo")
- [x] 1.91 Atalho de quem já é cliente N/A — landing de captação, sem área do cliente
- [ ] 1.92 Número gerado do dado: a idade é calculada pelo JS, mas o markup diz "4 anos" e hoje são 5 (index.html:2055); "80,3 mil seguidores" escrito à mão (index.html:2054, 2368) (MXC: corrigir o markup; seguidores revistos no 7.05)
- [ ] 1.93 Link pra destino não pronto: os 3 botões da dobra 02 ("Responder 4 perguntas", "Falar com a consultoria", "Falar direto com o dono") não fazem nada (index.html:2140, 2156, 2172) (Ambos: destino de cada um, ou o grupo como reserva)
- [x] 1.94 `[portal]` Notícia reescrita de outra fonte N/A — não é portal nem tem blog
- [x] 1.100 Serviço 100% online N/A — fábrica com endereço real em Taquaritinga do Norte/PE (CLAUDE.md "Cliente")
- [x] 1.101 `[local]` Horário da tela, do dado estruturado e do "aberto agora" gerados de uma grade só N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 1.102 Palavras proibidas do nicho no build N/A — nicho não regulado (0.09)
- [ ] 1.103 Animação com saída de emergência: `.rv` nasce com `opacity:0` no CSS e só aparece pelo JS (index.html:1554-1558), sem fallback de 2-2,5 s se o script travar (MXC)
- [x] 1.104 Página pública com dado pessoal N/A — não há
- [ ] 1.105 Procedência das fotos: as 3 da dobra 02 são de IA (commit a27f1e4), as outras vêm dos materiais da marca (README "Estrutura"); números velhos anotados, 72 mil e 64,4 mil (CLAUDE.md) (MXC: registrar a origem de cada foto de `img/`)
- [x] 1.109 `[portal]` `[blog]` Publieditorial, matéria paga ou conteúdo de parceiro com rótulo visível no… N/A — não é portal nem tem blog
- [ ] 1.111 Imagem da página pro resultado (`primaryImageOfPage`): não existe; o `og.jpg` é card com frase (index.html:58) (MXC: foto real no 1.11)
- [x] 1.113 `[portal]` Toda matéria com foto principal própria, nunca o logo nem arte cheia de texto N/A — não é portal nem tem blog

### Site

- [ ] 1.13 `robots.txt`: 200 `text/plain`, mas sem linha `Sitemap:` e com `Disallow: /` pra todos (robots.txt; curl 10/10; conferir-seo ❌) (MXC: no domínio, robots aberto com o sitemap)
- [ ] 1.14 Robôs de busca liberados: hoje todos bloqueados no grupo `*`; só facebookexternalhit, WhatsApp e Twitterbot passam (robots.txt) (MXC: liberar na virada; treino conforme 0.10)
- [ ] 1.15 Mapa do site: não existe (`/sitemap.xml` 404, curl 10/10) (MXC: `sitemap.xml` de 1 URL com `lastmod` real)
- [x] 1.16 404 de verdade com página desenhada: endereço inexistente responde 404 com o `404.html` (curl -I na prévia; igual byte a byte ao do repo, cmp) — 10/10
- [x] 1.17 `llms.txt` N/A — opcional e o site não tem build que gere (decisão de 09/10)
- [ ] 1.18 Prévia fora do Google por `X-Robots-Tag` por host: hoje é `Disallow: /` no `robots.txt`, sem `X-Robots-Tag` (curl -I 10/10), e o case da MXC linka o `pages.dev` (MXC: molde `_headers-previa` e apagar o robots temporário; aqui o `pages.dev` é o projeto de produção)
- [ ] 1.37 Um endereço por página: `/index.html` → 308 pra `/` (curl 10/10); sem canônica, endereço com UTM não aponta pra versão limpa (MXC: 1.06)
- [ ] 1.38 `max-image-preview:large`: ausente, nenhuma meta robots (grep 0) (MXC)
- [x] 1.39 `[UE]` Site em mais de um idioma N/A — público só no Brasil (0.08)
- [x] 1.63 Links internos em 200 direto: os links internos são âncoras da própria página e o `og:image` responde 200 sem pulo (curl 10/10); canônica e sitemap entram no 1.06 e 1.15 — 10/10
- [x] 1.64 HTML de 185 KB; `<head>` só com `meta`, `link`, `title` e `style`, sem código de terceiro nem `<noscript>` de pixel (index.html:1-1959) — 10/10
- [x] 1.65 Meta no HTML do servidor: arquivo estático, nada injetado por JS (index.html:6-62) — 10/10
- [x] 1.66 Nenhum recurso em `http://` (só o `xmlns` de SVG em `data:`, index.html:315, 328) — 10/10
- [x] 1.67 Compressão: `content-encoding: br` no HTML (curl na prévia) — 10/10
- [x] 1.68 Nenhum `nosnippet`, `noarchive` ou `max-snippet` (grep 0) — 10/10
- [x] 1.69 `[landing]` `unavailable_after` N/A — landing de captação permanente, sem data de fim
- [ ] 1.20 Velocidade: hero com `fetchpriority="high"`, sem lazy e sem preload, `width`/`height` em toda imagem, webp com `srcset`, fontes próprias em woff2 (index.html:242-262, 2011); `02-modelo.jpg` e `04-caminho.jpg` sem webp nem `srcset`, `font-display:swap` também no corpo, nada medido no domínio (MXC: medir no domínio, 5.07)
- [x] 1.112 Vídeo de fundo N/A — sem vídeo
- [ ] 1.114 Cache: tudo com `max-age=0, must-revalidate`, inclusive imagem e fonte (curl -I 10/10); não há `_headers` no repo (MXC: `_headers` com prazo curto em imagem e fonte)
- [ ] 1.21 Celular, tablet, computador, teclado, foco e contraste 7:1: não conferido nesta rodada (MXC)
- [ ] 1.115 Símbolo "Acessibilidade" no rodapé: não existe (index.html:2367-2374) (MXC: símbolo + trecho curto de como avisar, junto da política do 1.29)
- [x] 1.116 Sem formulário; botões de ícone com nome acessível (setas com `aria-label`, index.html:2032, 2036) — 10/10
- [ ] 1.22 Cabeçalhos de segurança: só `x-content-type-options` e `referrer-policy`; sem HSTS, CSP nem `frame-ancestors` (curl -I 10/10) (MXC: `_headers`; HSTS em escada só no domínio)
- [x] 1.23 Código versionado em `github.com/mateusxavierr/mr-private-label` (git remote) — 10/10
- [ ] 1.24 Verificador verde: `conferir-seo` com 6 falhas e 4 avisos (seção Conferidor) (MXC: zerar antes de abrir pro Google)
- [ ] 1.95 Endereço num lugar só: o `og:image` está escrito à mão em 2 arquivos (index.html:60, 404.html:39) e não há canônica nem sitemap (MXC: os 3 trocam juntos na virada; conferir-seo ❌ "endereço de prévia no HTML")
- [x] 1.96 Arquivo estático antes da regra de SPA: não é SPA (tem `404.html`); `robots.txt` 200 `text/plain` (curl 10/10) — 10/10
- [x] 1.97 Arquivo de trabalho fora do ar: `/README.md`, `/.gitignore` e `/tools/*` → 301 pra `/` (_redirects:19-21; curl 10/10); `docs/`, `CLAUDE.md` e `.claude/` fora do git (.gitignore) — 10/10
- [x] 1.98 404 sem canônica e sem `og:url`, com caminhos absolutos (404.html:15, 23-25, 74-86, 197) — 10/10
- [ ] 1.99 Trava de GA4 sem aviso de cookies: não há build nem GA4 hoje (MXC: quando o GA4 entrar, conferir no mesmo commit; sem build, a trava é a revisão)
- [x] 1.106 `X-Robots-Tag` em função ou SSR N/A — site estático, sem função
- [x] 1.107 Regra de indexação crítica em teste N/A — página única estática, sem rota `noindex` nem catálogo
- [x] 1.108 Arquivo público (PDF, DOCX, XLSX) N/A — nenhum publicado; `docs/` fora do git (.gitignore)

### Contato e medição

- [ ] 1.25 WhatsApp: o funil é um grupo (`chat.whatsapp.com`, index.html:2391), sem número nem mensagem pronta por intenção; sem a bolinha padrão MXC, só a barra do celular (index.html:2385-2387) (Mateus: bolinha nesta landing ou a barra basta)
- [x] 1.26 Formulário N/A — sem formulário e sem e-mail publicado na página
- [ ] 1.27 Clique nos CTAs contado com seção e posição: nada mede (sem GA4) (MXC: com o 3.10)
- [ ] 1.28 Aviso de cookies: não existe (grep 0) (MXC: entra junto do GA4, 3.10)
- [ ] 1.29 Política de privacidade e linha legal: sem política; o rodapé não tem razão social, CNPJ, endereço nem e-mail (index.html:2367-2374) (MXC: política a partir do que roda; cliente: e-mail de contato)
- [x] 1.30 Selo "Feito por MXC" com UTM e `rel="nofollow noopener"` (index.html:2372; commit 94f78ce) — 09/10
- [ ] 1.70 Nenhum dado pessoal no GA4 (MXC: conferir quando o GA4 entrar)
- [x] 1.71 Formulário de saúde N/A — não é saúde
- [x] 1.72 `generate_lead` na confirmação N/A — sem formulário; o lead é o clique no grupo (1.27)
- [x] 1.73 Medição entre domínios N/A — sem agendamento nem pagamento; o destino é o grupo do WhatsApp
- [x] 1.74 Telefone rastreável N/A — o canal é o grupo, sem telefone na página
- [x] 1.110 Evento de saúde no GA4 N/A — não é saúde

### `[loja]` Loja e catálogo

- [x] L.01 Nome da loja configurado N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.02 Endereço de produto e categoria legível N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.03 Produto nos dados estruturados N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.04 Avaliação do próprio produto, visível na página dele, aparecendo nos dados estruturados N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.05 Esgotados com regra: temporário fica no ar com `OutOfStock`/`BackOrder`/`PreOrder` e… N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.06 Foto de produto com pelo menos 500×500 N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.07 Checkout, e-mails da loja e linha legal do e-commerce N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.08 Compra contada (ver produto, carrinho, finalizar, comprar) e testada com uma compra real N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.09 Apps da loja não duplicam GA, GTM ou Pixel, e nenhum dispara antes do aceite N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.10 Limites da plataforma escritos na ficha como nota, não como falha, cada um com o contorno N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.11 Tema: cópia antes de mexer no que está no ar N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.12 Paginação e filtros: cada `?page=n` com canônica pra si mesma N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.13 Mapa do site de imagens (ou imagens no mapa do site) pros produtos, só com `image:image` +… N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.14 Variações (cor, tamanho) N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.15 Frete e devolução da loja numa página só e informados ao Google N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.16 Dados de produto no HTML que vem do servidor, nunca montados por app ou JavaScript N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.17 "De/por" só se o preço antigo foi praticado de verdade, marcado como preço riscado N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.18 Pix e parcelamento: o preço do feed é o que qualquer cliente paga N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.19 Categoria linka com `<a href>` todo produto que deve ir pro Google, inclusive no "carregar… N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.20 Categoria com texto próprio curto N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.21 Descrição de produto própria N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.22 Avaliações chegando ao Google N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.26 Programa de fidelidade ou preço de membro N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.27 Desistência em 7 dias explicada e feita pelo mesmo canal da compra, com confirmação na hora N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.28 Preço à vista ao lado da foto N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.30 `[UE]` Loja pra Europa: botão "desistir do contrato" N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.32 Title e descrição de produto gerados do cadastro N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.33 Descrição de produto padronizada a partir de uma tabela de atributos N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.34 Produto com sinônimo, nome popular ou fórmula no title, no H1 e em `alternateName` N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.35 Catálogo B2B sem preço: `Product` **sem** `Offer` N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.36 Famílias de variante detectadas no catálogo existente N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.38 Grafia da marca única em todo produto N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.39 Ebook ou livro com `Book` N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.40 WooCommerce existente: catálogo exportado pela Store API pública e auditado com número N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.41 Produto adulto (nudez ou uso sexual) N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.42 Moda no Merchant (roupa, calçado, acessório) N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.43 Condição e marca certas no feed e no dado estruturado N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.44 Suplemento ou alimento: título, descrição, alt, perguntas e categoria só com alegação aprovada… N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)

### `[ref]` Reformulação ou migração

- [x] M.01 Exportar o histórico do Search Console antes de mexer N/A — não é reformulação: subdomínio novo, nada no ar antes
- [x] M.02 Todo endereço antigo com visita ou link leva ao equivalente novo num pulo só N/A — não é reformulação: subdomínio novo, nada no ar antes
- [x] M.03 Mesma verificação do Google, mesma conta de GA4, mesmos nomes de evento N/A — não é reformulação: subdomínio novo, nada no ar antes
- [x] M.05 Sites e domínios antigos do cliente redirecionados ou tirados do ar N/A — não é reformulação: subdomínio novo, nada no ar antes
- [x] M.06 Blog e conteúdo antigo com destino decidido N/A — não é reformulação: subdomínio novo, nada no ar antes
- [x] M.07 Site antigo varrido atrás de link de spam escondido ou invasão N/A — não é reformulação: subdomínio novo, nada no ar antes
- [x] M.08 Mapas do site do CMS antigo só saem do Search Console depois que o novo estiver "Processado" N/A — não é reformulação: subdomínio novo, nada no ar antes
- [x] M.10 Redirecionamentos mantidos pelo menos 1 ano, e mais enquanto o endereço antigo ainda recebe… N/A — não é reformulação: subdomínio novo, nada no ar antes
- [x] M.12 Troca de domínio não acontece junto com o site novo N/A — não é reformulação: subdomínio novo, nada no ar antes

## 2 · Publicação — o dia da virada

- [ ] 2.01 DNS: a virada é um CNAME `comercial` → `mr-private-label.pages.dev` no Cloudflare da agência, sem mexer em e-mail (README "Publicação") (cliente e agência: criar o CNAME; `comercial.` não resolve, dig 10/10)
- [x] M.04 `[ref]` Site novo testado pelo IP antes de mudar o DNS N/A — não é reformulação: subdomínio novo, nada no ar antes
- [ ] 2.02 Cloudflare: com o CNAME em DNS only valem as configurações do projeto Pages, não as da zona da agência (MXC: na virada, conferir políticas de robô e Bot Fight Mode da conta do Pages)
- [x] 2.03 www N/A — subdomínio `comercial.` sem variante www; as 3 linhas do `_redirects` já levam 301 escrito (_redirects:19-21)
- [ ] 2.04 HTTPS num pulo (MXC: curl no dia da virada)
- [ ] 2.05 Nada da prévia vazou: hoje o `og:image` aponta pro `pages.dev` e não há canônica nem sitemap (MXC: na virada)
- [ ] 2.06 Google e Bing abrem o site (MXC: Inspeção de URL ao vivo no domínio)
- [x] 2.07 E-mail do domínio N/A — sem MX em `mrprivatelabel.com.br` (dig 10/10); a landing não publica e-mail
- [ ] 2.08 `/seo-mxc` de novo no domínio (MXC: depois da virada)
- [ ] 2.09 Nenhuma cópia indexável fora do domínio: a cópia de revisão `mateusxavierr.github.io/mr-private-label/` segue no ar, igual byte a byte ao repo (cmp 10/10), e aberta pro Google (o `robots.txt` da subpasta não vale; a raiz do host responde "Site not found"); o `pages.dev` só tem `Disallow` (MXC: desligar o GitHub Pages ou meta refresh pro domínio; `X-Robots-Tag` no `pages.dev`, 1.18)
- [ ] 2.10 Hospedagem no nome do cliente: Cloudflare Pages (README "Publicação"), conta não registrada no repo; desde 18/09 a regra é Hostinger paga pelo cliente (Mateus: manter no Pages ou migrar)
- [x] 2.11 Hostinger N/A — a hospedagem é o Cloudflare Pages (muda se o 2.10 for pra Hostinger)
- [ ] 2.12 Hospedagem e CDN sem bloqueio de robô (MXC: na virada, curl com nome de robô no domínio)
- [ ] 2.13 `robots.txt` no domínio igual ao do repo (MXC: na virada)
- [ ] 2.14 Safe Browsing no dia da virada (MXC)
- [ ] 2.15 2FA nas contas que seguram o domínio: registrador e Cloudflare da agência, Pages e GitHub da MXC (Ambos: não conferido)
- [x] 2.16 Fora do ar planejado com 503 N/A — nenhuma manutenção planejada; a regra vale se houver
- [ ] 2.17 CNAME em DNS only: escrito no README ("Proxy: DNS only (nuvem cinza)") e ainda não criado (agência: criar; MXC: conferir o certificado emitido)
- [ ] 2.18 Registro pendurado: hoje nenhum registro do cliente aponta pra cá (`comercial.` não resolve, dig 10/10); se o Pages sair (2.10), o CNAME sai no mesmo dia (MXC)
- [ ] 2.19 Servidor perto do público: Pages na borda GIG (Rio), TTFB de 0,29 s na prévia (curl 10/10, laboratório) (MXC: medir no domínio)

## 3 · Dia 1 no ar — os painéis

- [ ] 3.01 Search Console: a propriedade de Domínio depende da zona da agência; ver 0.04 antes, ou prefixo de URL do subdomínio (MXC)
- [ ] 3.02 Mapa do site enviado e "Processado" (MXC: depois do 1.15)
- [x] M.09 `[ref]` Domínio mudou: Mudança de endereço no Search Console, só pra troca de domínio N/A — não é reformulação: subdomínio novo, nada no ar antes
- [x] M.11 `[loja]` `[ref]` Loja que troca de domínio N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [ ] 3.03 Indexação pedida da home (MXC)
- [ ] 3.04 Bing Webmaster importado do Search Console (MXC)
- [ ] 3.05 IndexNow com chave na raiz (MXC)
- [ ] 3.06 Contas na conta Google da MXC e cliente dono no mesmo dia (Ambos: depende do 0.03)
- [ ] 3.07 Sem ação manual nem problema de segurança (MXC: depois do 3.01)
- [ ] 3.08 Foto do mês zero nas IAs: 5 perguntas, 5 IAs, 3 vezes (MXC)
- [ ] 3.09 Case no portfólio da MXC: existe (`mxcdigital.com.br/portfolio/mr`, 200, curl 10/10) e o botão linka `https://mr-private-label.pages.dev/` (site-mxc-reformulacao/content/portfolio.ts:285-293) (MXC: trocar pro domínio na virada e pedir indexação)
- [ ] 3.10 GA4: não existe; a página não faz nenhum request externo (README "Como rodar") (MXC: GA4 com aviso de cookies, salvo recusa escrita do cliente)
- [ ] 3.11 `[pago]` GTM, Pixel e Clarity só depois do aceite (cliente: depende do 0.07; sem anúncio vira N/A)
- [x] 3.12 `[loja]` Merchant Center criado na conta Google da MXC, como as outras contas do 3.06, com a… N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.23 `[loja]` Microsoft Merchant Center importando do Google Merchant N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.25 `[loja]` Promoções do Merchant Center N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [ ] 3.13 Regra de UTM escrita: o link da landing nas bios e no grupo com UTM próprio (MXC)
- [x] 3.14 `[portal]` Google Notícias: a entrada é automática N/A — não é portal nem tem blog
- [ ] 3.15 "IA generativa da Pesquisa" = Incluir (MXC: depois do 3.01)
- [ ] 3.16 Anotação no Search Console no dia da virada (MXC)
- [ ] 3.17 Instagram @mr.privatelabel e Threads como propriedades de plataforma (Ambos)
- [x] 3.18 `[portal]` Botão "fonte preferida no Google" no site e nas redes N/A — não é portal nem tem blog
- [ ] 3.19 Bing Site Scan e AI Performance do mês zero (MXC)
- [ ] 3.20 Canal "IA" no GA4 (MXC: com o 3.10)
- [ ] 3.21 Consent Mode v2 no modo básico (MXC: com o 3.10)
- [x] 3.22 `[local]` Foto do mês zero no mapa N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [ ] 3.23 Linha de base do mês zero (MXC; sem histórico, a base é o dia da virada)
- [ ] 3.24 Imagem do link testada no WhatsApp com `?v=2` depois de trocar o `og:image` pro domínio (MXC)
- [x] 3.25 `page_view` em troca de página sem recarregar N/A — página única, sem `pushState` (grep 10/10)
- [ ] 3.26 `[pago]` GA4 ligado ao Google Ads (cliente: depende do 0.07; sem anúncio vira N/A)

## 4 · Primeira semana — aparecer fora do site


### `[local]` Mapa

- [x] 4.01 `[local]` Procurar perfil duplicado no Maps **antes** de criar N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.02 `[local]` Perfil da Empresa criado **na conta do cliente** N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.03 `[local]` Verificação começada no dia 1 N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.04 `[local]` Perfil verificado: categorias extras só as necessárias, descrição até 750 caracteres… N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] L.24 `[loja]` `[local]` Loja com ponto físico: listagens locais gratuitas N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] 4.05 `[local]` Pedido de avaliação contínuo N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.06 `[local]` Apple Business (antigo Business Connect) N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.07 `[local]` Bing Places (agora em bing.com/forbusiness, importa do Perfil do Google) N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.08 `[local]` Página do Facebook com nome, endereço, telefone e site N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.09 `[local]` Diretório forte do nicho primeiro N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.10 `[local]` Nome, endereço e telefone idênticos em todo lugar N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.16 `[local]` Waze com o endereço certo N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.17 `[local]` Varredura de cadastros antigos com endereço ou telefone velho N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.22 `[local]` Antes de pedir a verificação do Perfil, a conta do cliente N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.23 `[local]` Alfinete do mapa em cima da porta de entrada certa N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.24 `[local]` Só área de atendimento: endereço oculto, até 20 cidades ou bairros N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.25 `[local]` WhatsApp no campo de chat do Perfil, com mensagem pronta "vim pelo Google" N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.26 `[local]` Link de agendamento no Perfil, com UTM, quando o cliente agenda online N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.27 `[local]` Atributos do Perfil preenchidos N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.28 `[local]` Profissional que atende em nome próprio N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.29 `[local]` Mais de uma unidade: página própria por unidade N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.30 `[local]` `[hotel]` Perfil sem horário, detalhes do hotel preenchidos e links de reserva… N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.31 `[local]` Concorrente com palavra no nome, endereço falso ou duplicado N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.32 `[local]` Avaliação também no site forte do nicho N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.38 `[local]` Notificações do Perfil chegando no e-mail do cliente e da MXC, com a regra escrita… N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.39 `[local]` Negócio que ainda vai abrir N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 4.40 `[local]` Redes oficiais no campo "Perfis de redes sociais" do Perfil da Empresa N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa

### Quem é a marca (Google e IAs)

- [ ] 4.11 Um nome só nas redes: @mr.privatelabel no Instagram, Threads com 2 mil (CLAUDE.md) (cliente: conferir as demais)
- [ ] 4.12 Link na bio de cada rede: decidir se a bio leva à landing ou à loja, com UTM (cliente; 3.13)
- [ ] 4.13 WhatsApp Business com site, endereço e horário (cliente: não conferido)
- [ ] 4.14 Redes no `sameAs` (MXC: junto do 1.11)
- [ ] 4.18 LinkedIn e YouTube quando fizer sentido (Ambos)
- [ ] 4.19 Estar onde a IA lê: YouTube, avaliações, imprensa (Ambos)
- [ ] 4.20 Painel de conhecimento reivindicado quando aparecer (Ambos)
- [ ] 4.21 Alerta do Google pra "MR Private Label" (MXC)
- [ ] 4.33 Links de parceiros e entidades reais: polo de confecção do Agreste, fornecedores (Ambos)
- [ ] 4.34 Pauta pra imprensa local com dado próprio (Ambos)
- [ ] 4.35 Patrocínio, permuta ou recebidos com `rel="sponsored"` (Ambos: quando houver)
- [ ] 4.36 Listas de terceiros "melhores fábricas de private label" (Ambos: pedir inclusão, nunca pagar posição)
- [ ] 4.37 Reputação de fora (Reclame Aqui, avaliações, notícias): não conferida (MXC)
- [x] L.29 `[loja]` Página da empresa no Reclame Aqui reivindicada e respondida N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)

## 5 · Dia 7 — reconferir

- [ ] 5.01 Relatório Páginas + Inspeção de URL e Bing (MXC: dia 7)
- [x] 5.02 Perfil da Empresa verificado N/A — sem Perfil nesta entrega (não é `[local]`)
- [ ] 5.03 Eventos chegando no GA4 (MXC: depois do 3.10)
- [x] 5.04 `[ref]` Duas semanas olhando 404 de endereço antigo com clique → vira 301 N/A — não é reformulação: subdomínio novo, nada no ar antes
- [ ] 5.05 Relatórios de resultado rico sem erro (MXC: depois do 1.11)
- [ ] 5.06 Robôs de IA visitando com 200 (MXC: painel do Cloudflare do Pages)
- [ ] 5.07 Número de laboratório com prova: nenhuma medição registrada (MXC: mediana de 3 no domínio)
- [ ] 5.08 Auditoria com prova: a ficha usa curl, cmp, whois e arquivo:linha, mas o peso real rolando até o fim não foi medido (1.20) e a verificação de 10/10 achou 3 [x] sem prova (MXC: medir o peso rolando e fechar junto do 1.20)

## 6 · Dia 30 — fechar a entrega

- [ ] 6.01 Página fora do Google aos 30 dias = investigar (MXC)
- [ ] 6.02 Velocidade de visitante real e coleta própria (MXC: Cloudflare Web Analytics depois do aceite)
- [ ] 6.03 Buscas reais → title e descrição ajustados (MXC)
- [x] 6.04 DMARC N/A — sem e-mail no domínio (2.07)
- [ ] 6.05 Sem plano: aviso escrito "ninguém da MXC acompanha os números" + guia mensal (MXC: mandar ao cliente; 0.06)
- [ ] 6.06 Acesso residual da MXC removido ou papel escrito (Ambos)
- [ ] 6.07 Vencimentos no calendário MXC: domínio 07/09/2027 (whois); DNS é da agência (MXC)
- [ ] 6.08 Monitor de queda testado (MXC)
- [ ] 6.09 Estatísticas de rastreamento com host verde (MXC)
- [x] 6.10 `[local]` Geogrid refeito e comparado com o do 3.22 N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 6.11 `[local]` Páginas de lugar medidas pela pasta no Search Console aos 30, 60 e 90 dias N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [ ] 6.12 Estudo de demanda revisado com dados reais (MXC: depende do 0.13)

## 7 · Sempre

- [x] 7.01 Página nova pelos 5 portões N/A — nenhuma página nova prevista (landing única, CLAUDE.md §4); a regra vale se houver
- [x] 7.02 `[plano 597]` Todo mês: buscas, erros, estatísticas de rastreamento e segurança no Search… N/A — sem plano mensal (0.06)
- [ ] 7.03 60-90 dias: repetir as perguntas do 3.08 (MXC)
- [ ] 7.04 A cada 3 meses: concorrentes, links, dados estruturados, Bing, zona DNS (MXC; sem plano, ver 6.05)
- [ ] 7.05 Todo ano: renovar o domínio (cliente: vence 07/09/2027) e revisar números citados (seguidores, idade)
- [ ] 7.06 A cada 3 meses: conteúdo antigo atualizado de verdade (MXC; sem plano, ver 6.05)
- [x] 7.07 `[loja]` Página sazonal (Black Friday, datas da loja) publicada com antecedência, linkada da… N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] 7.08 Links e velocidade no acompanhamento mensal N/A — sem plano mensal (0.06)
- [x] 7.09 `[plano 597]` Relatório mensal: comparação com o mês anterior e o mesmo mês do ano anterior N/A — sem plano mensal (0.06)
- [x] 7.10 `[local]` Horário especial em todo feriado nacional e municipal, lançado antes da data N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 7.11 `[local]` Perfil suspenso: nunca criar outro N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 7.12 `[local]` Nome, endereço ou categoria só mudam com prova do mundo real N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 7.13 `[blog]` A cada 6 meses: página sem impressão e sem lead em 12 meses é melhorada primeiro N/A — não tem blog nem é portal
- [x] 7.14 `[loja]` Relatórios de Shopping do Search Console e diagnóstico do Merchant N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.31 `[loja]` Selo da loja do Google (store widget) no site quando o Merchant liberar N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] L.37 `[loja]` "Buscas sem resultado" da busca interna lidas todo mês N/A — não é loja (a loja de atacado `mrprivatelabel.com.br` é outro site, fora do escopo)
- [x] 7.15 `[local]` `[plano 597]` Geogrid repetido todo mês nas mesmas buscas N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [ ] 7.16 Vazamento pro Google: a cópia do GitHub Pages está aberta pro Google (2.09) e a indexação dela não foi conferida (MXC: Search Console ou `site:`; no índice, Remoções + desligar a cópia)
- [x] 7.17 Ação manual N/A — nenhuma conhecida (a conferência é o 3.07, aberto); a regra vale se acontecer
- [x] 7.18 Site invadido N/A — nenhum sinal conhecido (a conferência é o 3.07, aberto); a regra vale se acontecer
- [x] 7.19 `[local]` Avaliação ruim no Perfil N/A — não é `[local]`: fábrica B2B que vende pro Brasil todo; esta landing não tem Perfil da Empresa
- [x] 7.20 Anomalias de dados do Search Console N/A — sem histórico; o site ainda não está no domínio; abrir a página de anomalias antes de ler alta ou queda segue valendo
- [x] 7.21 `[plano 597]` Antes de explicar uma queda de tráfego ao cliente, investigar nesta ordem N/A — sem plano mensal (0.06)

---

## Conferidor (10/10)

Sem build no disco: o site é HTML estático e a raiz do repo é o que o Pages publica (sem `dist/`, `out/` nem `build/`). O conferidor rodou
sobre a raiz, sem build e sem `--previa`, pra mostrar o estado como iria pro domínio:
`node conferir-seo.mjs --dist=. --dominio=https://comercial.mrprivatelabel.com.br --ignorar=/tools/`

1 página (indexável), 0 URLs no sitemap · **6 falhas, 4 avisos** · `404.html` ✅

- ❌ [1.13] robots.txt sem a linha `Sitemap:`
- ❌ [1.14] robots.txt bloqueia o site inteiro pra `*` (`Disallow: /`)
- ❌ [1.15] nenhum sitemap
- ❌ [1.06] `/` sem canônica
- ❌ [1.07] `/` sem `og:url`
- ❌ [1.95] endereço de prévia no HTML (`https://mr-private-label.pages.dev`, o `og:image`)
- ⚠️ [1.13] os grupos de facebookexternalhit, WhatsApp e Twitterbot não repetem as regras do `*` (3 avisos)
- ⚠️ [1.11] sem JSON-LD
- ℹ️ [1.02] title com 63 caracteres; descrição com 208

Fora do alcance do conferidor e conferido com curl na prévia (10/10): 404 real, `br` ativo, `max-age=0` em tudo, sem `X-Robots-Tag`,
`/README.md`, `/.gitignore` e `/tools/*` em 301 pra `/`.
