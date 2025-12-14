const fruits = [{ name: "apple", color: "Red", calories: 55 },
{ name: "pineapple", color: "yellow", calories: 35 },
{ name: "banana", color: "yellow", calories: 55 }
];

console.log(fruits[0].calories);
console.log(fruits[2].name);

fruits.push({ name: "grapes", color: "purple", calories: 45 });
console.log(fruits);
setTimeout(() => {
    fruits.pop();
    console.log(fruits);
}, 3000);
