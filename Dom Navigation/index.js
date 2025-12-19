// DOM Navigation = the proccess of navigating through the structure of an html document using js

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

const element = document.getElementById("fruits");

const ulElements = document.querySelectorAll("ul");

ulElements.forEach((ul, index) => {
    if (index !== 0) { // skip the first UL
        ul.firstElementChild.style.backgroundColor = "red";
    }
});

ulElements.forEach((ul) => {
    const lastChild = ul.lastElementChild;
    lastChild.style.backgroundColor = "green";
});
// nextElement
const element1 = document.getElementById("apple");
const nextSibling = element1.nextElementSibling;
nextSibling.style.backgroundColor = "blue";
//PREVIOUS ELEMENT

const element2 = document.getElementById("Orange");
const prevSibling = element2.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";

//parent element
const element3 = document.getElementById("pie");
const parent = element3.parentElement;
parent.style.backgroundColor = "orange";
parent.style.border = "2px solid black";
