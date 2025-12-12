//arrow functions = for simple fuctions that we use only once;

const hello = (name, age) => {
    console.log(`Hello ${name}`)
    console.log(`you are ${age} old`)
};
hello("John", 25);

setTimeout(() => console.log("goodbye"), 3000);
