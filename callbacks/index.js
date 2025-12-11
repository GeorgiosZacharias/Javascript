function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}
function displayConsole(result) {
    console.log(result);
}

sum(displayConsole, 10, 25);