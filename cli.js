//projeto CLI - Desenvolve
function piadas(categoria){
  return fetch (`https://v2.jokeapi.dev/joke/${categoria}?lang=pt`)
  .then(resposta => resposta.json())
}

piadas('any').then(dados =>{console.log(dados.setup, dados.delivery);})