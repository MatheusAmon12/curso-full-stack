let nome = prompt('Digite seu nome: ')
let idade = prompt('Digite sua idade: ')

if (idade >= 18){
    document.write(`Olá ${nome}, você é maior de idade.`)
    if (nome.toUpperCase() === 'THOMAS ANDERSON'){
        document.write(' Você é personagem do filme matrix.')
    }
} else{
    document.write(`Olá ${nome}, você é menor de idade.`)
    if (nome.toUpperCase() === 'THOMAS ANDERSON'){
        document.write(' Você é personagem do filme matrix.')
    }
}