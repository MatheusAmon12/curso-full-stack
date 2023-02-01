/*
AJAX - 2005 - faz requisições em determinado servidor

Asynchronous JavaScript And XML
*/

const xhttp = new XMLHttpRequest()

function buildHtml(){
    xhttp.onreadystatechange = function(){//capturando a resposta da API para tratar dos dados, deve ser feito antes do open e send.
        if (this.readyState == 4 && this.status == 200){//corrige os erros que aparecem no console, pois só executa quando tiver sucesso na resposta.
            const response = JSON.parse(this.responseText)//o this referencia o XML
            const container = document.querySelector('.container')
    
            let html = ''
            response.forEach(function(item){
                html += `
                    <h1 class="title">${item.title}</h1>
                    <img src="${item.url}" alt="" class="photo">
                `
            })
            
            container.innerHTML = html
        }
    }
}

xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
xhttp.send()

buildHtml()