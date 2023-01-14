/*let idade = prompt('Qual a sua idade?')

if (idade >= 18){
    document.write('Ok, você é maior de idade')
} else if (idade === 15){
    document.write('Você tem 15 anos')
} else{
    document.write('Você não pode acessar!')
}*/

let nome = prompt('Digite seu nome: ')

if (nome.toUpperCase() === 'MATHEUS'){
    document.write(`Olá ${nome.toUpperCase()}, seja bem vindo!`)
} else{
    document.write('Você não pode acessar!')
}