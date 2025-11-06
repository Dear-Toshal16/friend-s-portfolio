// ======= ADD SIMPLE SCROLL EFFECT TO NAVBAR =======
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
