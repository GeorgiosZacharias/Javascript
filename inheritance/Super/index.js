class Animal {
    constructor(name, age,) {
        this.name = name;
        this.age = age;

    }
    move(speed) {
        console.log(`${this.name} moves at speed of ${speed}`);
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age); //invoke the constructor of the parent class
        this.runSpeed = runSpeed;
    }
    run() {

        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim() {
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);

rabbit.run();
fish.swim();
