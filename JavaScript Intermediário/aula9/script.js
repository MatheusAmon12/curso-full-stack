let formulario = document.querySelector('#formCadastro')
let avisoErro = document.querySelector('.erro')

formulario.onsubmit = function(event){
    event.preventDefault()

    let inputNome = document.forms['formCadastro']['nome']
    let inputEmail = document.forms['formCadastro']['email']
    let inputOpt = document.forms['formCadastro']['cidade']
    let temErro = false

    if (!inputNome.value){
        temErro = true
        inputNome.classList.add('inputErro')
        let span = inputNome.nextSibling.nextSibling
        span.innerText = 'Digite o nome corretamente!'
    } else{
        
        inputNome.classList.remove('inputErro')

        let span = inputNome.nextSibling.nextSibling
        span.innerText = ''
    }

    if (!inputEmail.value){
        temErro = true
        inputEmail.classList.add('inputErro')
        let span = inputEmail.nextSibling.nextSibling
        span.innerText = 'Digite o e-mail corretamente!'

    } else{
        temErro = false
        inputEmail.classList.remove('inputErro')
        let span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }

    if (!inputOpt.value){
        temErro = true
        inputOpt.classList.add('inputErro')
        let span = inputOpt.nextSibling.nextSibling
        span.innerText = 'Selecione uma cidade!'

    } else{
        
        inputOpt.classList.remove('inputErro')
        let span = inputOpt.nextSibling.nextSibling
        span.innerText = ''
    }

    if (!temErro){
        formulario.submit()
    }

}