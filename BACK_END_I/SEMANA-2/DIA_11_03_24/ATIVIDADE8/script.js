// Desenvolva um algoritmo para ler dois valores e imprimir uma das
// três mensagens a seguir:
// a. ‘Números iguais’, caso os números sejam iguais;
// b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let valor1 = parseFloat(prompt("Insira o primeiro número"));
let valor2 = parseFloat(prompt("Insira o segundo número"));

if (valor1 === valor2) {
  alert("Números iguais");
} else if (valor1 > valor2) {
  alert("Primeiro maior");
} else {
  alert("Segundo maior");
}
