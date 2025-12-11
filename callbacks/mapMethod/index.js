const numbers = [1, 2, 3, 4, 5, 6];

squares = numbers.map(square);

console.log(squares);
function square(element) {
    return Math.pow(element, 2);
}