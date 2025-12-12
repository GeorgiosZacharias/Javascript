class Animal {
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
}
class Fish extends Animal {
    name = "fish";
}

const rabbit = new Rabbit();
const fish = new Fish();
console.log(rabbit.alive);
rabbit.alive = false;
console.log(rabbit);

