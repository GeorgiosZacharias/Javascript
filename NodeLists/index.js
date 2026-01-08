//NodeList = static collection of HTML elements by (id,class,element)
//           can be created by using querySelectorAll()
//           similar to an array, but no (map,filter,reduce)
//           NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

// Add html/css properties

buttons.forEach(button => {
    button.style.backgroundColor = "hsl(205,100%,50%";
    button.textContent += "😁";
});

// click event listener

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "hsl(205,100%,100%";
    }) //event,callback
})
// mouseover + mouseout event
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205,100%,40%";
    }) //event,callback
})

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205,100%,50%";
    }) //event,callback
})

//add element

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";

document.body.appendChild(newButton);

console.log(buttons); //static collection wont update so it wotn show button 5


buttons = document.querySelectorAll(".myButtons"); // get fresh NodeList
console.log(buttons); // now includes the new button


//remove an element

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        console.log(buttons); //they still excist 
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    })
})