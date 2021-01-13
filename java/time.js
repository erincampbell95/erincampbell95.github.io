function dateUpdated(){
    var output = new Date(document.lastModified);
    var date = newDate();
    var outputData = output;
document.getElementById("copyRightYear").innerHTML = date.getFullYear();  
document.getElementById("outputData").innerHTML = output;
}