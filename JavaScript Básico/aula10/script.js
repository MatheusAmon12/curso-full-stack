let inputNota1 = prompt('Nota 1: ')
let inputNota2 = prompt('Nota 2: ')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let media = (nota1 + nota2) / 2

let mediaMinima = 7

if (media >= mediaMinima){
    document.write('Ok, passou de ano!')
} else if (media < mediaMinima){
    document.write('Ops, não passou de ano!')
}

document.write('<br>')

if (media >= mediaMinima && media === 10){
    document.write('Uau! Você foi excelente, continue assim!')
} else if (media >= mediaMinima && media === 9){
    document.write('Muito bem, vamos tentar chegar na média 10?')
}

console.log(media)