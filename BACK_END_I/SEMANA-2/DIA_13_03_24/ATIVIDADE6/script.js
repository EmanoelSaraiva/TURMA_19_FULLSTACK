// Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.

let numero1 = parseFloat(prompt("Insira o primeiro numero").replace(",", "."));
let numero2 = parseFloat(prompt("Insira o segundo numero").replace(",", "."));
let operacao = prompt(
  "Se for multiplicação X se for divisão / se for soma + se for subtração -"
).toLowerCase();

switch (operacao) {
  case "x":
    document.write(`${numero1} x ${numero2} = ${numero1 * numero2}`);
    break;
  case "+":
    document.write(`${numero1} x ${numero2} = ${numero1 + numero2}`);
    break;
  case "-":
    document.write(`${numero1} x ${numero2} = ${numero1 - numero2}`);
    break;
  case "/":
    document.write(`${numero1} x ${numero2} = ${numero1 / numero2}`);
    break;

  default:
    break;
}

