function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}
function displayConsole(result) {
    console.log(result);
}
function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}

sum(displayPage, 10, 25);


let numbers = [1, 2, 3, 5, 6, 8];
numbers.forEach(display);
numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array) {
    array[index] = element * 2;
}

function display(element) {
    console.log(element);
}

let fruits = ["apple", "orange", "banana"];

fruits.forEach(displayFruits);

fruits.forEach(capetalize);
fruits.forEach(displayFruits);

fruits.forEach(upperCase);
fruits.forEach(displayFruits);



function upperCase(element, index, array) {
    array[index] = element.toUpperCase();

}

function capetalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function displayFruits(element) {
    console.log(element);
}