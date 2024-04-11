const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Quantos bichinhos de estimação você tem? ", (quantidade) => {
  quantidade = Number(quantidade);
  
  if (quantidade === 0) {
    console.log("Que pena! Você pode adotar um pet!");
    rl.close();
  } else if (quantidade > 0) {
    const nomesDosPets = [];
    let contador = 1;

    const solicitarNomes = () => {
      rl.question(`Digite o nome do ${contador}º pet: `, (nome) => {
        nomesDosPets.push(nome);
        contador++;
        if (contador <= quantidade) {
          solicitarNomes();
        } else {
          console.log("Nomes dos pets:", nomesDosPets);
          rl.close();
        }
      });
    };

    solicitarNomes();
  } else {
    console.log("Número inválido de bichinhos de estimação.");
    rl.close();
  }
});


