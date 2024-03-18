// Crie um programa que peça um número e
// verifique se ele é positivo, negativo ou zero.

let numero = parseFloat(prompt("Insira um número"));

if (numero < 0) {
  document.write(`O numero ${numero} é negativo`);
} else if (numero > 0) {
  document.write(`O numero ${numero} é positivo`);
} else {
  document.write(`O numero ${numero} é zero`);
}
