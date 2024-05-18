
// Implement a function that returns a memoized version of a function which accepts a single argument.

/**
* Function to create a memoized version of a single-argument function.
* @param {Function} fn - The function to be memoized.
* @returns {Function} - The memoized version of the input function.
*/

function memoize(fn){
    // object to store results of function calls (memoization)
    const cache = {};

    // return the memoized function
    return function(arg){
        // check if the result of the argument 'arg' is already in the cache
        if(cache.hasOwnProperty(arg)){
            console.log('Fetching from cache:', arg);
            return cache[arg];
        }

        // if function's result not in cache, then compute the result
        const res = fn(arg);

        // store the result 'res' in cache
        cache[arg] = res;

        console.log('Computing and storing in cache:', arg);
        return res;
    };
}

// let us create a function that will be memoized
function findSquare(num){
    return num * num;
}

// example usage:

const memoizedFn = memoize(findSquare);

// run memoized function

console.log(memoizedFn(3)); // Computing and storing in cache: 3, then logs 9
console.log(memoizedFn(3)); // Fetching from cache: 3, then logs 9
console.log(memoizedFn(5)); // Computing and storing in cache: 5, then logs 25
console.log(memoizedFn(5)); // Fetching from cache: 5, then logs 25
console.log(memoizedFn(4)); // Fetching from cache: 4, then logs 16

