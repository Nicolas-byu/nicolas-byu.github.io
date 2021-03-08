// Sets the days for the Five Day Forecast Table.
while (i < 5) {
  date.setDate(date.getDate() + i);
  let currentDay = date.toLocaleString("default", { weekday: "short" });
  date.setDate(date.getDate() - i);
  document.getElementById(`day${i + 1}`).innerHTML = currentDay;
  i++;
}

//Shows a message when is Saturday
const element = document.getElementById("message");

if (date.getDay() === 6) {
  element.classList.remove("hideme");
  element.classList.add("showme");
}
