
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.navigation-menu');

  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active'); // Перемикає клас "active"
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const slideContainer = document.querySelector(".slide-container");
  const slides = document.querySelectorAll(".slide:not(.clone)");
  let index = 0;
  let interval = setInterval(nextSlide, 4000);

  function nextSlide() {
    if (index >= slides.length - 1) {
      goToSlide(0);
    } else {
      index++;
      slideContainer.style.transition = 'transform 0.8s ease-in-out';
      slideContainer.style.transform = `translateX(${-index * 21.5}%)`;
    }
  }

  function goToSlide(slideIndex) {
    index = slideIndex;
    slideContainer.style.transition = 'transform 0.8s ease-in-out';
    slideContainer.style.transform = `translateX(${-index * 100}%)`;
    // Reset the interval
    clearInterval(interval);
    interval = setInterval(nextSlide, 4000);
  }

  slideContainer.addEventListener('transitionend', function() {
    // "Jump" to the real first slide after the transition ends when on the first clone
    if (slides[index].classList.contains('clone')) {
      goToSlide(index === 0 ? slides.length : 0);
    }
  });
});
