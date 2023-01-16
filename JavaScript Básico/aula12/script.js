/*for (let contador = 4980; contador <= 5000; contador++){
    document.write(`Hello, world! ${contador}<br>`)
}*/
let opcoes

for (let contador = 1900; contador <= 2023; contador++){
    opcoes += `<option>${contador}</option>`
}

document.querySelector('.ano').innerHTML = opcoes

let lista = ''
let clientes = ['Matheus', 'Lívia', 'André', 'Lucas']

for (let contador = 0; contador < clientes.length; contador++){
    lista += `<li>${clientes[contador]}</li>`
}

document.querySelector('#listaDeClientes').innerHTML = lista