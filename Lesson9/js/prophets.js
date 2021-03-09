const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject["prophets"];

    prophets.map((item) => {
      let card = document.createElement("section");
      let div = document.createElement("div");
      let image = document.createElement("img");
      let name = document.createElement("h2");
      let birthDate = document.createElement("p");
      let birthPlace = document.createElement("p");
      let numOfChildren = document.createElement("p");
      let order = document.createElement("p");

      name.textContent = `${item.name} ${item.lastname}`;
      birthDate.textContent = `Date of Birth: ${item.birthdate}`;
      birthPlace.textContent = `Place of Birth: ${item.birthplace}`;
      numOfChildren.textContent = `Number of Children: ${item.numofchildren}`;
      order.textContent = `Latter-day Prophet #${item.order}`;
      image.setAttribute("src", `${item.imageurl}`);
      image.setAttribute("alt", `${item.name} ${item.lastname}`);
      image.setAttribute("loading", "lazy");

      div.appendChild(name);
      div.appendChild(birthDate);
      div.appendChild(birthPlace);
      div.appendChild(numOfChildren);
      div.appendChild(order);
      card.appendChild(div);
      card.appendChild(image);

      document.querySelector("div.cards").appendChild(card);
    });
  });
