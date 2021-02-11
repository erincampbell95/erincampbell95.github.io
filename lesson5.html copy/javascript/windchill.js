var temperature = document.getElementById('temperature').innerHTML;
var windSpeed = document.getElementById("windspeed").innerHTML;

let f = windChill;
let t = temperature;
let s = windSpeed;

f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, .16)) + (0.4275 * t * Math.pow(s, .16));
    if(t <= 50 && s> 3){
        f = Math.round(f);
    }
    else{
        f = "N/A";
    }
document.getElementById("windChill").innerHTML = windChill;