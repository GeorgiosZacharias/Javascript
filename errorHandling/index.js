try {
    console.log(x);
} catch (error) {
    console.error(error);
}
finally {
    //used for closing files,close connections,release resources
    console.log("this always executes");
}

console.log("you have reached the end");