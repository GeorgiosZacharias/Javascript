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