const hamburger = document.querySelector(".hamburger");
const burgerMenu = document.querySelector(".menu");
const footer = document.querySelector("footer");
// window.addEventListener("resize", (x) => {
//   if (window.innerWidth > 992) {
//     burgerMenu.classList.remove("is-active");
//     hamburger.classList.remove("is-active");
//     footer.classList.remove("hidden");
//   }
// });
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  burgerMenu.classList.toggle("is-active");
  footer.classList.toggle("hidden");
});
