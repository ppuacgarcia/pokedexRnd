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
      const card = document.createElement('div');
      const container = document.getElementById('containerc');
      card.setAttribute('class', 'card');
    // Create card body and heade,
      const cardHeader = document.createElement('div');
      cardHeader.setAttribute('class', 'card-header');
      const cardBody = document.createElement('div');
      cardBody.setAttribute('class', 'card-body')
    //pokemon set name
      const pokeName = document.createElement('h5');
      pokeName.setAttribute('class', 'card-title');
      pokeName.textContent = data.species.name;
    //pokemon sprite
      const sprite = document.createElement('img');
      sprite.setAttribute('class', 'card-text');
      sprite.setAttribute('src',data.sprites.front_default);
    //insert elements
      container.appendChild(card);
      card.appendChild(cardHeader);
      card.appendChild(cardBody);
    // add the pokemon name
      cardHeader.appendChild(pokeName);
    // Add the pokemon spritec
      cardBody.appendChild(sprite);
  }else{
    console.log('Ha ocurrido un error con código ' + request.status);
  }
  }

    request.send();
}
