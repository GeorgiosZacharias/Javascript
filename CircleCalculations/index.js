const PI = 3.141;
let radius;
let circumference;

document.getElementById("mySumbit").onclick = function () {
    radius = document.getElementById("myText").value;//value from input
    radius = Number(radius);//convert to number
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference;
}