function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-list") {
      x.className += " active";
    } else {
      x.className = "nav-list";
    }
  }

function background() {
    var x = document.getElementById("background");
    if (x.className === "main") {
      x.className += " active";
    } else {
      x.className = "main";
    }
  }
function burgerchange() {
    var x = document.getElementById("hamburger");
    if (x.className === "burger") {
      x.className += " active";
    } else {
      x.className = "burger";
    }
  }