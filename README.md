# MR Private Label — landing

Landing page de conversão da [MR Private Label](https://www.instagram.com/mr.privatelabel/),
confecção de roupa masculina em Taquaritinga do Norte/PE que produz com a marca
do lojista. O funil leva a um grupo de WhatsApp.

## Como rodar

Não tem build, não tem dependência, não tem framework. `index.html` carrega o
CSS e o JS inline, e as imagens e fontes são locais — a página não faz nenhum
request externo.

Abrir o arquivo direto no navegador funciona. Para servir por HTTP:

```bash
python3 -m http.server 4501 --bind 127.0.0.1
```

## Estrutura

```
index.html   página inteira: markup + CSS + JS
404.html     página de erro, mesmo sistema visual, CSS próprio
img/         5 fotos, recortadas dos materiais da marca
fonts/       8 faces em woff2, subsetadas (latin e latin-ext)
robots.txt   TEMPORÁRIO — some quando o domínio definitivo entrar
_redirects   regra de build do Cloudflare; não vai para o ar
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

## Pendência que trava a publicação

Os CTAs apontam para um placeholder. O link real do grupo entra em **um lugar
só**, a constante no topo do `<script>`:

```js
const GRUPO_URL = "#PENDENTE-LINK-GRUPO";
```

Todos os botões com a classe `js-cta` recebem esse valor no carregamento.

## Publicação

O destino de produção é o **Cloudflare Pages** — site estático, deploy a cada
push na `main`, sem build. O GitHub Pages foi só a hospedagem de revisão e sai
de cena quando o endereço definitivo entrar.

O endereço que o cliente vê ainda está em decisão, e a escolha muda só a última
etapa — a hospedagem é a mesma nos dois casos:

| Endereço | Como o domínio chega na página |
|---|---|
| `comercial.mrprivatelabel.com.br` | um registro CNAME no DNS, criado uma vez |
| `mrprivatelabel.com.br/comercial` | um Worker de proxy na conta Cloudflare de quem hospeda o site principal |

O DNS de `mrprivatelabel.com.br` está no Cloudflare de terceiro (a agência que
mantém o site principal), então qualquer um dos dois caminhos depende de um
pedido a eles. O servidor de origem roteia **todas** as URLs pela aplicação PHP
deles — inclusive `.js` e `.svg` — então subir uma pasta `comercial/` por FTP
não funcionaria.

O `og:image` aponta para `mr-private-label.pages.dev`, que existe nos dois
cenários. Se o projeto no Cloudflare Pages nascer com outro nome, corrigir a
tag junto.

## Estado

Pré-produção. O botão de conversão ainda aponta para o placeholder acima, e a
página segue indexável — decidir entre `noindex` no endereço de revisão ou
publicar de vez quando o link do grupo entrar.
