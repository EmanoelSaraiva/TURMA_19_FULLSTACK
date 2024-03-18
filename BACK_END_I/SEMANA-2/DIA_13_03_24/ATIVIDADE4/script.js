// O custo de um carro novo ao consumidor é a soma do custo de
// fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever um
// algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// o custo final ao consumidor.

let valorCarro = parseFloat(prompt("Insira o valor do carro"));
let valorDistr = parseFloat(prompt("Insira a porcentagem da distruidora"));
let valorImpost = parseFloat(prompt("Insira a porcentagem do impost"));

const valorFinalDistr = (valorCarro * valorDistr) / 100;
const valorFinalImpost = (valorCarro * valorImpost) / 100;

const valorFinal = valorCarro + valorFinalDistr + valorFinalImpost;

document.write(`Valor final do carro: ${valorFinal}`);
