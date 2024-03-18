// Faça um algoritmo que leia a idade e peso de um atleta e imprima
// a sua categoria, de acordo com a seguinte tabela:

// Idade         Peso        Categoria
// Até 12 anos     -          Infantil
// 13 a 16 anos Até 40kg    Juvenil leve
// Acima de 40kg Juvenil       pesado
// 17 a 24 anos Até 45kg Sênior leve
// Acima de 45kg até 60kg Sênior médio

// Acima de 60kg Sênior pesado
// Acima de 24 anos - Veterano

let idade = prompt("Insira a idade do atleta");
let peso = parseFloat(prompt("Insira o peso do atleta").replace(",", "."));

if (idade <= 12) {
  alert("Categoria Infantil");
} else if (idade >= 13 && idade <= 16) {
  const categoria = peso <= 40 ? "Categoria Juvenil Leve" : "Juvenil Pesado";
  alert(categoria);
} else if (idade >= 17 && idade <= 24) {
  if (peso <= 45) {
    alert("Categoria Sênior Leve");
  } else if (peso > 45 && peso <= 60) {
    alert("Categoria Sênior médio");
  } else {
    alert("Categoria Sênior Pesado");
  }
} else {
  alert("Categoria Veterano");
}
