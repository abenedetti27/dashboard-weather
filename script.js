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
        getFiveDayForecast(data.coord.lat, data.coord.lon)//example: data.main.temp; pass two
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
    tempEl.textContent = temperature + '°F';
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
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
        displayFiveDayForecast(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });    
}

//function to display 5 day forecast
//needs loop to create boxes
//console log
function displayFiveDayForecast(data){
    var forecastContainer =document.getElementById('forecast');
    forecastContainer.innerHTML = '';

    for(let i = 0; i < data.list.length; i++){
        if(data.list[i].dt_txt.includes('12:00:00')){
            var dayData = data.list[i];
            var date = new Date(dayData.dt * 1000);
            var temperature = (dayData.main.temp);
            console.log(temperature)
            var weatherDescription = dayData.weather[0].description;

            var dayForecaseEl = document.createElement('div');
            dayForecaseEl.classList.add('forecast-day');
            dayForecaseEl.innerHTML = `
                <h3>${date.toDateString()}</h3>
                <p>Temperature: ${temperature}°F</p>
                <p>Weather: ${weatherDescription}</p>
            `;
            forecastContainer.appendChild(dayForecaseEl);


        }
    }
function updateSearchHistory(city){
    var historyList = document.getElementById('history-list');
    var listItem = document.createElement('li');
    listItem.textContent = city;
    historyList.appendChild(listItem);
    var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    searchHistory.push(city);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

function loadSearchHistory(){
    var searchHistory = JSON.parse(localStorage,getItem('searchHistory')) || [];
    console.log(searchHistory)
    var historyList = document.getElementById('history-list');

    searchHistory.forEach(city => {
        var listItem = document.createElement('li');
        listItem.textContent = city;
        historyList.appendChild(listItem);
        
    });
}
loadSearchHistory();
historyList.addEventListener('click', function (e){
    if(e.target && e.target.nodeName === 'LI'){
        var cityName = e.target.textContent;
        getWeatherData(cityName);
        getFiveDayForecast(cityName);
    }
});
    
    



    //needs loop to create boxes
//console log

}

//base url: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}