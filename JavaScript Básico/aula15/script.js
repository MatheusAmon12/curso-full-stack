function helloWorld(){
    console.log('Hello, world!')
}

helloWorld()

function escreverPrompt(msg){
    console.log(msg)
}

escreverPrompt('Olá, mundo!')
escreverPrompt('Amo ser dev Full Stack!')
escreverPrompt('JS é incrível!')

let btn_1 = document.querySelector('#btn_1')
let btn_2 = document.querySelector('#btn_2')
let btn_3 = document.querySelector('#btn_3')

btn_1.addEventListener("click", function(){
    console.log('Hello, world!')
})

btn_2.addEventListener("click", function(){
    console.log('Olá, mundo!')
})

btn_3.addEventListener("click", function(){
    console.log('Testando funções.')
})