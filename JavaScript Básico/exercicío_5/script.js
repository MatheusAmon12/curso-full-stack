function entrar(){
    let nome = prompt('Digite seu nome: ')
    let idade = prompt('Digite sua idade: ')

    if (nome === '' || idade === ''){
        alert('Preencha todos os campos corretamente!')
    } else{
        if (idade >= 18){
            document.write(`<h1>Olá ${nome}, você é maior de idade.</h1> `)
            if (nome.toUpperCase() === 'THOMAS ANDERSON'){
                document.write('<h2>Você é personagem do filme matrix.</h2>')
            }
        } else{
            document.write(`<h1>Olá ${nome}, você é menor de idade.</h1>`)
            if (nome.toUpperCase() === 'THOMAS ANDERSON'){
                document.write('<h2>Você é personagem do filme matrix.</h2>')
            }
        }
    }
}