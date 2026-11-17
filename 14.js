// ============================================================
// QUESTÃO 14 - Uma função que cria o card
// ============================================================
//
// Organize a questão 13 numa função: criarCard(produto) cria e devolve (return) o article.
// Novidade: os produtos agora têm novo: true ou false. Se o produto for novo, coloque antes do nome um span com a classe etiqueta e o texto Novo.
// Por fim, troque o título #titulo para Cardápio (3 itens), usando o .length do array.
//
// Como a área deve ficar: abra a questão no navegador e clique em
// "Ver como a área deve ficar no final".
// ============================================================

const produtos = [
  { nome: 'Tigela tradicional', preco: 15, img: 'img/tigela.svg', novo: false },
  { nome: 'Copo 500 ml', preco: 12, img: 'img/copo.svg', novo: true },
  { nome: 'Complementos', preco: 3, img: 'img/fruta.svg', novo: false },
];


function criarCard(produto) {
  const article = document.createElement("article")
  article.classList.add("card")
  const img = document.createElement("img")
  img.src = produto.img
  const h3 = document.createElement("h3")
  h3.textContent = produto.nome
  const p = document.createElement("p")
  p.textContent = `R$ ${produto.preco}`
  article.append(img)
  article.append(h3)
  article.append(p)
  return article
}


const article1 = criarCard(produtos[0])
const article2 = criarCard(produtos[1])
const article3 = criarCard(produtos[2])

const cardapio = document.querySelector("#cardapio")
cardapio.append(article1)
cardapio.append(article2)
cardapio.append(article3)
