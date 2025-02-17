let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function plusSlides(n) {
  clearTimeout(timeout);
  showSlides(slideIndex += n);
}

let timeout = setTimeout(showSlides, 1000);

function toggleDropdown(element) {
  let content = element.nextElementSibling;
  content.style.display = content.style.display === "block" ? "none" : "block";
}