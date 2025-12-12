class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayProduct() {
        console.log(`Product: ${this.name} Price: $${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 0.05;
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 59.99);
product1.displayProduct();
product2.displayProduct();
const total = product1.calculateTotal(salesTax) + product2.calculateTotal(salesTax);
console.log(`total price (tax included):$${total.toFixed(2)}`);

class MathUtil {
    static PI = 3.14159; //belongs to the class not to the objects

    static getDiameter(radius) {
        return radius * 2;
    }
    static getcircumference(radius) {
        return 2 * this.PI * radius;
    }
}

console.log(MathUtil.PI);

console.log(MathUtil.getDiameter(10));

console.log(MathUtil.getcircumference(10));