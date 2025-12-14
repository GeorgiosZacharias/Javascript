//destructuring = extract values from arrays and objects,
//[] array destructuring , {} object destructuring

//swap value of two variables

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

//swap 2 elements in an array

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[3]] = [colors[3], colors[0]];
console.log(colors);

//assign array elements to variables
const [firstColor, secondColor, thirdColor, ...extraColors] = colors; // ...rest parameters
console.log(firstColor, secondColor, thirdColor);
console.log(extraColors);

//extract values from objects

const person1 = {
    firstName: "takis tsan",
    lastName: "sing",
    age: 30,
    job: "singer"
}

const person2 = {
    firstName: " tsan",
    lastName: "singer",
    age: 20,
}

const { firstName, lastName, age, job = "Unemployed" } = person1; // ="Unemployed" default
console.log(firstName, lastName, age, job)