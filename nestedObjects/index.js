//nested object = object inside of other objects,child object is enclosed by a parent object

class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("takis tsan", 30, "123 justin street", "athens", "greece");
const person2 = new Person("tasa piper ", 20, "345 justins street", "athens", "greece");
console.log(person1.address.street);
console.log(person2.address.city);