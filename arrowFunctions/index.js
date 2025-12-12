//arrow functions = for simple fuctions that we use only once;

const hello = (name, age) => {
    console.log(`Hello ${name}`)
    console.log(`you are ${age} old`)
};
hello("John", 25);

setTimeout(() => console.log("goodbye"), 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);