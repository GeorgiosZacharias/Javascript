//nested object = object inside of other objects,child object is enclosed by a parent object

const person = {
    fullName: "takis tsan",
    age: 30,
    isStudent: false,
    hobbies: ["football", "fishing", "cooking"],
    address: {  //nested object
        street: "123 moschato",
        city: "athens",
        country: "greece"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[1]);
console.log(person.address);
console.log(person.address.street);