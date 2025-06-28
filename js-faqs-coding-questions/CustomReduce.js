
// Implement your own reduce method in JS / Write polyfill for reduce method in JS.

Array.prototype.customReduce = function(callback, initialValue){
    // step 1 - validate input
    if(typeof callback !== 'function'){
        throw new TypeError("callback must be function!!");
    }

    // step 2 - handle empty array case
    if(this.length === 0 && initialValue === undefined){
        throw new TypeError("Reduce of empty array with no initial value!!");
    }

    // step 3 - initialize accumulator and starting index
    let accumulator;
    let startIndex;

    if(initialValue !== undefined){
        // if initial value is given, use it as accumulator
        accumulator = initialValue;

        // start first index from 0
        startIndex = 0;
    }else{
        // otherwise treat array first element as accumulator
        accumulator = this[0];

        // start first index from 1 in case accumulator is not defined
        startIndex = 1;
    }

    // step 4 - iterate through array elements and process it
    for(let i=0; i<this.length; i++){
        // step 5 - apply callback function
        // callback receives : (accumulator, currentValue, currentIndex, array)
        accumulator = callback(accumulator, this[i], i, this);
    }

    // step 5 - return final accumulated result
    return accumulator;
}

const nums = [1,2,3,4,5];

// using built-in reduce method
const sum1 = nums.reduce((acc, curr) => acc+curr, 0);
console.log("Sum1 value:", sum1);

// using custom reduce `customReduce` method
const sum2 = nums.customReduce((acc, curr) => acc+curr, 0);
console.log("Sum2 value:", sum2);