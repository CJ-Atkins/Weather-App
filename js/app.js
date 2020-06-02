const weather = new Weather();

const searchBtn = document.getElementById('search-btn');
const locationInput = document.getElementById('location-input'),
  resultsCont = document.getElementById('results-cont');

// CURRENT GRID
const locationResult = document.getElementById('location-result'),
  currentTemp = document.getElementById('current-tempc'),
  currentHum = document.getElementById('current-humidity'),
  currentWind = document.getElementById('current-windmph'),
  currentRise = document.getElementById('current-sunrise'),
  currentSet = document.getElementById('current-sunset'),
  currentConIcon = document.getElementById('current-condition-icon'),
  currentCon = document.getElementById('current-condition');
// DAY TWO GRID
const dayTwoDate = document.getElementById('daytwo-date'),
  dayTwoCon = document.getElementById('daytwo-condition'),
  dayTwoConIcon = document.getElementById('daytwo-condition-icon'),
  dayTwoAvgTemp = document.getElementById('daytwo-avgtempc'),
  dayTwoMaxWind = document.getElementById('daytwo-maxwindmph'),
  dayTwoRise = document.getElementById('daytwo-sunrise'),
  dayTwoSet = document.getElementById('daytwo-sunset');
// DAY THREE GRID
const dayThreeDate = document.getElementById('daythree-date'),
  dayThreeCon = document.getElementById('daythree-condition'),
  dayThreeConIcon = document.getElementById('daythree-condition-icon'),
  dayThreeAvgTemp = document.getElementById('daythree-avgtempc'),
  dayThreeMaxWind = document.getElementById('daythree-maxwindmph'),
  dayThreeRise = document.getElementById('daythree-sunrise'),
  dayThreeSet = document.getElementById('daythree-sunset');

// EVENT LISTENER
searchBtn.addEventListener('click', function (e) {
  if (locationInput !== '') {
    resultsCont.style.display = 'flex';
    weather.getWeather(locationInput.value).then((data) => {
      // CURRENT
      // Location result
      locationResult.innerHTML = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
      // Condition result
      currentCon.innerHTML = `${data.current.condition.text}`;
      // Condition icon
      currentConIcon.src = `${data.current.condition.icon}`;
      // Current tempc
      currentTemp.innerHTML = `${data.current.temp_c} °C`;
      // Current Humidity
      currentHum.innerHTML = `${data.current.humidity}`;
      // Current Wind
      currentWind.innerHTML = `${data.current.wind_mph}mph`;
      // Current Sunrise
      currentRise.innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`;
      // Current Sunset
      currentSet.innerHTML = `${data.forecast.forecastday[0].astro.sunset}`;

      // DAY TWO
      // Date
      dayTwoDate.innerHTML = `${data.forecast.forecastday[1].date}`;
      // Condition
      dayTwoCon.innerHTML = `${data.forecast.forecastday[1].day.condition.text}`;
      // Condition Icon
      dayTwoConIcon.src = `${data.forecast.forecastday[1].day.condition.icon}`;
      // Average Temperature
      dayTwoAvgTemp.innerHTML = `${data.forecast.forecastday[1].day.avgtemp_c}°C`;
      // Max wind speed
      dayTwoMaxWind.innerHTML = `${data.forecast.forecastday[1].day.maxwind_mph}mph`;
      // Sunrise
      dayTwoRise.innerHTML = `${data.forecast.forecastday[1].astro.sunrise}`;
      // Sunset
      dayTwoSet.innerHTML = `${data.forecast.forecastday[1].astro.sunset}`;

      // DAY THREE
      // Date
      dayThreeDate.innerHTML = `${data.forecast.forecastday[2].date}`;
      // Condition
      dayThreeCon.innerHTML = `${data.forecast.forecastday[2].day.condition.text}`;
      // Condition Icon
      dayThreeConIcon.src = `${data.forecast.forecastday[2].day.condition.icon}`;
      // Average Temperature
      dayThreeAvgTemp.innerHTML = `${data.forecast.forecastday[2].day.avgtemp_c}°C`;
      // Max wind speed
      dayThreeMaxWind.innerHTML = `${data.forecast.forecastday[2].day.maxwind_mph}mph`;
      // Sunrise
      dayThreeRise.innerHTML = `${data.forecast.forecastday[2].astro.sunrise}`;
      // Sunset
      dayThreeSet.innerHTML = `${data.forecast.forecastday[2].astro.sunset}`;
    });
  }
  e.preventDefault();
});
