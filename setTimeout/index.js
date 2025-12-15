
//firsst  way 
//function sayHello() {
//    window.alert("Hello");
//}

//setTimeout(sayHello, 3000);


// second way
//setTimeout(function () { window.alert("Hello") }, 3000);


// third way  arrow function
//setTimeout(() => window.alert("hello"), 3000);

//cleartimeout(timeouteId) = cancel a timeout before it triggers
//const timeoutId = setTimeout(() => window.alert("hello"), 3000);

//clearTimeout(timeoutId);

let timeoutId;

function startTimer() {
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("started");
}
function clearTimer() {
    clearTimeout(timeoutId);
    console.log("cleared");
}