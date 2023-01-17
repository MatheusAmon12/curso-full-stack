let botaoTeste = document.querySelector('#teste')
let contador = 0

/*botaoTeste.onclick = function(){
    console.log('Mensagem 1')
}

botaoTeste.onclick = function(){
    console.log('Mensagem 2')
}*/

//addEventListener

function clickBotao(){
    contador ++
    console.log('Mensagem 1')

    if (contador >= 5){
        botaoTeste.removeEventListener('click', clickBotao)
    }
}

botaoTeste.addEventListener('click', clickBotao)//nesse caso não adicionamos os (), senão a função será executada antes do evento

//onclick
//botaoTeste.onclick = clickBotao