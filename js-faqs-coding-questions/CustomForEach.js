
// Implement your own `forEach()` method in JS / Write polyfill for `forEach()` method in JS

Array.prototype.customForEach = function(callback, thisArg){
    // step 1 - input validation - check if callback is actually a function
    if(typeof callback !== 'function'){
        throw new Error(callback + "is not a function");
    }

    // step 2 - convert this to object and handle null/undefined
    let obj = Object(this);

    // step 3 - get the length property and convert to integer
    let len = parseInt(obj.length) || 0;

    // step 4 - edge case : handle empty array
    if(len === 0){
        return;
    }

    // step 5 - iterate on each element of array elements
    for(let i=0; i<len; i++){
        // step 6 - call the callback function with proper context
        // parameters: currentValue, currentIndex, array
        callback.call(thisArg, obj[i], i, 0);
    }
}

// test and run the customForEach

// test 1: basic functionality
const nums = [1, 2, 3, 4, 5];
console.log("Using Native ForEach:")
nums.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
})

console.log("Using Custom ForEach:")
nums.customForEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
})

// test 2: using thisArg parameter
const multiplier = {
  factor: 10,
  multiply: function(arr) {
    arr.customForEach(function(num, index) {
      console.log(`  ${num} * ${this.factor} = ${num * this.factor}`);
    }, this); // 'this' refers to multiplier object
  }
};
multiplier.multiply([1, 2, 3]);

// test 3: side effects
const data = ['apple', 'banana', 'cherry'];
const results = [];
data.customForEach((fruit, index) => {
  // simulate DOM manipulation or other side effects
  results.push(`Item ${index + 1}: ${fruit.toUpperCase()}`);
});
console.log('  Results after forEach:', results);
