//Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const personOne = {
    nome:"Augusto",
    idade:18 ,
    sexo: "Masculino",
    Profissão: "programador",
    nacionalidade:"Brasileiro"
}

if (personOne.idade>= 18 && (personOne.nacionalidade === "Brasileiro" || personOne.nacionalidade === "Brasileira")) {
    console.log("Você passou no processo")

} else {
    console.log("Você não passou no processo")
}