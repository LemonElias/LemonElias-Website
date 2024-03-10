var aboutList = ["Web & Software Developer", "Gamer & Content Creator"]

setInterval(function(){
  document.getElementById("about-headline").innerHTML = aboutList[0]
  setTimeout(function() {
    document.getElementById("about-headline").innerHTML = aboutList[1]
  }, 7000)
}, 14000);
