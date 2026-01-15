// Async/Await = Async = makes a function return a promise
// Await =makes an async function wait for a promise 
// allows you to write asynchronous code in a synchronous manner
//  async doesnt have to resolve or reject parameters 
// everything after await is placed in a eventqueue


function walkDog() {


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
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


async function doChores() {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);
}

doChores();