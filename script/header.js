// header.js is a javscript preset
// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "15px";
    document.getElementById("header").style.height = "40px";
    document.getElementById("header").style.backgroundColor = "black";

  } else {
    document.getElementById("header").style.fontSize = "30px";
    document.getElementById("header").style.height = "90px";
    document.getElementById("header").style.backgroundColor = "";
  }
}