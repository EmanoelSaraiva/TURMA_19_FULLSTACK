let nome = prompt("Insira o nome do aluno");
let nota1 = parseFloat(prompt("Insira a primeira nota"));
let nota2 = parseFloat(prompt("Insira a segunda nota"));
let nota3 = parseFloat(prompt("Insira a terceira nota"));

const media = (nota1 + nota2 + nota3) / 3;

document.write(`O aluno ${nome} ficou com média ${media.toFixed(2)}`);
