const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

// Se o usuário digitar o número 4, 
// o código produzirá um triângulo de asteriscos, 
// onde cada linha terá um número crescente de asteriscos, 
// começando com um asterisco na primeira linha e chegando a 
// quatro asteriscos na quarta linha.

