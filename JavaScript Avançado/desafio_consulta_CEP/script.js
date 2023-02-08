const xhttp = new XMLHttpRequest()
const inputCep = document.querySelector('#cep')

inputCep.onblur = () => fetch(`​viacep.com.br/ws/${inputCep.value}/json/`, 'GET')
    .then(completeInput)
    .catch(exibirErro)

function completeInput(data){
    console.log('Tudo ok')
}

function exibirErro(erro){
    console.log(erro)
}

function fetch(url, method){
    return new Promise((resolve, reject) => {
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                const response = JSON.parse(this.responseText)

                resolve(response)
                console.log(response)
            }

            if (this.status === 404){
                const error =  'Não foi possível estabelecer conexão!'
                reject(error)
            }
        }
        xhttp.open(method, url, true)
        xhttp.send()
    })
}