let botaoCadastrar = document.querySelector('.botaoCadastrar')
let toast = document.querySelector('.toast')
let tarefa = document.querySelector('#input')

function cadastroFeito(){
    toast.innerHTML = `A tarefa <b>${tarefa.value}</b> foi cadastrada com sucesso!`
    toast.classList.add('visible')
    
    setTimeout(function(){//o primeiro parâmetro é a função call back, o segundo é o tempo de duração
        toast.classList.remove('visible')
    }, 5000);
}

botaoCadastrar.addEventListener('click', cadastroFeito)