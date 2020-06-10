class UI {
  constructor() {
    (this.location_result = document.getElementById('location')),
      // DAY ONE
      (this.day_one_icon = document.getElementById('day-one-icon')),
      (this.day_one_condition = document.getElementById('day-one-condition')),
      (this.day_one_temperature = document.getElementById(
        'day-one-temperature'
      )),
      (this.day_one_wind = document.getElementById('day-one-wind')),
      (this.day_one_rise = document.getElementById('day-one-rise')),
      (this.day_one_set = document.getElementById('day-one-set')),
      // DAY TWO
      (this.day_two_icon = document.getElementById('day-two-icon')),
      (this.day_two_condition = document.getElementById('day-two-condition')),
      (this.day_two_temperature = document.getElementById(
        'day-two-temperature'
      )),
      (this.day_two_wind = document.getElementById('day-two-wind')),
      (this.day_two_rise = document.getElementById('day-two-rise')),
      (this.day_two_set = document.getElementById('day-two-set')),
      (this.day_two_date = document.getElementById('day-two-date')),
      // DAY THREE
      (this.day_three_icon = document.getElementById('day-three-icon')),
      (this.day_three_condition = document.getElementById(
        'day-three-condition'
      )),
      (this.day_three_temperature = document.getElementById(
        'day-three-temperature'
      )),
      (this.day_three_wind = document.getElementById('day-three-wind')),
      (this.day_three_rise = document.getElementById('day-three-rise')),
      (this.day_three_set = document.getElementById('day-three-set')),
      (this.day_three_date = document.getElementById('day-three-date'));
  }

  updateUI(data) {
    this.location_result.innerHTML = `${data.location.name}, ${data.location.country}`;
    // DAY ONE
    this.day_one_condition.innerHTML = `${data.current.condition.text}`;
    this.day_one_icon.src = `http:${data.current.condition.icon}`;
    this.day_one_temperature.innerHTML = `${data.current.temp_c}`;
    this.day_one_wind.innerHTML = `${data.current.wind_mph}mph`;
    this.day_one_rise.innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`;
    this.day_one_set.innerHTML = `${data.forecast.forecastday[0].astro.sunset}`;
    // DAY TWO
    this.day_two_date.innerHTML = `${data.forecast.forecastday[1].date}`;
    this.day_two_condition.innerHTML = `${data.forecast.forecastday[1].day.condition.text}`;
    this.day_two_icon.src = `http:${data.forecast.forecastday[1].day.condition.icon}`;
    this.day_two_temperature.innerHTML = `${data.forecast.forecastday[1].day.avgtemp_c}`;
    this.day_two_wind.innerHTML = `${data.forecast.forecastday[1].day.maxwind_mph}mph`;
    this.day_two_rise.innerHTML = `${data.forecast.forecastday[1].astro.sunrise}`;
    this.day_two_set.innerHTML = `${data.forecast.forecastday[1].astro.sunset}`;
    // DAY THREE
    this.day_three_date.innerHTML = `${data.forecast.forecastday[2].date}`;
    this.day_three_condition.innerHTML = `${data.forecast.forecastday[2].day.condition.text}`;
    this.day_three_icon.src = `http:${data.forecast.forecastday[2].day.condition.icon}`;
    this.day_three_temperature.innerHTML = `${data.forecast.forecastday[2].day.avgtemp_c}`;
    this.day_three_wind.innerHTML = `${data.forecast.forecastday[2].day.maxwind_mph}mph`;
    this.day_three_rise.innerHTML = `${data.forecast.forecastday[2].astro.sunrise}`;
    this.day_three_set.innerHTML = `${data.forecast.forecastday[2].astro.sunset}`;
  }
}
