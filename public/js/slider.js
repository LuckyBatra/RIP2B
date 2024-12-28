// Simplified JavaScript for basic sliding (using a timer)

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = 'none'; 
  });

  slides[index].style.display = 'block'; 
}

// Initial display
showSlide(currentSlide);

// Automatic slide transition (every 5 seconds)
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length; 
  showSlide(currentSlide);
}, 5000);