class Animal { //helps with code reuseability
    alive = true;
    eat() {
        console.log(`this ${this.name} is eating`);
    }
    sleep() {
        console.log(`this ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    name = "rabbit";
    run() {
        console.log(`this ${this.name} is running`);
    }
}
class Fish extends Animal {
    name = "fish";
    swim() {
        console.log(`this ${this.name} is swimming`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
console.log(rabbit.alive);
rabbit.alive = false;
console.log(rabbit);
rabbit.run();
fish.alive = false;
console.log(fish);


