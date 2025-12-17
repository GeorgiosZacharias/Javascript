

try {
    const dividend = Number(window.prompt("Enter a dividend"));
    const divisor = Number(window.prompt("Enter a divisor"));
    const result = dividend / divisor;
    if (divisor == 0) {
        throw new Error("Can not devide by 0");
    }
    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("values must be a number");
    }
    console.log(result);
} catch (error) {
    console.error(error);
}
finally {

    console.log("this always executes");
}

console.log("you have reached the end");