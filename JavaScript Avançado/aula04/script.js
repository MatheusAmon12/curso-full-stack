const clientes = [
    {name: 'Fulano', lastname: 'Da Silva'},
    {name: 'Ciclano', lastname: 'Santos'},
    {name: 'Beltrano', lastname: 'Moreira'},
]

//['Fulano Da Silva', 'Ciclano Santos']

let clienteFinal = []
clientes.forEach(function(cliente){
    clienteFinal.push(cliente.name + ' ' +cliente.lastname)
})

console.log(clienteFinal)

const clienteFinalMap = clientes.map(cliente => cliente.name + ' ' + cliente.lastname)// o map percorrer e retorna arrays
 

console.log(clienteFinalMap)