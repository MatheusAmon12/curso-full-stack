const cep = document.querySelector('#cep')
const rua = document.querySelector('#rua')
const bairro = document.querySelector('#bairro')
const cidade = document.querySelector('#cidade')
const estado = document.querySelector('#estado')
const ibge = document.querySelector('#ibge')
const button = document.querySelector('.button')

const configs = {
    method: 'GET',
}

function json(response){
    return response.json()
}

function autoComplete(data){
    setTimeout(() => {
        rua.value = data.logradouro
        bairro.value = data.bairro
        cidade.value = data.localidade
        estado.value = data.uf
        ibge.value = data.ibge
    }, 1000);

    rua.value = "..."
    bairro.value = "..."
    cidade.value = "..."
    estado.value = "..."
    ibge.value = "..."
}

function erro(){
    console.log('Erro')
}

cep.onblur = () =>
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`, configs)
        .then(json)
        .then(autoComplete)
        .catch(erro)