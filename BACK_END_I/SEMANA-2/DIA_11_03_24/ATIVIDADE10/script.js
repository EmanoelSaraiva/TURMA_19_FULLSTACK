// Escreva um algoritmo que tenha como valores de entradas o nome
// e idade do usuário e imprima no terminal o nome, a idade e o ano
// de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
// em 2000”.
// OBS: Pegue o ano atual como base

let idade = parseFloat(prompt("Qual sua idade?"));
let nome = prompt("Qual seu nome?");

//Neste caso estamos pegando o ano atual com base no metodo Date() do javascript, passando o valor como ano
//este método retorna a data atual, o .getFullYer() é para obter somente o valor do ano atual no caso 2024
const anoAtual = new Date().getFullYear();
const anoNascimento = anoAtual - idade;

document.write(
  `Nome: ${nome}, Idade: ${idade} anos, nasceu em ${anoNascimento}`
);
