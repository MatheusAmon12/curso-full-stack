/*

string
number
boolean
array
object
undefined
null

*/
//String
let nome = 'Matheus'
console.log(nome)

let sobrenome = "Ferreira"
//console.log(nome + " " + sobrenome) maneira antiga de concatenação de dados
console.log(`${nome} ${sobrenome}`)

//number
let idade = 22
console.log(idade + 20)


//number float
let porcentagem = 10.2
console.log(porcentagem + '%')

//boolean
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)

//array
let habilidades = ['JS', 'React', 'HTML5', 'CSS3', 'Git', 'GitHub', 'Python']
console.log(habilidades)
console.log(habilidades.length)

//object
let pessoa = {
    nome: 'Matheus',
    sobrenome: 'Ferreira',
    idade: 22,
    habilidades: ['JS', 'React', 'HTML5', 'CSS3', 'Git', 'GitHub', 'Python']
    
}
console.table(pessoa)
console.log(pessoa.habilidades[3])
console.log(pessoa)
console.log(pessoa.sobrenome)
console.log(pessoa.habilidades)
console.log(`Meu nome é ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} anos e possuo habilidades em ${pessoa.habilidades}.`)

//undefined
let endereco
console.log(endereco)//foi declarada a variável, mas não foi DEFINIDA

//null
let cidade = null
console.log(cidade)//foi declarada, existe, mas o valor em si é nulo