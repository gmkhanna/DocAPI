var Weather = require("./../js/weather.js").weatherModule;

$(document).ready(function() {
  $('#weather-button').click(function() {
    var city = $('#city').val();
    $('#city').val("");
    var weather = new Weather();
    weather.getWeather(city);
  });
});
