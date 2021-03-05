const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=b1c4009595630e2651d3712160a3c1f6';

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

