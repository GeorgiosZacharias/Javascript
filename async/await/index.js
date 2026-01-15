// Async/Await = Async = makes a function return a promise
// Await =makes an async function wait for a promise 
// allows you to write asynchronous code in a synchronous manner
//  async doesnt have to resolve or reject parameters 
// everything after await is placed in a eventqueue


function walkDog() {


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;
            if (dogWalked) {
                resolve("You walk the dog");
            } else {
                reject("you didnt walk the dog");
            }


        }, 1500);
    });  //how to get out of callback hell
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You clean the kitchen");

        }, 2500);
    });  //how to get out of callback hell
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You take out the  trash");

        }, 500);
    });  //how to get out of callback hell
}


walkDog().then(value => { console.log(value); return cleanKitchen() }) //value will be You walk the dog
    .then(value => { console.log(value); return takeOutTrash() })
    .then(value => { console.log(value); console.log("you finished all the chores") })
    .catch(error => console.error(error)); //it will stop when reject found