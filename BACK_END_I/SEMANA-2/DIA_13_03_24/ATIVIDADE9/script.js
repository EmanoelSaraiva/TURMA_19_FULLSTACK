// Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.

let velocidade = parseFloat(
  prompt("Qual velocidade do carro").replace(",", ".")
);

if (velocidade > 80) {
  let multa = (velocidade - 80) * 5;
  alert(`A velocidade foi de ${velocidade}km/h e a multa é de R$:${multa}`);
} else {
  alert("Não ultrapassou o limite de velocidade");
}
