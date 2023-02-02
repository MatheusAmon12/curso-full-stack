/*
Fetch API - Substitui o XMLHttpRequest, é uma PROMISES
*/
const btn = document.querySelector('.btn')

const configs = {
    method: 'POST'
}

btn.onclick = () => 
    fetch('https://jsonplaceholder.typicode.com/photos', configs/*O segundo parâmetro é um objeto que passa as configurações, como o método. Normalmente setamos uma const com os dados*/)

        .then(toJson)//a resposta cai aqui em forma de objeto, contendo diversas informações, já passo para JSON

        .then(buildHtml)// meu construtor de HTML recebe a resposta e monta o conteúdo

        .catch(showError)

function toJson(response){
    return response.json()//aqui poderia ser colocado o then, já que se trata de uma promises. Mas estou retornando ela, logo o outro then que está encadeado recebe o valor retornado
}

function buildHtml(data){
    console.log('Montei o HTML')
    /*const container = document.querySelector('.container')
    let html = ''
    data.forEach(function(item){
        html += `
            <h1 class="title">${item.title}</h1>
            <img src="${item.url}" alt="" class="photo">
        `
    })
    
    container.innerHTML = html*/
}

function showError(){
    console.log('Ops, deu erro, tente novamente!')
}
