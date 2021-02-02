let currentDate = new Date().getDate();
let currentMonth = Number(new Date().getMonth()) + 1;
let currentYear = new Date().getFullYear();
if (currentDate < 10) {
  currentDate = "0" + currentDate;
}
if (currentMonth < 10) {
  currentMonth = "0" + currentMonth;
}

document.getElementById("current-date").innerHTML =
  currentDate + "/" + currentMonth + "/" + currentYear;

const hamButton = document.querySelector(".menu");
const menuUl = document.querySelector(".navigation");

hamButton.addEventListener(
  "click",
  () => {
    menuUl.classList.toggle("responsive");
  },
  false
);
