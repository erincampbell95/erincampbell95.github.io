const requestURL = '.json/localBusiness.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const localBusiness = jsonObject['localBusiness'];
    for (let i = 0; i < localBusiness.length; i++ ) {

      let card = document.createElement('section');
      let image = document.createElement('img');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');

      image.setAttribute('src', localBusiness[i].logo);
      h2.textContent = localBusiness[i].name;
      p1.innerHTML = localBusiness[i].contact;
      p2.innerHTML = localBusiness[i].website;

      card.appendChild(image);
      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);

      document.querySelector('div.cards').appendChild(card);
    }
  });
