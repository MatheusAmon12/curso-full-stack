let contador = document.querySelector('#contador')
let count = 0
let btnPausar = document.querySelector('#pausar')


let intervalo = setInterval(function(){//diferentemente do setTimeOut, o setInterval realiza a execução a cada tempo definido no segundo parâmetro da função.
    count++
    contador.innerText = count
}, 1)

btnPausar.onclick = function(){//essa função permite pausar a execução do setInterval
    clearInterval(intervalo)
}