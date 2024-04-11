const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Vamos jogar!");

rl.question("Primeiro jogador, escolha um número: ", (numeroEscolhido) => {
  numeroEscolhido = Number(numeroEscolhido);

  console.log("Número escolhido! Agora é a vez do segundo jogador.");

  let tentativas = 0;

  const receberChute = () => {
    rl.question("Segundo jogador, chute um número: ", (chute) => {
      chute = Number(chute);
      tentativas++;

      if (chute === numeroEscolhido) {
        console.log("Acertou!!");
        console.log("O número de tentativas foi:", tentativas);
        rl.close();
      } else {
        if (chute < numeroEscolhido) {
          console.log(`Errou. O número escolhido é maior.`);
        } else {
          console.log(`Errou. O número escolhido é menor.`);
        }
        receberChute();
      }
    });
  };

  receberChute();
});
