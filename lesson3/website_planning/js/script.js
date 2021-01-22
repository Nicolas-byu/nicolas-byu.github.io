CurrentYear = new Date().getFullYear();
document.getElementById("current-year").innerHTML = CurrentYear;
var lastModified = document.lastModified;
document.getElementById("updated").innerHTML = "Last update: " + lastModified;

function myFunction() {
  let x = document.getElementById("links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
