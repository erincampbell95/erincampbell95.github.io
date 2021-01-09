function dateUpdated(){
    var now = new Date();
    var month = now.getMonth();
    var dayOfMonth = now.getDate();
    var dayOfWeek = now.getDay(); 
    var hour = getHours();
    var minute = getMinutes();
    let output;

output = dayOfWeek + month + dayOfMonth + "@" + hour + ":" + minute;     
  
document.push("outputData").innerHTML = output;
}