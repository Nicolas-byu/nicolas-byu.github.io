const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=06b6331ef13b0a99c294a19279a4add5&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    document.getElementById("townName").textContent = weatherInfo.name;
    document.getElementById("currentTemp").textContent = weatherInfo.main.temp;
    document.getElementById("maxTemp").textContent = weatherInfo.main.temp_max;
    document.getElementById("windSpeed").textContent = weatherInfo.wind.speed;
    document.getElementById("humidity").textContent = weatherInfo.main.humidity;

    let temp = parseFloat(document.getElementById("maxTemp").innerHTML);
    let windSpeed = parseFloat(document.getElementById("windSpeed").innerHTML);

    let windchill =
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temp * Math.pow(windSpeed, 0.16);

    if (temp <= 50 && windSpeed > 3) {
      document.getElementById("windchill").innerHTML = Math.round(windchill);
    } else {
      document.getElementById("windchill").innerHTML = "N/A";
    }
  });

const forecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=06b6331ef13b0a99c294a19279a4add5&units=imperial";
fetch(forecastURL)
  .then((response) => response.json())
  .then((forecastInfo) => {
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

    for (i = 0; i < forecastInfo.list.length; i++) {
      if (forecastInfo.list[i].dt_txt.includes("18:00:00")) {
        let dayName = document.createElement("span");
        let temp = document.createElement("p");
        let iconCode = forecastInfo.list[i].weather[0].icon;
        let iconPath = "http://openweathermap.org/img/w/" + iconCode + ".png";
        let icon = document.createElement("img");
        icon.src = iconPath;
        let day = document.createElement("div");

        dayName.textContent = weekday[forecastDays];
        temp.textContent = forecastInfo.list[i].main.temp + "\xB0";

        day.append(dayName);
        day.append(icon);
        day.append(temp);

        document.getElementById("forecast-days").append(day);
        forecastDays += 1;
      }
    }
  });

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("event1").textContent = jsObject.towns[0].events[0];
    document.getElementById("event2").textContent = jsObject.towns[0].events[1];
    document.getElementById("event3").textContent = jsObject.towns[0].events[2];
  });
