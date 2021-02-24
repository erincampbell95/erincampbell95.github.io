    var now = new Date();
    var dayOfWeek = now.getDay(); 

    if (dayOfWeek == 5) {
      document.getElementsByClassName("banner")[0].classList.toggle("bannerShow");
   }
