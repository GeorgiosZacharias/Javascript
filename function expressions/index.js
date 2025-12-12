//function declatariot block of code performs a specific task

function hello() {
    console.log("Hello");
}

//function expressions = a way to define functions as values or variables

const helloFunction = function () {
    console.log("Hello")
}

helloFunction();

setTimeout(function () {
    console.log("Hello")
}, 3000)