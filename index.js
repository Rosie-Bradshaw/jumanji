function seeMore() {
    var x = document.getElementById("foldable");
    var y = document.getElementById("buttonseemore")
    if (x.style.display === "none") {x.style.display = "grid"  
      y.innerHTML="Ver menos temáticas";
    } else {
      x.style.display = "none";
      y.innerHTML="Ver más temáticas"
    }
 }
  

 function seeMore2() {
  var x = document.getElementById("foldable2");
  var y = document.getElementById("buttonseemore2")
  if (x.style.display === "none") {x.style.display = "grid"  
    y.innerHTML="Ver menos juegos";
  } else {
    x.style.display = "none";
    y.innerHTML="Ver más juegos"
  }
}
