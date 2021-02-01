CurrentYear = new Date().getFullYear();
document.getElementById("current-year").innerHTML = CurrentYear;
var lastModified = document.lastModified;
document.getElementById("updated").innerHTML = "Last update: " + lastModified;

const hamButton = document.querySelector(".menu");
const menuUl = document.querySelector(".navigation");

hamButton.addEventListener(
  "click",
  () => {
    menuUl.classList.toggle("responsive");
  },
  false
);
