// 1. document.getElementById(); //returns a single element or null if it doesnt find it
// 2. document.getElementsClassName(); // returns html collection (like array)
// 3. document.getElementsByTagName();
// 4. document.querySelector();
// 5. document.querySelectorAll();


const myHeading = document.getElementById("my-header");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

const fruits = document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor = "yellow";
fruits[0].style.textAlign = "center";