const media = 7

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
    nome: 'Pedro',
    sobrenome: 'Souza',
    nota: 5,
  },
]

const approved = alunos.filter(aluno => {
  if (aluno.nota >= media){
    return aluno
  }
})

console.log(approved)