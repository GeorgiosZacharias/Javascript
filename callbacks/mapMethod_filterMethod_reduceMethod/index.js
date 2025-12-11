const numbers = [1, 2, 3, 4, 5, 6];

squares = numbers.map(square); //map wont change the original numbers
cubes = numbers.map(cube);
console.log(squares);
console.log();
console.log(cubes);

function square(element) {
    return Math.pow(element, 2);
}
function cube(element) {
    return Math.pow(element, 3);
}

const students = ["george", "patrick", "frank"];
const studentsUpper = students.map(upperCase);
console.log(studentsUpper);
const studentsCapitalize = students.map(capitalizeFirst);
console.log(studentsCapitalize);

function upperCase(element) {
    return element.toUpperCase();
}
function capitalizeFirst(element) {
    return element.charAt(0).toUpperCase() + element.slice(1);
}

const dates = ["2025-01-10", "2025-03-20"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}


//filter
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = numbers2.filter(isEven);
let oddNums = numbers2.filter(isOdd);
console.log(evenNums);
console.log(oddNums);

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
}

const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
console.log(adults);

function isAdult(element) {
    return element >= 18;
}

const prices = [5, 10, 15, 35, 5, 3];
const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`);
function sum(accumulator, element) { //previous element with next one 0 +5 , 5+15
    return accumulator + element;
}