let menuMobile = document.querySelector('.menuMobile')
let botaoMenu = document.querySelector('.botaoMenu')


/*function abrirFecharMenu(){
    if (menuMobile.classList.contains('aberto')){
        menuMobile.classList.remove('aberto')
        botaoMenu.innerHTML = 'Abrir menu'
    } else{
        menuMobile.classList.add('aberto')
        botaoMenu.innerHTML = 'Fechar menu'
    }
}*/

//OU

let aberto = false //variável de controle (flag), como o menu está inicialmente fechado defino ela como false

function abrirFecharMenu(){
    if (aberto === true){
        aberto = false //se a condição for verdadeira já altero o valor pra evitar que ela sempre fique nessa condição
        menuMobile.classList.remove('aberto')
        botaoMenu.innerText = 'Abrir menu'
    } else if (aberto === false){
        aberto = true //aqui faço o contrário do primeiro teste
        menuMobile.classList.add('aberto')
        botaoMenu.innerText = 'Fechar menu'
    }
}