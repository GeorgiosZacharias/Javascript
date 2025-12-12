//function declatariot block of code performs a specific task

function hello() {
    console.log("Hello");
}

//function expressions = a way to define functions as values or variables

//used in callbacks in asychronous operations
//higher order functions
//closures
//event listeners

const helloFunction = function () {
    console.log("Hello")
}

helloFunction();

setTimeout(function () {
    console.log("Hello")
}, 3000)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const squares = numbers.map(function (element) { //no need to use names for a function we use once for example
    return Math.pow(element, 2);
})
console.log(squares);

const evenNums = numbers.filter(function (element) {
    return element % 2 === 0;
})
console.log(evenNums);

const total = numbers.reduce(function (accumulator, element) {
    return accumulator + element;
})
console.log(total);