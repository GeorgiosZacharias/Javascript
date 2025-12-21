
const myBox = document.getElementById("myBox");

const moveAmount = 20;

let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    myBox.textContent = "🤢";
    myBox.style.backgroundColor = "lightblue";
})


document.addEventListener("keyup", event => {
    myBox.textContent = "😁";
    myBox.style.backgroundColor = "lightblue";
})

document.addEventListener("keydown", event => {
    event.preventDefault(); // not to scroll with it if it moves out the window 
    if (event.key.startsWith("Arrow")) { //enter if it starts with arrow
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`
        myBox.style.left = `${x}px`
    }
})
