// Crie um programa que peça um número de 1 a 7 e exiba o dia da semana correspondente utilizando a estrutura condicional switch.

let diaSemana = parseInt(
  prompt("Insira um numero de 1 a 7 para saber o dia da seman:")
);

switch (diaSemana) {
  case 1:
    document.writeln("Domingo");
    break;
  case 2:
    document.writeln("Segunda-Feira");
    break;
  case 3:
    document.writeln("Terça-Feira");
    break;
  case 4:
    document.writeln("Quarta-Feira");
    break;
  case 5:
    document.writeln("Quinta-Feira");
    break;
  case 6:
    document.writeln("Sexta-Feira");
    break;
  case 7:
    document.writeln("Sábado");
    break;

  default:
    document.writeln("Insira um valor válido");
    break;
}
