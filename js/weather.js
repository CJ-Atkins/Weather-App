class Weather {
  constructor() {
    this.api_key = 'fbca97c732d0458291a93810202705';
  }

  async getWeather(location) {
    const Response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${this.api_key}&q=${location}&days=3`
    );

    const current = await Response.json();

    return current;
  }
}
