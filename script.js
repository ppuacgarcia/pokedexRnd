//19/10/2022
//Pablo David Puac Garcia
//script for connect a pokemon API 
for(var i=0;i<6;i++){
const request = new XMLHttpRequest();
var pokernd=Math.floor(Math.random()*890)
console.log(pokernd)
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+pokernd+'/', true);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    const data = JSON.parse(this.response);
    //tarjeta
    const tarjeta = document.createElement('div');
    const contenedor = document.getElementById('contenedor');
    tarjeta.setAttribute('class', 'card');
    // Creamos el la cabecera y el cuerpo de la tarjeta
    const cabeceraTarjeta = document.createElement('div');
    cabeceraTarjeta.setAttribute('class', 'card-header');
    const cuerpoTarjeta = document.createElement('div');
    cuerpoTarjeta.setAttribute('class', 'card-body')
    //nombre pokemon
    const titulo = document.createElement('h5');
    titulo.setAttribute('class', 'card-title');
    titulo.textContent = data.species.name;
    //pokemon sprite
    const descripcion = document.createElement('img');
    descripcion.setAttribute('class', 'card-text');
    descripcion.setAttribute('src',data.sprites.front_default);
    contenedor.appendChild(tarjeta);
    tarjeta.appendChild(cabeceraTarjeta);
    tarjeta.appendChild(cuerpoTarjeta);
    // Agregamos el título a la cabecera
    cabeceraTarjeta.appendChild(titulo);
     // Agregamos la descripción al cuerpo
     cuerpoTarjeta.appendChild(descripcion);
  } else {
    console.log('Ha ocurrido un error con código ' + request.status);
  }
}

  request.send();
}
