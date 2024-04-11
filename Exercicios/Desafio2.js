const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Vamos jogar!");

const numeroEscolhido = Math.floor(Math.random() * 100) + 1;
console.log("Número sorteado pelo computador! Tente adivinhar.");

let tentativas = 0;

const receberChute = () => {
  rl.question("Chute um número entre 1 e 100: ", (chute) => {
    chute = Number(chute);
    tentativas++;

    if (chute === numeroEscolhido) {
      console.log("Acertou!!");
      console.log("O número de tentativas foi:", tentativas);
      rl.close();
    } else {
      if (chute < numeroEscolhido) {
        console.log(`Errou. O número sorteado é maior.`);
      } else {
        console.log(`Errou. O número sorteado é menor.`);
      }
      receberChute();
    }
  });
};

receberChute();
