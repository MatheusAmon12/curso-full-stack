/*
JSON

JAVASCRIPT OBJECT NOTATION

É o padrão de comunicação entre os sistemas, antes era XML.
*/

const object = {
    nome: 'Matheus',
    idade: 22
}

const json = JSON.stringify(object)///esse é o método para transformar o objeto em JSON

const jsonParseado = JSON.parse(json)///esse é o método para decodificar o JSON

console.log(jsonParseado.idade)
console.log(jsonParseado.nome)