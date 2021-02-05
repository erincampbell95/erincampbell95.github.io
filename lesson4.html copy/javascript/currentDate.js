let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
let date = New Date();

document.getElementById('todayDate').innerHTML= date.toLocaleString('en-US', options);