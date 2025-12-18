// DOM = DOCUMENT OBJECT MODEL
// OBJECT{} that represents the page we see in the we browser
//and provides us with an API to interact with
// web browser constructs the dom when it loads an html document,
//and structures all the elements in a tree-like representation.
//javascript can access the dom to dynamically
// change the content,structure, and style of a webpage.

document.title = "my website";
document.body.style.backgroundColor = "hsl(0,100%,15%)"

const username = "george";

const welcomeMesg = document.getElementById("welcome-msg");

welcomeMesg.textContent += username === "" ? `Guest` : username;