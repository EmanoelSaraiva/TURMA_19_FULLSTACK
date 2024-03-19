// Escreva um algoritmo que percorra os números inteiros entre 1 e 250
// e verifique quais números são múltiplos de 3 e quais são múltiplos de 5.

let div3 = "";
let div5 = "";

for (let i = 1; i <= 250; i++) {
  if (i % 3 === 0) {
    div3 += `${i} `;
  }
  if (i % 5 === 0) {
    div5 += `${i} `;
  }
}

document.write("Múltiplos de 3: ", div3, "<br>");

document.write("Múltiplos de 5: ", div5);
