let listaAtores = [

    {
  
      nome: 'Keanu Reeves',
  
      personagem: 'Neo',
  
      filme: 'The Matrix',
  
    },
  
    {
  
      nome: 'David Prowse',
  
      personagem: 'Darth Vader',
  
      filme: 'Star Wars Episódios IV-VI',
  
    },
  
    {
  
      nome: 'Bruce Wayne',
  
      personagem: 'Batman',
  
      filme: 'Batman - O Início'
  
    },
  
  ]


let htmlAtores = ''

for (let ator of listaAtores){
    htmlAtores += 
    `   
        <div class="box">
            <h1>${ator.nome}</h1>
            <p>Interpreta o personagem ${ator.personagem} no filme ${ator.filme}</p>
        </div>
    `
}

document.querySelector('.container').innerHTML = htmlAtores

