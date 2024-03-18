// Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

let anoAtual = parseInt(prompt("Insira o ano atual"));
let anoDeNascimento = parseInt(prompt("Insira o ano de nascimento"));

const idade = anoAtual - anoDeNascimento;

if (idade >= 16) {
  console.log("Meus parabéns você pode votar!" + idade);
  alert("Meus parabéns você pode votar!");
} else {
  console.log("Que pena ainda não pode votar!" + idade);
  alert("Que pena ainda não pode votar!");
}
