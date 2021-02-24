const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    for (let i = 0; i < towns.length; i++ ) {
    }
  });

const towns = jsonObject['towns'];
let card = document.createElement('section');
let h2 = document.createElement('h2');
let h5 = document.createElement('h5');
let h4 = document.createElement('h4');
let image = document.createElement('img');

h2.textContent = prophets[i].name + ' ' + prophets[i].lastname + "-"  + prophets[i.length-1];
image.setAttribute('src', prophets[i].imageurl);

card.appendChild(h2);
card.appendChild(h5);
card.appendChild(h4);
card.appendChild(image);

document.querySelector('div.cards').appendChild(card);