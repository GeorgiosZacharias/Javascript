//object = a collection of related properties and/or methods.

const person1 = {
    firstName: "justin",
    lastName: "Bieber",
    age: 30,
    isEmployed: false,
    sayHello: function () { console.log("Hi i am an unemployed singer") },
}
const person2 = {
    firstName: "justin",
    lastName: "Tsan",
    age: 20,
    isEmployed: true,
    sayHello: () => console.log("Hi i am an employed singer"),
}

console.log(person1);
console.log(person1.age);
console.log(person2.age);
person1.sayHello();

person2.sayHello();

//this reference to the object where THIS is used.

const person3 = {
    name: "takis tsan",
    favFood: "burger",
    sayHello: function () { console.log(`Hi i am ${this.name}`) },
}
person3.sayHello();