// DOM Navigation = the proccess of navigating through the structure of an html document using js

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";


const ulElements = document.querySelectorAll("ul");

ulElements.forEach((ul, index) => {
    if (index !== 0) { // skip the first UL
        ul.firstElementChild.style.backgroundColor = "red";
    }
});