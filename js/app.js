const weather = new Weather();
const ui = new UI();

const searchBtn = document.getElementById('search-button'),
  locationInput = document.getElementById('location-input'),
  resultsContainer = document.getElementById('results-container');

pageLoad();

function pageLoad() {
  let locationLocalStorage = localStorage.getItem('location');
  if (localStorage.getItem('location') === null) {
    console.log('no local storage');
  } else {
    weather.getWeather(locationLocalStorage).then((data) => {
      resultsContainer.style.display = 'block';
      ui.updateUI(data);
    });
  }
}

// EVENT LISTENER
searchBtn.addEventListener('click', function (e) {
  if (locationInput.value !== '') {
    resultsContainer.style.display = 'block';
    weather.getWeather(locationInput.value).then((data) => {
      ui.updateUI(data);
    });
  }

  localStorage.setItem('location', locationInput.value);
  e.preventDefault();
});
