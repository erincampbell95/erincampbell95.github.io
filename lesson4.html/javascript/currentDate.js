function todayDate(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var dayOfMonth = now.getDate();
    var dayOfWeek = now.getDay(); 
    let today = dayOfWeek + ", " + dayOfMonth + month + ", " + year;

 document.getElementById("todayDate").innerHTML = today;
}
 