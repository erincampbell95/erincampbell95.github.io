const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=b1c4009595630e2651d3712160a3c1f6&units=imperial';

  fetch(apiURL)
  .then(response => response.json())
  .then((jsObject) => {
      console.log(jsObject);
      const forecast = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

  console.log(forecast);

  const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  let day = 0;
  forecast.forEach(forecast => {
    let x = new Date(forecast.dt_txt);
  document.getElementById('temp'+(day+1)).textContent = Math.round(forecast.main.temp) + ' °F';
  document.getElementById('img'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
  document.getElementById('img'+(day+1)).alt = forecast.weather[0].description;
  document.getElementById('day'+(day+1)).textContent = weekdays[x.getDay()];
  day++;	  
  });
});
