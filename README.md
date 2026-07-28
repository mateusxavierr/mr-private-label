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
img/         5 fotos, recortadas dos materiais da marca
fonts/       8 faces em woff2, subsetadas (latin e latin-ext)
```

## Pendência que trava a publicação

Os CTAs apontam para um placeholder. O link real do grupo entra em **um lugar
só**, a constante no topo do `<script>`:

```js
const GRUPO_URL = "#PENDENTE-LINK-GRUPO";
```

Todos os botões com a classe `js-cta` recebem esse valor no carregamento.

## Estado

Pré-produção. A página está no ar via GitHub Pages para revisão, com o botão
de conversão ainda apontando para o placeholder acima.
