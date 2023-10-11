var apiKey = '2debf91501bc201aacdbd76671d63298';
var searchForm = document.getElementById('search-form');
var cityInput = document.getElementById('city-input');
var weatherInfo = document.getElementById('weather-info');

//event listener for clicking on submit within form on site
searchForm.addEventListener('click', function (e){
    e.preventDefault();
    var cityName = cityInput.value;
    console.log(cityName)
    getWeatherData(cityName);
    cityInput.value = '';
}
);
//function to get weather data using fetch
//fetch(file)
//.then(x => x.text())
//.then(y => myDisplay(y));
function getWeatherData(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey+'&units=imperial')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        displayWeatherData(data);
//         lat
// : 
// 47.6062
// lon
// : 
// -122.3321
        getFiveDayForecast(47.6062, -122.3321)//example: data.main.temp; pass two
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

//function to display weather data
function displayWeatherData(data){
    var cityName = data.name;
    console.log("city name", cityName)
    var tempEl = document.getElementById('temp');
    var temperature = data.main.temp; 
    tempEl.textContent = temperature + ' degrees';
    console.log("temperature", temperature)
    var weatherDescription = data.weather[0].description;
    console.log("description", weatherDescription)
    var cityEl = document.getElementById('city');
    cityEl.textContent = cityName;
    var descriptionEl = document.getElementById('description');
    descriptionEl.textContent = weatherDescription;

}

//pass lat and long from data to forecast
//function to get 5 day forecast
function getFiveDayForecast(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        displayFiveDayForecast(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });    
}

//function to display 5 day forecast
function displayFiveDayForecast(data){
    var cityName = date.name;
    var temperature = (data.main.temperature);
    var weatherDescription = data.weather[0].description;
//needs loop to create boxes
//console log

}

//base url: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}