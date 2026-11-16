// ============================================================
// QUESTÃO 15 - A função mostrar()
// ============================================================
//
// Vamos criar uma função que escreve na página, como um console.log que aparece na tela.
// Crie a função mostrar(texto): ela cria um p, coloca o texto e adiciona na #saida.
// Depois use a função comDesconto (já está pronta no 15.js) para mostrar na página:
// Ana paga R$ 45 / Bruno paga R$ 55 / Carla paga R$ 45
//
// Como a área deve ficar: abra a questão no navegador e clique em
// "Ver como a área deve ficar no final".
// ============================================================

function comDesconto(total) {
  if (total >= 50) {
    return total - 5;
  }
  return total;
}

// escreva o seu código daqui para baixo
