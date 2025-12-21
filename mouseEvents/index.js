// event listener = click,mouseover,mouseout,addEvenListener

const myBox = document.getElementById("myBox");

//myBox.addEventListener(event,callback);
//arrow function
myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "red";
    event.target.textContent = "ouch  😒";
});
//can have multiple eventlistener
myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "plz dont 😢";
})

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "click me 😊";
})


//target what we clicked on
/* function changeColor(event) {
    event.target.style.backgroundColor = "red";
    event.target.textContent = "ouch  😒";
} */