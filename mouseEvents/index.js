// event listener = click,mouseover,mouseout,addEvenListener

const myBox = document.getElementById("myBox");

//myBox.addEventListener(event,callback);
myBox.addEventListener("click", changeColor);
//target what we clicked on
function changeColor(event) {
    event.target.style.backgroundColor = "red";
}