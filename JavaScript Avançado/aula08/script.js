/*
LOCAL STORAGE
*/

localStorage.setItem('Tarefa', 'Estudar JavaScript')

/*
const valor = localStorage.getItem('Tarefa')
console.log(valor)
 */

const tarefas = [
    {tarefa: 'Estudar JS'},
    {tarefa: 'Estudar React.js'},
    {tarefa: 'Estudar Node.js'},
    {tarefa: 'Estudar API'},
]

const tarefasJson = JSON.stringify(tarefas)

localStorage.setItem('Tarefa', tarefasJson)

const listaTarefasSalvas = localStorage.getItem('Tarefa')
const listaTarefasObj = JSON.parse(listaTarefasSalvas)

console.table(listaTarefasObj)