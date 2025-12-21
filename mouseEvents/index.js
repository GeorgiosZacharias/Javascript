// event listener = click,mouseover,mouseout,addEvenListener

const myBox = document.getElementById("myBox");

//myBox.addEventListener(event,callback);
//arrow function
myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "red";
    event.target.textContent = "ouch  😒";
});


//target what we clicked on
/* function changeColor(event) {
    event.target.style.backgroundColor = "red";
    event.target.textContent = "ouch  😒";
} */