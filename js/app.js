const weather = new Weather();
const ui = new UI();

const searchBtn = document.getElementById("search-button"),
  locationInput = document.getElementById("location-input"),
  locationContainer = document.querySelector(".location"),
  resultsContainer = document.getElementById("results-container");

pageLoad();

function pageLoad() {
  let locationLocalStorage = localStorage.getItem("location");
  if (localStorage.getItem("location") === null) {
    console.log("no local storage");
  } else {
    weather.getWeather(locationLocalStorage).then((data) => {
      locationContainer.style.display = "block";
      resultsContainer.style.display = "flex";
      ui.updateUI(data);
    });
  }
}

// EVENT LISTENER
searchBtn.addEventListener("click", function (e) {
  if (locationInput.value !== "") {
    locationContainer.style.display = "block";
    resultsContainer.style.display = "flex";
    weather.getWeather(locationInput.value).then((data) => {
      ui.updateUI(data);
    });
  }

  localStorage.setItem("location", locationInput.value);
  e.preventDefault();
});
