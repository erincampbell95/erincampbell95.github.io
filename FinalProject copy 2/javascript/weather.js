const apiURL_weather = 'https://api.openweathermap.org/data/2.5/weather?id=5577008&appid=b1c4009595630e2651d3712160a3c1f6&units=imperial';

fetch(apiURL_weather)
  .then((response) => response.json())
  .then((town) => {
    console.log(town);
    let description = town.weather[0].description;
    document.getElementById('current').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
    document.getElementById('current-temp').innerHTML = Math.round(town.main.temp);
    document.getElementById('humidity').innerHTML = town.main.humidity;
    windChill();
  });