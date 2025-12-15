//closure = a function defined inside of another function
//the inner function has access to the variables
//and scope of the outer function.
//allow for private variables and state maintance
//used frequently in js farmerworks :react,vue,angular

function outer() {
    let message = "Hello"; //becomes variable;
    function inner() {
        console.log(message);
    }
    inner();
}

outer();

function createCounter() {
    let count = 0; //maintain the value 
    function increment() {
        count++;
        console.log(`count increased to ${count}`);
    }
    function getCount() {
        return count; //to get the count
    }
    return { increment, getCount }; //returns an object



}

const counter = createCounter(); //to hold the  state of the counter 
counter.increment();
counter.increment();
console.log(`the current count is ${counter.getCount()}`);



let score = 0;

function increaseScore(points) {
    score += points;
    console.log(`+${points} pts`)
}
function decreaseScore(points) {
    score -= points;
    console.log(`-${points} pts`)
}
function getScore() {
    return score;
}

increaseScore(15);
console.log(`the final score is ${getScore()} pts`);
decreaseScore(8);
console.log(`the final score is ${getScore()} pts`);
score = 100;
console.log(`the final score is ${getScore()} pts`);