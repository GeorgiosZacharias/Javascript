const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min) + 1);
let attemps = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${min} - ${max}`);
    guess = Number(guess);
    running = false;
}
console.log(answer);

