const weather = new Weather();

const searchBtn = document.getElementById('search-button'),
  locationInput = document.getElementById('location-input'),
  resultsContainer = document.getElementById('results-container');

const locationResult = document.getElementById('location');
// DAY ONE
const dayOneIcon = document.getElementById('day-one-icon'),
  dayOneCondition = document.getElementById('day-one-condition'),
  dayOneTemperature = document.getElementById('day-one-temperature'),
  dayOneWind = document.getElementById('day-one-wind'),
  dayOneRise = document.getElementById('day-one-rise'),
  dayOneSet = document.getElementById('day-one-set');
// DAY TWO
const dayTwoIcon = document.getElementById('day-two-icon'),
  dayTwoCondition = document.getElementById('day-two-condition'),
  dayTwoTemperature = document.getElementById('day-two-temperature'),
  dayTwoWind = document.getElementById('day-two-wind'),
  dayTwoRise = document.getElementById('day-two-rise'),
  dayTwoSet = document.getElementById('day-two-set'),
  dayTwoDate = document.getElementById('day-two-date');
// DAY THREE
const dayThreeIcon = document.getElementById('day-three-icon'),
  dayThreeCondition = document.getElementById('day-three-condition'),
  dayThreeTemperature = document.getElementById('day-three-temperature'),
  dayThreeWind = document.getElementById('day-three-wind'),
  dayThreeRise = document.getElementById('day-three-rise'),
  dayThreeSet = document.getElementById('day-three-set'),
  dayThreeDate = document.getElementById('day-three-date');

// EVENT LISTENER
searchBtn.addEventListener('click', function (e) {
  if (locationInput !== '') {
    resultsContainer.style.display = 'block';
    weather.getWeather(locationInput.value).then((data) => {
      // Location result
      locationResult.innerHTML = `${data.location.name}, ${data.location.country}`;
      // DAY ONE
      dayOneCondition.innerHTML = `${data.current.condition.text}`;
      dayOneIcon.src = `http:${data.current.condition.icon}`;
      dayOneTemperature.innerHTML = `${data.current.temp_c}`;
      dayOneWind.innerHTML = `${data.current.wind_mph}mph`;
      dayOneRise.innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`;
      dayOneSet.innerHTML = `${data.forecast.forecastday[0].astro.sunset}`;

      // DAY TWO
      dayTwoDate.innerHTML = `${data.forecast.forecastday[1].date}`;
      dayTwoCondition.innerHTML = `${data.forecast.forecastday[1].day.condition.text}`;
      dayTwoIcon.src = `${data.forecast.forecastday[1].day.condition.icon}`;
      dayTwoTemperature.innerHTML = `${data.forecast.forecastday[1].day.avgtemp_c}`;
      dayTwoWind.innerHTML = `${data.forecast.forecastday[1].day.maxwind_mph}mph`;
      dayTwoRise.innerHTML = `${data.forecast.forecastday[1].astro.sunrise}`;
      dayTwoSet.innerHTML = `${data.forecast.forecastday[1].astro.sunset}`;

      // DAY THREE
      dayThreeDate.innerHTML = `${data.forecast.forecastday[2].date}`;
      dayThreeCondition.innerHTML = `${data.forecast.forecastday[2].day.condition.text}`;
      dayThreeIcon.src = `${data.forecast.forecastday[2].day.condition.icon}`;
      dayThreeTemperature.innerHTML = `${data.forecast.forecastday[2].day.avgtemp_c}`;
      dayThreeWind.innerHTML = `${data.forecast.forecastday[2].day.maxwind_mph}mph`;
      dayThreeRise.innerHTML = `${data.forecast.forecastday[2].astro.sunrise}`;
      dayThreeSet.innerHTML = `${data.forecast.forecastday[2].astro.sunset}`;
    });
  }
  e.preventDefault();
});
