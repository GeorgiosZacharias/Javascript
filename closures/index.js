//closure = a function defined inside of another function
//the inner function has access to the variables
//and scope of the outer function.
//allow for private variables and state maintance
//used frequently in js farmerworks :react,vue,angular

function outer() {
    let message = "Hello";
    functioninner(){
        console.log(message);
    }
    innerHeight();
}

outer();