const requestURL = '.json/local-business.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const localBusiness = jsonObject['local-business'];
    for (let i = 0; i < local-business.length; i++ ) {

      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let image = document.createElement('img');

      h2.textContent = local-business[i].name + (i+1);
      image.setAttribute('src', local-business[i].imageurl);
      p1.innerHTML = local-business[i].contact;
      p2.innerHTML = local-business[i].website;

      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }
  });
