let fruits = ["orange", "banana", "potato"];

fruits.push("coconut");
//fruits.pop();
fruits.unshift("mango")
//fruits.shift();

//let numOfFruits = fruits.length;
//console.log(numOfFruits);
//for (let fruit of fruits) {
//   console.log(fruit);
//}
//let index = fruits.indexOf("banana");
//console.log(index);
fruits.sort();
console.log(fruits);
//spread operator ...
let numbers = [5, 10, 4, 1, 3]
let maximum = Math.max(...numbers);
console.log(maximum);

let userName = "georgeZach"
let letters = [...userName].join("-"); //join adds between each character
console.log(letters);