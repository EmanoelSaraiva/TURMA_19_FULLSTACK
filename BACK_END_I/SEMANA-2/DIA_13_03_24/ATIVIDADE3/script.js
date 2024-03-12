// let total = parseFloat(prompt("Qual valor da compra:"));
// let parcelas = Number(prompt("Quantas parcelas deseja fazer:"));
// let valorParcela = total / parcelas;

// document.write(
//   `O valor total foi de: R$${total} feito em: ${parcelas} parcelas, sendo o valor de cada parcela de: ${valorParcela.toFixed(
//     2
//   )}`
// );

let valorDaCompra = 149.9;
let parcelas = 2;
let valorParcela = valorDaCompra / parcelas;

document.write("O valor total é: " + valorDaCompra + "<br>");
document.write("Em " + parcelas + "x " + valorParcela);
