const apiURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=-33.45694&lon=-70.64827&appid=06b6331ef13b0a99c294a19279a4add5&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    document.getElementById("currentTemp").textContent =
      weatherInfo.current.temp;
    document.getElementById("condition").textContent =
      weatherInfo.current.weather[0].description;
    document.getElementById("humidity").textContent =
      weatherInfo.current.humidity;

    let forecastDays = new Date().getDay() + 1;
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    for (i = 0; i < 3; i++) {
      let dayName = document.createElement("span");
      let temp = document.createElement("p");
      let iconCode = weatherInfo.daily[i].weather[0].icon;
      let iconPath = "http://openweathermap.org/img/w/" + iconCode + ".png";
      let icon = document.createElement("img");
      icon.src = iconPath;
      let day = document.createElement("div");

      dayName.textContent = weekday[forecastDays];
      temp.textContent = weatherInfo.daily[i].temp.day + "\xB0";

      day.append(dayName);
      day.append(icon);
      day.append(temp);

      document.getElementById("forecast-days").append(day);
      forecastDays += 1;
    }
  });
