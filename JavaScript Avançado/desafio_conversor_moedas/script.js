let input = document.querySelector('.input')
const btnCalcular = document.querySelector('.btn')
const result = document.querySelector('.result')
const apiKey = "bc0b93495845806685b0"

btnCalcular.onclick = () => fetch(`https://free.currconv.com/api/v7/convert?q=USD_BRL,BRL_USD&compact=ultra&apiKey=${apiKey}`)
    .then(toObject)
    .then(buildHtml)
    .catch(error)

function toObject(response){
    return response.json()
}

function buildHtml(data){
    let conversion = input.value * data.USD_BRL
    result.innerText = `R$ ${conversion.toFixed(2)}`
}

function error(){
    console.log('Ops, algo deu errado! Tente novamente.')
}