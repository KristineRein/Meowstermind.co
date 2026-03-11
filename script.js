
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

// Get cart elements
const cartMenu = document.getElementById("cartMenu");
const cartIcon = document.getElementById("cartIcon");
const closeCart = document.getElementById("closeCart");

// Open cart
cartIcon.addEventListener("click", function(){
  cartMenu.classList.add("active");
});

// Close cart
closeCart.addEventListener("click", function(){
  cartMenu.classList.remove("active");
});

// Close cart if clicking outside
window.addEventListener("click", function(e){
  if(e.target === cartMenu) cartMenu.classList.remove("active");
});

// This is just a fake database for frontend use purposes for now
const productsDB = [
  { id: 1, name: "Original Stickers", category: "Stickers", price: 100 },
  { id: 2, name: "Character Stickers", category: "Stickers", price: 120 },
  { id: 3, name: "Bookmarks", category: "Accessories", price: 80 },
  { id: 4, name: "Keychains", category: "Accessories", price: 150 },
  { id: 5, name: "Polaroid-style Pictures", category: "Prints", price: 200 },
  { id: 6, name: "Gift Box Packaging", category: "Services", price: 250 },
  { id: 7, name: "Custom Souvenir", category: "Services", price: 300 }
];

//Search function
function searchProducts(query) {
  const lowerQuery = query.toLowerCase();
  // Filter products whose name or category contains the query
  return productsDB.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) || 
    product.category.toLowerCase().includes(lowerQuery)
  );
}
document.addEventListener("DOMContentLoaded", function() {
  const searchIcon = document.getElementById("searchIcon");
  const headerSearch = document.getElementById("headerSearch");
  const searchInput = document.getElementById("headerSearchInput");

  // Toggle search bar when search icon is clicked
  searchIcon.addEventListener("click", function(e) {
    e.stopPropagation(); // Prevent the click from bubbling
    if(headerSearch.style.display === "flex") {
      headerSearch.style.display = "none";
    } else {
      headerSearch.style.display = "flex";
      searchInput.focus();
    }
  });

  // Close search bar when clicking anywhere outside
  window.addEventListener("click", function(e) {
    if(headerSearch.style.display === "flex" && !headerSearch.contains(e.target) && e.target !== searchIcon) {
      headerSearch.style.display = "none";
    }
  });

  // Optional: also prevent closing when clicking inside the input
  headerSearch.addEventListener("click", function(e) {
    e.stopPropagation();
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const mobileSearchIcon = document.getElementById("mobileSearchIcon");
  const mobileSearchContainer = document.getElementById("mobileSearchContainer");
  const mobileSearchInput = document.getElementById("mobileSearchInput");
  const sideMenu = document.getElementById("sideMenu");

  // Toggle search input when icon is clicked
  mobileSearchIcon.addEventListener("click", function(e) {
    e.stopPropagation(); // prevent bubbling
    if(!sideMenu.classList.contains("active")) {
      sideMenu.classList.add("active");
    }

    if(mobileSearchContainer.style.display === "flex") {
      mobileSearchContainer.style.display = "none";
      mobileSearchIcon.style.display = "flex";
    } else {
      mobileSearchContainer.style.display = "flex";
      mobileSearchInput.focus();
      mobileSearchIcon.style.display = "none";
    }
  });

  // Handle search submit
  const mobileSearchForm = document.getElementById("mobileSearchForm");
  mobileSearchForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const query = mobileSearchInput.value.trim();
    if(!query) return;

    window.location.href = "search.html?q=" + encodeURIComponent(query);

    // Reset menu and search
    sideMenu.classList.remove("active");
    mobileSearchContainer.style.display = "none";
    mobileSearchIcon.style.display = "flex";
  });

  // Close mobile search when clicking outside
  window.addEventListener("click", function(e) {
    if(
      mobileSearchContainer.style.display === "flex" &&
      !mobileSearchContainer.contains(e.target) && 
      e.target !== mobileSearchIcon
    ) {
      mobileSearchContainer.style.display = "none";
      mobileSearchIcon.style.display = "flex";
    }
  });

  // Prevent clicks inside search container from closing it
  mobileSearchContainer.addEventListener("click", function(e){
    e.stopPropagation();
  });
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