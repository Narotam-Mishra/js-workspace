
// Problem link - https://leetcode.com/problems/debounce/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
* Debounce function to limit the rate at which a function can fire.
* @param fn - The function to be debounced.
* @param t - The debounce delay in milliseconds.
* @returns A debounced version of the input function.
*/

type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    // variable to store the timer ID
    let timerId : ReturnType<typeof setTimeout> | undefined;
    
    // return the debounced function
    return function(...args) {
        // clear any existing timer to reset the debounce delay
        if(timerId !== undefined){
            clearTimeout(timerId);
        }

        // set a new timer to call the function after the specified delay.
        timerId = setTimeout(() => {
            // call the ortiginal function with the provided arguments.
            fn(...args);
        }, t);
    };
}

// example

// function to be debounced (example function that logs numbers).
const logNumbers: F = (...nums: number[]) => {
    console.log(...nums);
}

// create a debounced version of the logNumbers function with a delay of 400ms.
const debouncedLogNumbers = debounce(logNumbers, 400);

// check the debounced function
debouncedLogNumbers(1, 2, 3);  // This will be logged after 300ms if no other calls are made within that time.
debouncedLogNumbers(4, 5, 6);  // This call will cancel the previous call and log after 300ms.