class Animal {
    constructor() {

    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        this.name = name;
        this.age = age;
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        this.name = name;
        this.age = age;
        this.swimSpeed = swimSpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("rabbit", 2, 12);