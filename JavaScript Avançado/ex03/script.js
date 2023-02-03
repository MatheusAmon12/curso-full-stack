const aluno = {
  nome: 'Maria',
  sobrenome: 'da Silva',
  notas: [7, 10, 8, 5, 7, 9],
}

const totalBimestres = aluno.notas.length

const somaNotas = aluno.notas.reduce((acc, curr) => {
  return acc + curr
}, 0)

const media = Math.round(somaNotas / totalBimestres)

console.log(`A média de ${aluno.nome} ${aluno.sobrenome} foi ${media}, para o total de ${totalBimestres} bimestres.`)