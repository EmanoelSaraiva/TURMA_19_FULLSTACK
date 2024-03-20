// Faça um programa usando a estrutura “for” que leia um número inteiro positivo e mostre na tela uma
//  contagem de 0 até o valor digitado:
// Ex: Digite um valor: 9
// Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!

let numero = parseInt(
  prompt("Insira um numero inteiro positivo para fazer a contagem")
);

let contagem = "";

if (numero <= 0) {
  alert("Insira um numero válido");
} else {
  for (let i = 0; i <= numero; i++) {
    contagem += `${i}, `;
  }

  contagem = contagem.trimEnd();

  console.log("Contagem:", contagem, "FIM");
}
