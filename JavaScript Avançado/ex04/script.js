const alunos = [
  {
    nome: 'Maria',
    sobrenome: 'da Silva',
    nota: 10,
  },

  {
    nome: 'José',
    sobrenome: 'Moreira',
    nota: 4,
  },

  {
    nome: 'Paulo',
    sobrenome: 'Henrique',
    nota: 7,
  },

  {
    nome: 'Sara',
    sobrenome: 'Souza',
    nota: 5,
  },

  {
    nome: 'Clara',
    sobrenome: 'Barbosa',
    nota: 9,
  },

  {
    nome: 'Rodrigo',
    sobrenome: 'Barros',
    nota: 4,
  },

  {
    nome: 'Renato',
    sobrenome: 'Barros',
    nota: 7,
  },

  {
    nome: 'Andrea',
    sobrenome: 'Batista',
    nota: 6,
  },

  {
    nome: 'Carla',
    sobrenome: 'Campos',
    nota: 3,
  },

]

const inputNote = document.querySelector('.inputNote')
const ul = document.querySelector('.item')
const btnFilter = document.querySelector('.btnFilter')

btnFilter.onclick = function(e){
  e.preventDefault()
  let html = ''

  const filtered = alunos.filter(aluno => aluno.nota == inputNote.value)
  if (filtered.length == 0){
    html = 'Nenhum aluno tirou essa nota!'
  }

  filtered.forEach(function(aluno){
    html += `
      <li>${aluno.nome} ${aluno.sobrenome} | Nota: ${aluno.nota}</li>
    `
  })

  ul.innerHTML = html
}