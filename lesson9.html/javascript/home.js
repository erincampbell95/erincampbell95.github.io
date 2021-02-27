const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
    
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h5 = document.createElement('h5');
      let h4 = document.createElement('h4');
      let image = document.createElement('img');

      h2.textContent = towns[i].name;
      h5.textContent = towns[i].motto;
      h4.textContext = towns[i].yearFounded;
      h4.textContext = towns[i].currentPopulation;
      h4.textContext = towns[i].averageRainfall;
      image.setAttribute('src', towns[i].photo);

      card.appendChild(h2);
      card.appendChild(h5);
      card.appendChild(h4);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }
  });


