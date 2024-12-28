// js/script.js

// Example: Smooth scrolling to sections on click

const sections = document.querySelectorAll('section');

sections.forEach(section => {
  const navLink = document.querySelector(`a[href="#${section.id}"]`);

  navLink.addEventListener('click', (event) => {
    event.preventDefault(); 

    const targetId = section.getAttribute('id');
    const targetPosition = section.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth' 
    });
  });
});

// You can add more JavaScript functionality here, such as:
// - Interactive elements
// - Form validation
// - AJAX requests
// - Dynamic content updates