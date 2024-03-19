// Desenvolva um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar:
// A menor altura do grupo;
// A maior altura do grupo;

let menorAltura = Infinity;
let maiorAltura = -Infinity;

for (let i = 0; i < 15; i++) {
  let altura = parseFloat(
    prompt("Digite a altura da primeira pessoa" + (i + 1))
  );

  if (altura < menorAltura) {
    menorAltura = altura;
  }

  if (altura > maiorAltura) {
    maiorAltura = altura;
  }
}

document.writeln("A menor altura do grupo é: " + menorAltura);
document.writeln("A maior altura do grupo é: " + maiorAltura);
