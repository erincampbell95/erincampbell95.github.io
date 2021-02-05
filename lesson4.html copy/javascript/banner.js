function bannerAlert(){
    var now = new Date();
    var month = now.getMonth();
    var dayOfMonth = now.getDate();
    var dayOfWeek = now.getDay(); 
    let output;

    if (dayOfWeek == 6) {
        output = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion."
     }

     else {
        output = ""
     }
document.getElementById("outputData").innerHTML = output;
}