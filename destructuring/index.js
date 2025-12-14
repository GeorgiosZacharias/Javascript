//destructuring = extract values from arrays and objects,
//[] array destructuring , {} object destructuring

//swap value of two variables

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

//swap 2 elements in an array

const colors = ["red", "green", "blue", "black"];

[colors[0], colors[3]] = [colors[3], colors[0]];
console.log(colors);