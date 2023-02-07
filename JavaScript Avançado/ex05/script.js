

function exercicio_5(promise){
  return new Promise(function(resolve, reject){
    resolve(promise)
  })
}

function showConsole(text){
  setTimeout(function(){
    console.log(text)
  }, 10000)
}

function play(){
  exercicio_5('Ok, parece que funcionou!').then(showConsole)
}

play()