//Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

const firstNumber = 100
const seccondNumber = 20
const thirdNumber = 99

if(firstNumber > seccondNumber && firstNumber > thirdNumber) {
    console.log("o primeiro é o maior")
}else if(seccondNumber > thirdNumber){
    console.log("o segundo é o maior")
}else {
    console.log("o terceiro é o maior")
}

if(firstNumber < seccondNumber && firstNumber < thirdNumber) {
    console.log("o primeiro é o menor")
}else if(seccondNumber < thirdNumber){
    console.log("o segundo é o menor")
}else {
    console.log("o terceiro é o menor")
}