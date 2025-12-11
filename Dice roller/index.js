

function rollDice() {
    const numberOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const img = [];
    for (let i = 0; i < numberOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        console.log(value);
        values.push(value);
        img.push(`<img src="dice_images/${value}.png">`);
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;

}