/*
CALLBACKS
*/

const xhttp = new XMLHttpRequest()
const btn = document.querySelector('.btn')

btn.onclick = () => getResponse(buildHtml)//usar a arrow function impede que o getResponse seja executado antes do click

function buildHtml(data){
    const container = document.querySelector('.container')
    let html = ''
    data.forEach(function(item){
        html += `
            <h1 class="title">${item.title}</h1>
            <img src="${item.url}" alt="" class="photo">
        `
    })
    
    container.innerHTML = html
}

function getResponse(callback){
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            const response = JSON.parse(this.responseText)
            
            if (callback){
                callback(response)
            }
        }
    }
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
    xhttp.send()
}
