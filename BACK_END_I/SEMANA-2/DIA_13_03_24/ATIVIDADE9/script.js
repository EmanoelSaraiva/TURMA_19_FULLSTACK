// As maçãs desta estação custam R$0,30 se forem compradas
// menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// doze. Desenvolva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let qtdMaca = parseFloat(prompt("Quantas maças deseja comprar"));
//Solução com apenas uma variavel onde é pedido a quantidade de maças
if (qtdMaca < 12) {
  document.write(`Saiu R$:${qtdMaca * 0.3} e cada maça saiu por R$:0.30`);
} else {
  document.write(`Saiu R$:${qtdMaca * 0.25} e cada maça saiu por R$:0.25`);
}

//Solução para armazenar o valor total da compra de maças

//Nesta solução vamos definir também o valor que é cobrado por ser maior ou menor que uma duzia(12)
const menorDuzia = 0.3;
const maiorDuzia = 0.25;

if (qtdMaca < 12) {
  //Aqui definimos o valor total da compra multiplicando pelo valor da duzia
  const total = qtdMaca * menorDuzia;
  document.write(`Saiu R$:${total} e cada maça saiu por R$:0.30`);
} else {
  //Aqui definimos o valor total da compra multiplicando pelo valor da duzia
  const total = qtdMaca * maiorDuzia;
  document.write(`Saiu R$:${total} e cada maça saiu por R$:0.30`);
}
