// se en array
let slidesData = [
    {src: 'billeder/frokost03.jpg', alt: 'Madlavning'},
    {src: 'billeder/frokost01.jpg', alt: 'Frokost pause'},
    {src: 'billeder/frokost04.jpg', alt: 'Te'},
    {src: 'billeder/Frokost app01.png', alt: 'Appens forside'}
  ];


// variable for at tilføje 1 når der bliver trykket på knappen
let slideIndex = 1;
showSlides(slideIndex);


// function for at bevæge slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}


// denne fucntion fortæller coden hvilket slide vi er på med dots
function currentSlide(n) {
  showSlides(slideIndex = n);
}


// Hovedfunktionen, der styrer visningen af slides.
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("karrusel01");
  let dots = document.getElementsByClassName("dot");


  // hvis n er større end antalt af slide, skifter man slide
  if (n > slides.length) {slideIndex = 1}

  //hvis n er mindre end, så kommer man på det sidste slide
  if (n < 1) {slideIndex = slides.length}
  
  // looper igennem alle slide og skjuler de andre slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }

  // looper igennem alle dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Fjern alt css fra de ikke aktive slides
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // for det aktuelle slide til at komme frem
  slides[slideIndex-1].style.display = "block";

  // tilføjer active til den aktuelle dot
  dots[slideIndex-1].className += " active"; 
}
