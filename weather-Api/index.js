import { apiKey } from "./apiKey.js";
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card =document.querySelector(".card");

weatherForm.addEventListener("submit", async event =>{
    event.preventDefault(); //we dont want to refresh page
    const cityName = cityInput.value;
    if(cityName){
        try{
            const weatherData= await getWeatherData(cityName);
            displayWeatherInfo(weatherData);

        }catch(error){
            console.error("Error fetching data:", error);
             displayErrorMessage(error);
        }
    }else{
        displayErrorMessage("Please enter a city name.");
    }
});
async function getWeatherData(cityName){
    const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    const response = await fetch (apiUrl);
    if(!response.ok){
        throw new Error("Could not fetch weather data for this city.");
    }
    return await response.json();
}

function displayWeatherInfo(Data){
    //object destructuring
     const { name:city,
        main:{ temp, humidity},
        weather:[{ description, id }] }= Data;
    card.textContent = "";
    card.style.display = "flex";
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descriptionDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = `Weather in ${city}`;
    cityDisplay.classList.add("cityDisplay");
    card.appendChild(cityDisplay);

    tempDisplay.textContent = `Temperature: ${(temp - 273.15).toFixed(1)} °C`;
    tempDisplay.classList.add("tempDisplay");
    card.appendChild(tempDisplay);

    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add("humidityDisplay");
    card.appendChild(humidityDisplay);

    descriptionDisplay.textContent = `Conditions: ${description}`;
    descriptionDisplay.classList.add("descriptionDisplay");
    card.appendChild(descriptionDisplay);

    weatherEmoji.textContent = getWeatherEmoji(id);
    weatherEmoji.classList.add("weatherEmoji");
    card.appendChild(weatherEmoji);
 }

 function getWeatherEmoji(id){
    switch(true){
        case id >= 200 && id <300:
            return "⛈️"; //thunderstorm
        case id >= 300 && id <500:
            return "🌦️"; //drizzle
        case id >= 500 && id <600:
            return "🌧️"; //rain
        case id >= 600 && id <700:
            return "❄️"; //snow
        case id >= 700 && id <800:
            return "🌫️"; //atmosphere
        case id === 800:
            return "☀️"; //clear
        case id > 800 && id <900:
            return "☁️"; //clouds
        default:
            return "❓"; //unknown
    }
}

function displayErrorMessage(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent = "";
    card.style.display= "flex";
    card.appendChild(errorDisplay);
}
