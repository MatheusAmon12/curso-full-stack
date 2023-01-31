const clientes = [
    {name: 'Thiago', score: 34},
    {name: 'Jaqueline', score: 38},
    {name: 'Sarah', score: 80},
    {name: 'Clara', score: 50},
    {name: 'Sophia', score: 98},
]

/*
const pass = clientes.filter(cliente => cliente.score >= 50)
console.log(pass)

const fail = clientes.filter(cliente => cliente.score < 50)
console.log(fail)

const result = {
    pass: pass,
    fail: fail
}
console.table(result)

*/


/*
acc = accumulator
curr = current

O reduce recebe dois parâmetros em sua função, o acumulador e o atual. Ele percorre arrays e retornam qualquer outro valor. Como o acc inicia zerado temos que retorná-lo.
*/
const result = clientes.reduce((acc, curr) => {
    if (curr.score >= 50){
        acc.pass.push(curr)
    } else{
        acc.fail.push(curr)
    }

    return acc
}, {
    pass: [],
    fail: []
})

console.log(result)

const numeros = [1, 2, 3, 4, 5]

const numerosFinal = numeros.reduce((acc, curr) => {
    acc += `${curr + 1} - `

    return acc
}, '')

console.log(numerosFinal.slice(0, -2))