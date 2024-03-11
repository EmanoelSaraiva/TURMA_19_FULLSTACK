let pesonota1 = 2;
let pesonota2 = 3;
let pesonota3 = 5;
//calcula o peso de cada nota
const peso = pesonota1 + pesonota2 + pesonota3;

function calcMedia(nota1, nota2, nota3) {
  //Calcula a media conforme o peso de cada nota
  let media =
    (nota1 * pesonota1 + nota2 * pesonota2 + nota3 * pesonota3) / peso;
  //Verifica se for maior ou igual a 7 esta aprovado e se for menor que 7 reprovado
  if (media >= 7) {
    console.log("A média do aluno foi: " + media + " e foi aprovado");
  } else {
    console.log("A média do aluno foi: " + media + " e foi reprovado");
  }
}

calcMedia(5, 6, 3);
