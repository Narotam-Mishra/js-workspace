
// Implement a debounce function that comes with a cancel method to cancel delayed invocations.

/*

This debounce function creates a debounced version of another function,
which delays invoking the original function until after a certain delay has passed.

*/

function debounce(func, delay){
    // Initialize a variable to hold the timeout ID.
    let timerId;

    // Define the debounced function.
    function debounced(...args){
        // Clear any previously set timeout to prevent the original function from being invoked.
        clearTimeout(timerId);

        // Set a new timeout, delaying the invocation of the original function.
        timerId = setTimeout(() => {
            // Invoke the original function with the provided arguments after the delay.
            func.apply(this, args);
        }, delay)
    }

    // attach a cancel method to the debounced function to allow cancelling the delayed invocation
    debounced.cancel = function(){
        // Clear the timeout to cancel the delayed invocation
        clearTimeout(timerId);
    }

    // return the debounced function

    return debounced;
}

// example usage

function exampleFun(){
    console.log("Debounced function call...");
}

const debouncedFunction = debounce(exampleFun, 2000);

// Function is called after 1 second
debouncedFunction();

// Somewhere before the delay is over
// Cancels the delayed invocation
debouncedFunction.cancel();
