let num = prompt('Qual tabuada deseja saber? ')

for (let contador = 0; contador <= 10; contador++){
    document.write(`${num} x ${contador} = ${num * contador}<br>`)
}