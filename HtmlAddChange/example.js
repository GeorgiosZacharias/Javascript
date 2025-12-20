// example <li>

//create the element
const newListItem = document.createElement("li");

//Add attributes
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

//document.body.prepend(newListItem);
document.getElementById("fruits").append(newListItem);