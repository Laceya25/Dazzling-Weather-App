let searchBtn = document.querySelector("#searchBtn");
let citySearch = document.querySelector("#citySearch");
let cityName = document.querySelector("#city");
let temp = document.querySelector("#temp");
let humidity = document.querySelector("#humidity");
let windSpeet = document.querySelector("#wind-spd");
let weatherIcon = document.querySelector("#weatherIcon");
let forecastContainer = document.querySelector("#forecast-container");
let history = document.getElementById("history");
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
let clearH = document.getElementById("clear-H")

function start() {
    const APIKey ="59e0d5247e1028ae9dbf1071b7d55e24";

    function currentWeather(city) {
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +  "&units=imperial&appid=" + APIKey;

        fetch(queryURL)
         .then((Response) => Response.json())
         .then((data) => {
            console.log(data);

            cityName.innerText = city;
            weatherIcon.setAttribute("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
            
         });
    }

    function getFiveDayForecast(cast) {
        let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" +
        cast +
        "&units=imperial&appid=" +
        APIKey;

        fetch(queryURL)
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data);
        })
    }
}