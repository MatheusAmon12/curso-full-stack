const clientes = [
    {name: 'Fulano', lastname: 'Da Silva', age: 34},
    {name: 'Ciclano', lastname: 'Santos', age: 45},
    {name: 'Beltrano', lastname: 'Moreira', age: 15},
]
/*
const clientesMaiores = clientes.filter(cliente => {
let retorno = false
if (cliente.name === 'Beltrano'){
    retorno = true
}
return retorno
})

const clientesMaiores = clientes.filter(cliente => {
let retorno = false
return cliente.age >= 18 ? true : false// if ternário
})

const clientesMaiores = clientes.filter(cliente => {
    return cliente.age >= 18
})
*/

const clientesMaiores = clientes.filter(cliente => cliente.age >= 18
)






console.log(clientesMaiores)