// ============================================================
// QUESTÃO 13 - Array de objetos: os cards
// ============================================================
//
// Agora um array em que cada item é um objeto. O array produtos já está pronto no 13.js.
// Para cada produto, crie um article com a classe card contendo: uma img, um h3 com o nome e um p com o preço (R$ 15).
// Adicione cada card na #cardapio.
//
// Como a área deve ficar: abra a questão no navegador e clique em
// "Ver como a área deve ficar no final".
// ============================================================

const produtos = [
  { nome: 'Tigela tradicional', preco: 15, img: 'img/tigela.svg' },
  { nome: 'Copo 500 ml', preco: 12, img: 'img/copo.svg' },
  { nome: 'Complementos', preco: 3, img: 'img/fruta.svg' },
];

const article1 = document.createElement("article")
article1.classList.add("card")
const img1 = document.createElement("img")
img1.src = produtos[0].img
const h31 = document.createElement("h3")
h31.textContent = produtos[0].nome
const p1 = document.createElement("p")
p1.textContent = produtos[0].preco
article1.append(img1)
article1.append(h31)
article1.append(p1)


const article2 = document.createElement("article")
const img2 = document.createElement("img")
img2.src = produtos[1].img
const h32 = document.createElement("h3")
h32.textContent = produtos[1].nome
const p2 = document.createElement("p")
p2.textContent = produtos[1].preco
article2.classList.add("card")
article2.append(img2)
article2.append(h32)
article2.append(p2)

const article3 = document.createElement("article")
const img3 = document.createElement("img")
img3.src = produtos[2].img
const h33 = document.createElement("h3")
h33.textContent = produtos[2].nome
const p3 = document.createElement("p")
p3.textContent = `R$ ${produtos[2].preco}`
article3.classList.add("card")
article3.append(img3)
article3.append(h33)
article3.append(p3)


const cardapio = document.querySelector("#cardapio")
cardapio.append(article1)
cardapio.append(article2)
cardapio.append(article3)