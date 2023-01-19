let resultado = document.querySelector('.resultado')
let btnSoma = document.querySelector('.incrementar')
let btnSub = document.querySelector('.decrementar')
let count = 0

btnSoma.addEventListener('click', function(){
    count++
    resultado.innerText = count
})

btnSub.addEventListener('click', function(){
    count--
    resultado.innerText = count
})