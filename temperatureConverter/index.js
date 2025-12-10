const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convertFunction() {
    if (toFahrenheit.checked) {

    } else if (toCelsius.checked) {

    } else {
        result.textContent = "Please select a unit";
    }
}