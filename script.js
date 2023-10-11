var apiKey = 
var searchForm = document.getElementById('search-form');
var cityInput = document.getElementById('city-input');
var weatherInfo = document.getElementById('weather-info');

searchForm.addEventListener('sumbit', function (e){
    e.preventDefault();
    var cityName = cityInput.value;
    getWeatherData(cityName);
    cityInput.value = '';
}
);