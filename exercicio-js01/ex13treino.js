//operador ternáro


const saldo = true
const contabloqueada= true
const contaexiste= false

const tranferir = saldo && contabloqueada && contaexiste ? 'tranferencia realizada' : 'tranferencia negada'

console.log(tranferir)