
// Implement a throttle function that comes with a cancel method to cancel delayed invocations.

/**
 * Creates a throttled version of the given function with a cancel method.
 * @param {Function} func - The function to throttle.
 * @param {number} limit - The time limit (in milliseconds) between function calls.
 * @returns {Function} - The throttled function with a cancel method.
 */

function throttle(func, limit){
    // stores the last scheduled function call
    let lastFunc;

    // stores the timestamp of the last function execution
    let lastRun;

    //function that will be returned
    function throttled(...args){
        // if the function hasn't been called yet, or the limit has passed
        if(!lastRun){
            // execute the function immediately
            func.apply(this, args);

            // update the last execution timestamp
            lastRun = Date.now();
        }else{
            // clear any existing scheduled call
            clearInterval(lastFunc);

            // schedule a new call
            lastFunc = setTimeout(() => {
                // check if enough time has passed since the last execution
                if((Date.now() - lastRun) >= limit){
                    // execute the function
                    func.apply(this, args);

                    // update the last execution timestamp
                    lastRun = Date.now();
                }
            }, limit - (Date.now() - lastRun));
        }
    }

    // cancel method to clear any pending execution
    throttled.cancel = function(){
        clearTimeout(lastFunc);
        lastFunc = null;
        lastRun = null;
    };

    return throttled;
}

// example use
const myThrottledFunction = throttle(() => {
    console.log("Throttle function executed!") 
}, 2000);

// call to your throttle function to test throttled function
myThrottledFunction();
myThrottledFunction();
myThrottledFunction();

// cancel any pending executions
myThrottledFunction.cancel();