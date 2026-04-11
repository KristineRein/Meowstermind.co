// Load header
fetch("/partials/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // IMPORTANT: re-run header scripts after load
    initHeaderScripts();
  });

// Load footer
fetch("/partials/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

/* -----------------------------
   Put ALL your header JS here
------------------------------*/
function initHeaderScripts() {

  // menu toggle
  window.toggleMenu = function () {
    document.getElementById("sideMenu").classList.add("active");
  };

  window.closeMenu = function () {
    document.getElementById("sideMenu").classList.remove("active");
  };

  // dropdowns
  window.toggleDropdown = function (id) {
    document.getElementById(id).classList.toggle("show");
  };

  // cart, search, modals etc...
}

function initHeaderScripts() {

  // ===== NAVBAR =====
  window.toggleMenu = function () {
    document.getElementById("sideMenu").classList.toggle("active");
  };

  window.closeMenu = function () {
    document.getElementById("sideMenu").classList.remove("active");
  };

  window.toggleDropdown = function (id) {
    const menu = document.getElementById(id);
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  };

  // ===== USER MODAL =====
  const loginModal = document.getElementById("loginModal");
  const closeModal = loginModal?.querySelector(".close-modal");

  document.getElementById("userIcon")?.addEventListener("click", function () {
    loginModal.style.display = "block";
  });

  closeModal?.addEventListener("click", function () {
    loginModal.style.display = "none";
  });

  // ===== SIGNUP =====
  const signupModal = document.getElementById("signupModal");

  signupModal?.querySelector(".close-modal")?.addEventListener("click", function () {
    signupModal.style.display = "none";
  });

  document.getElementById("openSignup")?.addEventListener("click", function (e) {
    e.preventDefault();
    loginModal.style.display = "none";
    signupModal.style.display = "block";
  });

  document.getElementById("switchToLogin")?.addEventListener("click", function (e) {
    e.preventDefault();
    signupModal.style.display = "none";
    loginModal.style.display = "block";
  });

  // ===== CART =====
  const cartMenu = document.getElementById("cartMenu");
  const cartIcon = document.getElementById("cartIcon");
  const closeCart = document.getElementById("closeCart");

  cartIcon?.addEventListener("click", function () {
    cartMenu.classList.add("active");
  });

  closeCart?.addEventListener("click", function () {
    cartMenu.classList.remove("active");
  });

}