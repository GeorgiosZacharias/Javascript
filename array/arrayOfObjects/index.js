const fruits = [{ name: "apple", color: "Red", calories: 55 },
{ name: "pineapple", color: "yellow", calories: 35 },
{ name: "banana", color: "yellow", calories: 55 }
];

console.log(fruits[0].calories);
console.log(fruits[2].name);

fruits.push({ name: "grapes", color: "purple", calories: 45 });


// for each()
fruits.forEach(fruit => console.log(fruit.color));


// map()
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);


setTimeout(() => {
    fruits.splice(1, 2); // will remove objects in certain indexes
    console.log(fruits);
}, 3000);


