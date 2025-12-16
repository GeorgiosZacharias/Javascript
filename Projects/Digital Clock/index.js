
//function updateClock() {
//    const now = new Date();
//    const hours = now.getHours().toString().padStart(2, 0); // 08 adds zeros 
//    const minutes = now.getMinutes().toString().padStart(2, 0);
//    const seconds = now.getSeconds().toString().padStart(2, 0);
//    const timeString = `${hours}:${minutes}:${seconds}`;
//    document.getElementById("clock").textContent = timeString;
//}

//updateClock();
//setInterval(updateClock, 1000); //call the function every 1 second

//if we dont want military time clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours(); // 08 adds zeros 
    const meridiem = hours > 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000); //call the function every 1 second