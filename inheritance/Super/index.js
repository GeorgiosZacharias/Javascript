class Animal {
    constructor(name, age,) {
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age); //invoke the constructor of the parent class
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("rabbit", 2, 12);