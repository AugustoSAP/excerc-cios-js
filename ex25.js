//Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.

const numberOne =31
const numberTwo =17
const numberThree=21
const numberFor =9

if (numberOne % 2 === 0 && numberTwo % 2 === 0 && numberThree % 2 === 0 && numberFor % 2 === 0 ){
    console.log("todos são pares")
} else if (numberOne % 2 !== 0 && numberTwo % 2 !== 0 && numberThree % 2 !== 0 && numberFor % 2 !== 0 ) {
        console.log("todos são ímpares")
} else {
    console.log("tudo misturado ímpare e pares")
}
    
   

