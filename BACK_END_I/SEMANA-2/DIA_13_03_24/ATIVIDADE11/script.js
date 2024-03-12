// Crie um algoritmo que armazene um número inteiro positivo, e gere
// um alerta com as seguintes mensagens:
// a. “Número é par!”, se o valor armazenado for par;
// b. “Número é impar!”, se o valor armazenado for ímpar;

let numero = parseInt(prompt("Insira um numero inteiro positivo"));

//Verifica se o numero é realmente positivo
if (numero < 0) {
  alert("Insira um numero valido");
} else if (numero % 2 != 0) {
  //Após validar se é positivo verifica se divido por dois for diferente de 0
  //Se for diferente de zero sera impar
  alert("Numero impar");
} else {
  //Se for igual a 0 sera par
  alert("Numero par");
}
