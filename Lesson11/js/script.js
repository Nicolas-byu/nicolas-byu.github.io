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
