# dashboard-weather

## Technology Used 

HTML, 
CSS, 
JAVASCRIPT,
Third Party API Open Weather Map

## Description 

[Visit the Deployed Site](https://abenedetti27.github.io/dashboard-weather/)

When using the weather dashboard with a form input, the user can search for a city and is presented with current and future conditions for that city and that city is added to the search history. When the user views the current weather conditions for that city, they are presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed. When the user views future weather conditions for that city, they are presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity. When the user clicks on a city in the search history, they are again presented with current and future conditions for that city.

The data and icons are pulled from the Open Weather Map API, using a custom key. 

## JAVASCRIPT Example


```JS
function getWeatherData(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey+'&units=imperial')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        displayWeatherData(data);
        getFiveDayForecast(data.coord.lat, data.coord.lon)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function displayWeatherData(data){
    var cityName = data.name;
    console.log("city name", cityName)
    
    var tempEl = document.getElementById('temp');
    var temperature = data.main.temp; 
    tempEl.textContent = temperature + '°F';
    console.log("temperature", temperature)
    var weatherDescription = data.weather[0].description;
    console.log("description", weatherDescription)
    var cityEl = document.getElementById('city');
    cityEl.textContent = cityName;
    var descriptionEl = document.getElementById('description');
    descriptionEl.textContent = weatherDescription;
    var wind = data.wind.speed;
    var windEl = document.getElementById('wind');
    windEl.textContent = 'Wind: ' + wind + ' mph';
    var humidity = data.main.humidity;
    var humidityEl = document.getElementById('humidity');
    humidityEl.textContent = 'Humidity: ' + humidity + '%';
    var weatherIconCode = data.weather[0].icon;
    var iconUrl = 'http://openweathermap.org/img/w/' + weatherIconCode + '.png';
    var weatherIcon = document.createElement('img');
    weatherIcon.src = iconUrl;
}

```

![Screenshot of application](./assets/dashboard%20screenshot.png)


## License

MIT License

Copyright (c) [2023] [Anna Rose Benedetti]

