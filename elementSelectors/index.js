// 1. document.getElementById(); //returns a single element or null if it doesnt find it
// 2. document.getElementsClassName(); // returns html collection (like array)
// 3. document.getElementsByTagName();
// 4. document.querySelector();
// 5. document.querySelectorAll();


const myHeading = document.getElementById("my-header");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

const fruits = document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor = "black";
fruits[0].style.textAlign = "center";
for (let fruit of fruits) {
    fruit.style.backgroundColor = "yellow";
}

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow"
}); //returns a new array of fruits