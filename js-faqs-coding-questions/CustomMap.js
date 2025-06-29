
// Implement your own map method in JS / Write polyfill for map method in JS

Array.prototype.customMap = function(callback, thisArg){
    // step 1 - validate callback function
    if(typeof callback !== 'function'){
        throw new TypeError('Callback must be a function!!')
    }

    // step 2 - create a new result array `res` to store the result
    const res = [];

    // step 3 - iterate through each element of array
    for(let i=0; i<this.length; i++){
        // step 4 - call callback with proper context and arguments
        // callback receives: (currentValue, index, array(this))
        const mappedValue = callback.call(thisArg, this[i],i, this);
        res[i] = mappedValue;
    }

    // step 5 - return result array `res`
    return res;
}

const arr = [1,2,3,4,5];
const squared = arr.customMap(x => x * x);

console.log('Original:', arr);
console.log('Squared:', squared);

const nums = [2,3,1,4,7,5];

const nativeResult = nums.map(x => x * 3);
const customResult = nums.customMap(x => x * 3);

console.log('Native map result:', nativeResult);
console.log('Custom map result:', customResult);
