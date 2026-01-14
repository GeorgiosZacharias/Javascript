// Promise = An object that manages asynchronous operations.
// Wrap a Promise object around {asynchronous code}
// pending -> resolved or rejected
// new Promise((resolve,reject)) => {asynchronous code}


function walkDog(callback) {
    setTimeout(() => {
        console.log("You walk the dog");
        callback();
    }, 1500);
}

function cleanKitchen(callback) {
    setTimeout(() => {
        console.log("You clean the kitchen");
        callback();
    }, 2500);
}

function takeOutTrash(callback) {
    setTimeout(() => {
        console.log("You take out the trash");
        callback();
    }, 500);
}

walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => console.log("you finished all the chores!"));
    })
})