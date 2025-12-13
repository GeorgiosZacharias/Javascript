class Animal {
    constructor(name, age,) {
        this.name = name;
        this.age = age;

    }
    move(speed) {
        console.log(`${this.name} moves at speed of ${this.speed}`);
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age); //invoke the constructor of the parent class
        this.runSpeed = runSpeed;
    }
    run() {
        console.log(`This ${this.name} can run`);
    }
}
class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim() {
        console.log(`This ${this.name} can swim`);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("rabbit", 2, 12);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
console.log(`and the fish swims ${fish.swimSpeed} km`);