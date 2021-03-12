const apiURL_weather = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=b1c4009595630e2651d3712160a3c1f6&units=imperial';

fetch(apiURL-weather)
  .then((response) => response.json())
  .then((town) => {
    console.log(town);
    let description = town.weather[0].description;
    document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
    document.getElementById('current-temp').innerHTML = Math.round(town.main.temp);
    document.getElementById('humidity').innerHTML = town.main.humidity;
    document.getElementById('windspeed').innerHTML = Math.round(town.wind.speed);
  });