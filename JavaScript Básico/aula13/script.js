let clientes = [
    {
        nome: 'Tiago',
        idade: 35,
        linguagens: ['JS', 'Python', 'PhP']
    },
    {
        nome: 'Matheus',
        idade: 22,
        linguagens: ['C#', 'Python', 'Dart']
    },
    {
        nome: 'André',
        idade: 23,
        linguagens: ['Dart', 'Java', 'C++']
    },

]

let htmlClientes = ''

for (let cliente of clientes){
    let listaLinguagens = ''
    for (linguagem of cliente.linguagens){
        listaLinguagens += `<li>${linguagem}</li>`
    }

    htmlClientes += `
        <li>
            <b>Nome: </b>${cliente.nome} <br>
            <b>Idade: </b> ${cliente.idade} <br>
            <b>Linguagens: </b><br>
            <ul>
                ${listaLinguagens}
            </ul>
        </li>
    `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes