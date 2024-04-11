const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

function imprimirArrayOriginal(array) {
  for (let valor of array) {
    console.log(valor);
  }
}

function imprimirArrayDivididoPor10(array) {
  for (let valor of array) {
    console.log(valor / 10);
  }
}

function numerosPares(array) {
  const pares = [];
  for (let valor of array) {
    if (valor % 2 === 0) {
      pares.push(valor);
    }
  }
  console.log(pares);
}

function arrayComStrings(array) {
  const strings = [];
  for (let i = 0; i < array.length; i++) {
    strings.push(`O elemento do índex ${i} é: ${array[i]}`);
  }
  console.log(strings);
}

function maiorEMenorNumero(array) {
  let valorMaximo = Number.MIN_VALUE;
  let valorMinimo = Number.MAX_VALUE;

  for (let valor of array) {
    if (valor > valorMaximo) {
      valorMaximo = valor;
    }
    if (valor < valorMinimo) {
      valorMinimo = valor;
    }
  }

  console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`);
}


console.log("Resposta item a.");
imprimirArrayOriginal(array);

console.log("\nResposta item b.");
imprimirArrayDivididoPor10(array);

console.log("\nResposta item c.");
numerosPares(array);

console.log("\nResposta item d.");
arrayComStrings(array);

console.log("\nResposta item e.");
maiorEMenorNumero(array);
