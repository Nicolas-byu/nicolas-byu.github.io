function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Information + ${response}`);
  });
}

async function doWork() {
  try {
    const response = await makeRequest("Godogle");
    console.log("Response Received");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}
doWork();

let date = new Date();
let currentDate = date.getDate();
let currentMonth = Number(date.getMonth()) + 1;
let currentYear = date.getFullYear();
let i = 0;
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

// Ensures that Poppins loads properly.

WebFont.load({
  google: {
    families: ["Poppins"],
  },
});

// Lazy loading images
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 50px 0px",
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

//Shows a message when is Saturday
const element = document.getElementById("message");

if (date.getDay() === 6) {
  element.classList.remove("hideme");
  element.classList.add("showme");
}

const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=06b6331ef13b0a99c294a19279a4add5&units=imperial";
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
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=06b6331ef13b0a99c294a19279a4add5&units=imperial";
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
