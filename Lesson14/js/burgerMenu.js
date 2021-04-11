const category = document.querySelector(".categories-container");
const menuBtn = document.querySelector(".menu-btn");
const burgerBtn = document.querySelector(".menu-btn__burger");
const html = document.querySelector("html");
const logo = document.getElementById("logo");

menuBtn.addEventListener(
  "click",
  () => {
    category.classList.toggle("show");
    menuBtn.classList.toggle("open");
  },
  false
);

html.addEventListener("click", (e) => {
  if (e.target !== logo && e.target !== category && e.target !== burgerBtn) {
    category.classList.remove("show");
    menuBtn.classList.remove("open");
  }
});
