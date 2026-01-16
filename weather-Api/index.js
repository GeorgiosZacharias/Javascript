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
    }else{
        console.log(response);
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