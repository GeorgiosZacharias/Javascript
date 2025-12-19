// 1. document.getElementById(); //returns a single element or null if it doesnt find it
// 2. document.getElementsClassName(); // returns html collection (like array)
// 3. document.getElementsByTagName(); //html collection
// 4. document.querySelector(); //element or Null
// 5. document.querySelectorAll(); //NODELIST


const myHeading = document.getElementById("my-header");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

const fruits = document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor = "black";
fruits[0].style.textAlign = "center";
for (let fruit of fruits) {
    fruit.style.backgroundColor = "yellow";
}

Array.from(fruits).forEach(fruit => {//returns a new array of fruits
    fruit.style.backgroundColor = "yellow"
});


const h4Elements = document.getElementsByTagName("h4");

const liElements = document.getElementsByTagName("li");

console.log(h4Elements);

h4Elements[0].style.backgroundColor = "yellow";
h4Elements[1].style.backgroundColor = "black";


for (let h4Element of h4Elements) {
    h4Element.style.backgroundColor = "yellow";
}

for (let liElement of liElements) {
    liElement.style.backgroundColor = "lightgreen";
}

Array.from(h4Elements).forEach(h4Element => {//returns a new array of fruits
    h4Element.style.backgroundColor = "yellow"
});

Array.from(liElements).forEach(liElement => {//returns a new array of fruits
    liElement.style.backgroundColor = "lightgreen"
});