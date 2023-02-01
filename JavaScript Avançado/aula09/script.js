/*
SINCRONO vs ASSINCRONO
*/

function primeira(){
    console.log('primeira')
    for (let index = 0; index <= 1000000000; index++){//O for já é sincrono, só após a sua execução e o interpretador dá sequência no código.

    }
}

function segunda(){
    console.log('segunda')
}

//setTimeout(primeira, 2000)//setTimeout é uma função assíncrona, pois o código inicia sua execução e não espera acabar, já continua para as próximas linhas

primeira()

segunda()