/*
ASYNC / AWAIT - PERMITE TRANSFORMAR ASSÍNCRONAS EM SÍNCRONAS
*/
const btn = document.querySelector('.btn')

const configs = {
    method: 'POST'
}

btn.onclick = aoClicarNoBotao



async function aoClicarNoBotao(){//indicar primeiro que a função é assíncrona
    const dados = await fetch('https://jsonplaceholder.typicode.com/photos')//indicar que aqui interpretador vai esperar a execução deste comando antes de prosseguir, deve ser obrigatóriamente uma promisses
        .then(toJson)
        .catch(showError)

    console.log(dados)
}

function toJson(response){
    return response.json()
}

function buildHtml(data){
    console.log('Montei o HTML')
}

function showError(){
    console.log('Ops, deu erro, tente novamente!')
}
