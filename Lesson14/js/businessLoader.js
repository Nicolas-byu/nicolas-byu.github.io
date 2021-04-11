let businessList = document.querySelector(".business-list");

fetch("businessList.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var contentHtml = "";
    data.map((item) => {
      contentHtml += "<div class='business'>";
      contentHtml += `<h4>${item.name}</h4>`;
      contentHtml += `<img src='assets/business-logos/${item.logo}' alt='A picture of ${item.name} logo'>`;
      contentHtml += `<h4>${item.number}</h4>`;
      contentHtml += `<h4>${item.address}</h4>`;
      contentHtml += `<a href=${item.social_media} target="_blank"><i class="bx bxl-instagram-alt"></i></a>`;
      contentHtml += `<a href=${item.website} target="_blank">Website</a>`;
      contentHtml += "</div>";
    });
    businessList.innerHTML += contentHtml;
  });

const gridBtn = document.getElementById("grid-op");

const listBtn = document.getElementById("list-op");

listBtn.addEventListener("click", () => {
  businessList.classList.add("list-layout");
});
gridBtn.addEventListener("click", () => {
  businessList.classList.remove("list-layout");
});
