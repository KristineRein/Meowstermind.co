
//navbar
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

// Get modal and close button
const loginModal = document.getElementById("loginModal");
const closeModal = loginModal.querySelector(".close-modal");

// Open modal when user icon clicked
document.getElementById("userIcon").addEventListener("click", function() {
  loginModal.style.display = "block";
});

// Close modal when clicking X
closeModal.addEventListener("click", function(){
  loginModal.style.display = "none";
});

// Close modal when clicking outside modal content
window.addEventListener("click", function(e){
  if(e.target === loginModal){
    loginModal.style.display = "none";
  }
});

// Optional: handle form submit
document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Login submitted! Replace with real login logic.");
  loginModal.style.display = "none";
});

// Get modals
const signupModal = document.getElementById("signupModal");

// Close button for Sign Up modal
signupModal.querySelector(".close-modal").addEventListener("click", function(){
  signupModal.style.display = "none";
});

// Open Sign Up modal from login modal link
document.getElementById("openSignup").addEventListener("click", function(e){
  e.preventDefault();
  loginModal.style.display = "none";
  signupModal.style.display = "block";
});

// Switch back to login from Sign Up modal
document.getElementById("switchToLogin").addEventListener("click", function(e){
  e.preventDefault();
  signupModal.style.display = "none";
  loginModal.style.display = "block";
});

// Optional: handle signup form submit
document.getElementById("signupForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Sign Up submitted! Replace with actual signup logic.");
  signupModal.style.display = "none";
});

// Optional: close modals when clicking outside
window.addEventListener("click", function(e){
  if(e.target === signupModal) signupModal.style.display = "none";
  if(e.target === loginModal) loginModal.style.display = "none";
});


// Product Carousel
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
//Service auto-play slider
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

// product drag in responsive
const container = document.querySelector(".product-carousel-container");

let startX;
let scrollLeft;

container.addEventListener("touchstart", (e) => {
  startX = e.touches[0].pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("touchmove", (e) => {
  const x = e.touches[0].pageX - container.offsetLeft;
  const walk = (x - startX) * 2; 
  container.scrollLeft = scrollLeft - walk;
});