let fruits = ["banana", "apple", "grapes"];
fruits.sort();
console.log(fruits);

let numbers = [1, 10, 2, 4, 3, 5, 6, 7, 9, 8];
numbers.sort((a, b) => a - b); //because sort returns them as strings in lexicographic order (alphabet + numbers + symbols)
console.log(numbers);

let numbersReversed = [1, 10, 2, 4, 3, 5, 6, 7, 9, 8];
numbersReversed.sort((a, b) => b - a); //because sort returns them as strings in lexicographic order (alphabet + numbers + symbols)
console.log(numbersReversed);