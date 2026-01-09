//classlist = element property in javascript used to interact
//           with an element's list of classes (css classes)
//           allows you to make reuseable classes for many elements
//           across your webpage.

const myButton = document.getElementById("myButton");
const myH1 = document.getElementById("myH1");

//myButton.classList.add("enabled");

//myButton.classList.remove("enabled");

//myButton.addEventListener("mouseover", event => {
//    event.target.classList.add("hover");
//});

//myButton.addEventListener("mouseout", event => {
//   event.target.classList.remove("hover");
//});

//toggle(remove if present,add if not )
//myButton.addEventListener("mouseover", event => {
//    event.target.classList.toggle("hover");
//});

//myButton.addEventListener("mouseout", event => {
//    event.target.classList.toggle("hover");
//});

myButton.classList.add("enabled");
myButton.addEventListener("click", event => {
    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "🤢";
    } else {
        event.target.classList.replace("enabled", "disabled");
    }

});

myH1.classList.add("enabled");
myH1.addEventListener("click", event => {
    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "🤢";
    } else {
        event.target.classList.replace("enabled", "disabled");
    }

});


let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");
})

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
})

buttons.forEach(button => {
    button.addEventListener("click", event => {
        if (event.target.classList.contains("disabled")) {
            event.target.classList.replace("disabled", "enabled");
        } else {
            event.target.classList.replace("enabled", "disabled");
        }
    });
})