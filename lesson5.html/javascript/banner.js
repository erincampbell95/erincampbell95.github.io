function bannerAlert(){
    var now = new Date();
    var month = now.getMonth();
    var dayOfMonth = now.getDate();
    var dayOfWeek = now.getDay(); 
    let output;

    if (dayOfWeek == 4) {
      document.getElementsByClassName("banner")[0].classList.toggle("responsive");
   }
}