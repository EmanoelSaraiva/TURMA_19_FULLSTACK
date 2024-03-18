// Escreva um algoritmo que faça a tabuada de um número e apresente o resultado
// de acordo com o modelo a seguir, sabendo que o multiplicando deverá ser fornecido pelo usuário (n)
// e a quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6

let multiplicando = Number(prompt("Insira qual numero deseja fazer a tabuada"));
let iteracoes = Number(prompt("Insira até qual numero deseja fazer a tabuada"));

for (let i = 1; i <= iteracoes; i++) {
  resultado = i * multiplicando;
  document.writeln(i + " * " + multiplicando + " = " + resultado + "<br>");
}
