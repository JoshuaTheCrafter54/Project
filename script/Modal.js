// This is the Javascript Modal for the css functionality //
// Getting the modal
var modal = document.getElementById("myModal");

// Getting the image elements and modal components
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var modalParagraph1 = document.getElementById("modalParagraph1");
var modalParagraph2 = document.getElementById("modalParagraph2");
var modalParagraph3 = document.getElementById("modalParagraph3");
var modalParagraph4 = document.getElementById("modalParagraph4");

// Getting all images with the class "myImg"
var images = document.querySelectorAll(".myImg");

// Loop through the images and add the click event listener
images.forEach(function(img) {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    modalParagraph1.innerHTML = this.getAttribute('text-line-1');
    modalParagraph2.innerHTML = this.getAttribute('text-line-2');
    modalParagraph3.innerHTML = this.getAttribute('text-line-3');
    modalParagraph4.innerHTML = this.getAttribute('text-line-4');
  }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}