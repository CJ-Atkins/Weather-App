class UI {
  constructor() {
    (this.location_result = document.getElementById("location")),
      // DAY ONE
      (this.day_one_icon = document.getElementById("day-one-icon")),
      (this.day_one_condition = document.getElementById("day-one-condition")),
      (this.day_one_temperature = document.getElementById(
        "day-one-temperature"
      )),
      (this.day_one_rise = document.getElementById("day-one-rise")),
      (this.day_one_set = document.getElementById("day-one-set")),
      // DAY TWO
      (this.day_two_icon = document.getElementById("day-two-icon")),
      (this.day_two_condition = document.getElementById("day-two-condition")),
      (this.day_two_temperature = document.getElementById(
        "day-two-temperature"
      )),
      (this.day_two_rise = document.getElementById("day-two-rise")),
      (this.day_two_set = document.getElementById("day-two-set"));
  }

  updateUI(data) {
    this.location_result.innerHTML = `${data.location.name}, ${data.location.country}`;
    // DAY ONE
    this.day_one_condition.innerHTML = `${data.current.condition.text}`;
    this.day_one_icon.src = `http:${data.current.condition.icon}`;
    this.day_one_temperature.innerHTML = `${data.current.temp_c}`;

    this.day_one_rise.innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`;
    this.day_one_set.innerHTML = `${data.forecast.forecastday[0].astro.sunset}`;
    // DAY TWO
    this.day_two_condition.innerHTML = `${data.forecast.forecastday[1].day.condition.text}`;
    this.day_two_icon.src = `http:${data.forecast.forecastday[1].day.condition.icon}`;
    this.day_two_temperature.innerHTML = `${data.forecast.forecastday[1].day.avgtemp_c}`;
    this.day_two_rise.innerHTML = `${data.forecast.forecastday[1].astro.sunrise}`;
    this.day_two_set.innerHTML = `${data.forecast.forecastday[1].astro.sunset}`;
  }
}
