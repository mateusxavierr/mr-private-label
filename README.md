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

## Link do grupo

O link do grupo de WhatsApp mora em **um lugar só**, a constante no topo do
`<script>` (entrou em 2026-10-05):

```js
const GRUPO_URL = "https://chat.whatsapp.com/Lcc3SPFlFLx5NvgtlSBc1Z";
```

Todos os botões com a classe `js-cta` recebem esse valor no carregamento. Se o
grupo trocar de link (ou o convite for redefinido no WhatsApp), muda só aqui.

## Publicação

O destino de produção é o **Cloudflare Pages** — site estático, deploy a cada
push na `main`, sem build. O GitHub Pages foi só a hospedagem de revisão e sai
de cena quando o endereço definitivo entrar.

O endereço é **`comercial.mrprivatelabel.com.br`** (decisão de Mateus,
2026-08-11). O caminho alternativo, `mrprivatelabel.com.br/comercial`, foi
descartado: exigiria um Worker de proxy morando na conta Cloudflare da agência
que mantém o site principal, o que é dependência permanente de terceiro para
uma página que passa a depender deles até para continuar existindo. O
subdomínio custa um registro de DNS, criado uma vez.

O DNS de `mrprivatelabel.com.br` está no Cloudflare dessa agência, então mesmo o
subdomínio depende de um pedido a eles:

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
4. **Só depois do link do grupo entrar:** apagar o `robots.txt` e divulgar.

O `og:image` aponta para `mr-private-label.pages.dev`, que existe nos dois
cenários. Se o projeto no Cloudflare Pages nascer com outro nome, corrigir a
tag junto.

## Estado

Link do grupo no ar (2026-10-05): os CTAs já levam ao WhatsApp. Falta a virada
de domínio — `comercial.mrprivatelabel.com.br` ainda não responde, então o
`robots.txt` fica até os passos 1–3 da ordem acima; aí apaga e divulga.
