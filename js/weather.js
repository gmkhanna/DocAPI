var apiKey = require("./../.env").apiKey;

function Weather() {

}

Weather.prototype.getWeather = function(city) {
  $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey)
  .then(function(response) {
    $('.weather-display').text("This is the weather of " + city + " is: " + response.weather[0].main + ', ' + response.weather[0].description + ', ' + (response.main.temp - 273) + " Celsius");

  }).fail(function (error) {
    $('.weather-display').text(error.responseJSON.message);
   });
};

exports.weatherModule = Weather;
