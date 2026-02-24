
  function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("active");
  }

    function closeMenu() {
        document.getElementById("sideMenu").classList.remove("active");
    }


  function toggleDropdown(id) {
    const menu = document.getElementById(id);
    menu.style.display =
      menu.style.display === "flex" ? "none" : "flex";
  }
let currentIndex = 0;

function moveSlide(direction) {
  const carousel = document.querySelector('.product-carousel');
  const cards = document.querySelectorAll('.product-card');
  const cardWidth = cards[0].offsetWidth + 30; // card width + gap

  const cardsPerView = 4;
  const maxIndex = Math.ceil(cards.length / cardsPerView) - 1;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  carousel.style.transform = `translateX(-${currentIndex * cardsPerView * cardWidth}px)`;
}

const slides = document.querySelectorAll('.slideshow img');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);