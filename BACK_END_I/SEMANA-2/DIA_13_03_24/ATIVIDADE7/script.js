let numeroVotos = parseFloat(prompt("Insira o numero de votos"));
let votosValidos = parseFloat(prompt("Insira o numero de votos válidos"));
let votosNulos = parseFloat(prompt("Insira o numero de votos nulos"));
let votosBrancos = parseFloat(prompt("Insira o numero de voto brancos"));

const valorPorcentoValidos = (votosValidos / numeroVotos) * 100;
const valorPorcentoNulos = (votosNulos / numeroVotos) * 100;
const valorPorcentoBrancos = (votosBrancos / numeroVotos) * 100;

if (numeroVotos < votosBrancos + votosNulos + votosValidos) {
  document.write("Insira valores validos");
} else {
  document.write(
    `Foram obtidos ${numeroVotos} de votos <br> Sendo que ${valorPorcentoBrancos.toFixed(
      2
    )}% de votos brancos <br> ${valorPorcentoNulos.toFixed(
      2
    )}% de votos nulos <br> ${valorPorcentoValidos.toFixed(
      2
    )}% de votos validos`
  );
}
