//NodeList = static collection of HTML elements by (id,class,element)
//           can be created by using querySelectorAll()
//           similar to an array, but no (map,filter,reduce)
//           NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

// Add html/css properties

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "😁";
});