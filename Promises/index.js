// Promise = An object that manages asynchronous operations.
// Wrap a Promise object around {asynchronous code}
// pending -> resolved or rejected
// new Promise((resolve,reject)) => {asynchronous code}


function walkDog() {


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You walk the dog");

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

//walkDog(() => {
//    cleanKitchen(() => {
//        takeOutTrash(() => console.log("you finished all the chores!"));
//    })
//})

// method chaining
walkDog().then(value => { console.log(value); return cleanKitchen() }) //value will be You walk the dog
    .then(value => { console.log(value); return takeOutTrash() })
    .then(value => { console.log(value); console.log("you finished all the chores") }); 