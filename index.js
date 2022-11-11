function seeMore() {
    var x = document.getElementById("foldable");
    var y = document.getElementById("buttonseemore")
    if (x.style.display === "none") {x.style.display = "grid"  
      y.innerHTML="Ver menos tematicas";
    } else {
      x.style.display = "none";
      y.innerHTML="Ver más tematicas";
    }
 }
  