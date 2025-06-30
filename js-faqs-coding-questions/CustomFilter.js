
Array.prototype.customFilter = function(callback, thisArg){
    // step 1 - validate inputs
    if(this === null){
        throw new TypeError('Array.prototype.customFilter called on null or undefined')
    }

    // step 2 - convert 'this' to an object (handles primitive values)
    const obj = Object(this);

    // step 3 - get length property and convert to integer
    const len = parseInt(obj.length) || 0;

    // step 4 - validate that callback is a function
    if(typeof callback !== 'function'){
        throw new TypeError('callback must be function!!')
    }

    // step 5 - store result in `res`
    const res = [];

    // step 6 - iterate through each index
    for(let i=0; i<len; i++){
        const element = obj[i];

        // step 7 - call the callback function with proper context
        const shouldInclude = callback.call(thisArg, element, i, obj);

        // step 8 - if callback returns truthy value, add element to result
        if(shouldInclude){
            res.push(element);
        }
    }

    // step 9 - return resultant array `res`
    return res;
}

const nums = [1,2,3,4,5,6,7,8,9,10];

console.log("Original input array:", nums);
const evenNumbers = nums.customFilter((num) => num % 2 === 0);
console.log("Even numbers using customFilter:", evenNumbers);

const evenNums = nums.filter((num) => num % 2 === 0);
console.log("Even numbers using native filter:", evenNumbers);