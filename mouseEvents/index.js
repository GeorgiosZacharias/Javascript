// event listener = click,mouseover,mouseout,addEvenListener

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

//myBox.addEventListener(event,callback);
//arrow function
myButton.addEventListener("click", event => {
    /*   event.target.style.backgroundColor = "red";
      event.target.textContent = "ouch  😒"; */
    myBox.style.backgroundColor = "red";
    myBox.textContent = "ouch  😒";

});
//can have multiple eventlistener
myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "plz dont 😢";
})

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "click me 😊";
})


//target what we clicked on
/* function changeColor(event) {
    event.target.style.backgroundColor = "red";
    event.target.textContent = "ouch  😒";
} */