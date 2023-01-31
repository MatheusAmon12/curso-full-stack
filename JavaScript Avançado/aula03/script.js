/*
    ARROW FUNCTIONS - ES6

    As funções de seta nos permitem escrever uma sintaxe de funções mais simples
*/

const soma = (param1, param2) => {
    return param1 + param2
}

const resultado = soma(1, 2)
console.log(resultado)

const soma_2 = (param1, param2) => param1 + param2// quando não há código além do return podemos aplicar o retorno implícito, basta remover as chaves e a palavra return

const resultado_2 = soma_2(6, 8)
console.log(resultado_2)

const teste = param1 => {// quando há apenas um parâmetro posso remover os colchetes e deixar apenas o parâmetro
    console.log(param1)
}

teste('Ok')

