const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
 .then(function (response) {
   return response.json();
 })
 .then(function (jsonObject) {
   const towns = jsonObject['towns'];
   for (let i = 0; i < towns.length; i++ ) {
       if (towns[i].name == 'Fish Haven') {
        let events = towns[i].events;
        for (let i=0; i < events.length; i++) {
        let event = document.createElement('p');
        event.innerHTML = events[i];
        document.querySelector('.townEvents').appendChild(event);
        }
    }
   }
});

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=b1c4009595630e2651d3712160a3c1f6&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);

    document.getElementById('current-temp').textContent = jsObject.main.temp;
  });

