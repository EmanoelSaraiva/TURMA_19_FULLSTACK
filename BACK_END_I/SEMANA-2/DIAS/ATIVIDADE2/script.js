// Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão necessários para que:
// Lucas e Pedro tenham o mesmo tamanho;
// Lucas seja maior que Pedro.

let alturaPedro = 1.5;
let alturaLucas = 1.1;

let crescimentoPedro = 0.02;
let crescimentoLucas = 0.03;

let anos = 0;

while (alturaLucas <= alturaPedro) {
  alturaPedro += crescimentoPedro;
  alturaLucas += crescimentoLucas;
  anos++;
}

console.log(
  "Serão necessários " + anos + " anos para que Lucas seja maior que Pedro"
);
