import { apiKey } from "./apiKey.js";
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card =document.querySelector(".card");

weatherForm.addEventListener("submit", event =>{
    event.preventDefault(); //we dont want to refresh page
    const cityName = cityInput.value;
    if(cityName){

    }else{
        displayErrorMessage("Please enter a city name.");
    }
});

function displayErrorMessage(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent = "";
    card.style.display= "flex";
    card.appendChild(errorDisplay);
}