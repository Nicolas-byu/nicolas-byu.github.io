var date = new Date();
let currentDate = date.getDate();
let currentMonth = Number(date.getMonth()) + 1;
let currentYear = date.getFullYear();
let i = 0;

// Sets the days for the Five Day Forecast Table.
while (i < 5) {
  date.setDate(date.getDate() + i);
  let currentDay = date.toLocaleString("default", { weekday: "short" });
  date.setDate(date.getDate() - i);
  document.getElementById(`day${i + 1}`).innerHTML = currentDay;
  i++;
}

// Adds a 0 before the days and months if they are smaller than 10.
if (currentDate < 10) {
  currentDate = "0" + currentDate;
}
if (currentMonth < 10) {
  currentMonth = "0" + currentMonth;
}

document.getElementById("current-date").innerHTML =
  currentDate + "/" + currentMonth + "/" + currentYear;

//Sets the hamburguer menu.
const hamButton = document.querySelector(".menu");
const menuUl = document.querySelector(".navigation");

hamButton.addEventListener(
  "click",
  () => {
    menuUl.classList.toggle("responsive");
  },
  false
);
