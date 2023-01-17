// GLOBAL: é algo que está disponível em qualquer parte do código


//selecionando por id
document.querySelector('#titulo').innerHTML = 'Exemplo'  //altera o conteúdo dentro da tag html


//selecionando por tag
document.querySelector('a').innerHTML = 'teste ancora'


//selecionando várias tags
let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento){//função anônima / call back
    elemento.innerHTML = 'TESTE'
})


//selecionando várias classes
let boxes = document.querySelectorAll('.box')

boxes.forEach(function(box, index){
    box.innerHTML = 'BOX ' + (index + 1)
})