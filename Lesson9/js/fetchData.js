const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    const towns = jsonObject["towns"];
    console.log(towns);
    cityList = ["Springfield", "Greenville", "Preston"];

    towns.map((item) => {
      if (cityList.includes(item.name)) {
        let card = document.createElement("section");
        let article = document.createElement("article");
        let name = document.createElement("h2");
        let motto = document.createElement("h3");
        let year = document.createElement("p");
        let population = document.createElement("p");
        let rainFall = document.createElement("p");
        let image = document.createElement("img");

        name.textContent = item.name;
        motto.textContent = item.motto;
        year.textContent = "Year Founded: " + item.yearFounded;
        population.textContent = "Population: " + item.currentPopulation;
        rainFall.textContent = "Annual Rain Fall: " + item.averageRainfall;

        image.setAttribute("src", "images/" + item.photo);
        image.setAttribute("alt", item.name + " Hometown");

        article.appendChild(name);
        article.appendChild(motto);
        article.appendChild(year);
        article.appendChild(population);
        article.appendChild(rainFall);
        card.appendChild(image);
        card.appendChild(article);

        document.querySelector("div.cards").appendChild(card);
      }
    });
  });
