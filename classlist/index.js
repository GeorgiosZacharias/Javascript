//classlist = element property in javascript used to interact
//           with an element's list of classes (css classes)
//           allows you to make reuseable classes for many elements
//           across your webpage.

const myButton = document.getElementById("myButton");

//myButton.classList.add("enabled");

//myButton.classList.remove("enabled");

myButton.addEventListener("mouseover", event => {
    event.target.classList.add("hover");
});

myButton.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
})


