const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

// a) O que será impresso no console são os números da lista 
//que são maiores que 18. Então, o console irá imprimir: 19,21,23,25,27,30

// b) for of não fornece diretamente o indice para isso é melhor usar 
// o método 'entries()' que fornece tanto o indice quanto o valor 
// correspondente