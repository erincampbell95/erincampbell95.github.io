function todayDate(){
    var now = new Date();
    var month = now.getMonth();
    var dayOfMonth = now.getDate();
    var dayOfWeek = now.getDay(); 
    var hour = d.getHours();
    var minute = d.getMinutes();
    let output;

let output = dayOfWeek + month + dayOfMonth + "@" + hour + ":" + minute;     
  
document.getElementById("outputData").innerHTML = output;
}