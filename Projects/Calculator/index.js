const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = "0";
}
function calculate() {
    display.value = eval(display.value); //eval evaluates the values inside the display/like build in calculator
}