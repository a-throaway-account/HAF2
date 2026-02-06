const burger = document.getElementById("burger");
const mobileMenu = document.querySelector(".mobile-menu");

burger?.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    burger.classList.remove("active");
  });
});