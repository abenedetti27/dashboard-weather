var apiKey = '2debf91501bc201aacdbd76671d63298';
var searchForm = document.getElementById('search-form');
var cityInput = document.getElementById('city-input');
var weatherInfo = document.getElementById('weather-info');

//event listener for clicking on submit within form on site
searchForm.addEventListener('sumbit', function (e){
    e.preventDefault();
    var cityName = cityInput.value;
    getWeatherData(cityName);
    cityInput.value = '';
}
);
//function to get weather data using fetch
//fetch(file)
//.then(x => x.text())
//.then(y => myDisplay(y));
function getWeatherData(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput+'&appid='+apiKey)
    .then(response => response.json())
    .then(data => {
        displayWeatherData(data);
    })
    .catch(error => {
        console.error('Error:', error);
    })
}

//function to display weather data

//base url: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}