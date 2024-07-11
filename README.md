
## [30 Days of JavaScript (Leetcode)](https://leetcode.com/studyplan/30-days-of-javascript/)

## Closures
- [2667. Create Hello World Function](https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2620. Counter](https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2704. To Be Or Not To Be](https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2665. Counter II](https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2704. To Be Or Not To Be](https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript)

## Basic Array Transformations
- [2635. Apply Transform Over Each Element in Array](https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2634. Filter Elements from Array](https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2626. Array Reduce Transformation](https://leetcode.com/problems/array-reduce-transformation/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2649. Nested Array Generator](https://leetcode.com/problems/nested-array-generator/description/)

## Function Transformations

- [2629. Function Composition](https://leetcode.com/problems/function-composition/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2703. Return Length of Arguments Passed](https://leetcode.com/problems/return-length-of-arguments-passed/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2666. Allow One Function Call](https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2623. Memoize](https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript)


## Promises and Time

- [2723. Add Two Promises](https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2621. Sleep](https://leetcode.com/problems/sleep/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2715. Timeout Cancellation](https://leetcode.com/problems/timeout-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2725. Interval Cancellation](https://leetcode.com/problems/interval-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2637. Promise Time Limit](https://leetcode.com/problems/promise-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2622. Cache With Time Limit](https://leetcode.com/problems/cache-with-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript) 
- [2627. Debounce](https://leetcode.com/problems/debounce/description/?envType=study-plan-v2&envId=30-days-of-javascript) 
- [2721. Execute Asynchronous Functions in Parallel](https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/?envType=study-plan-v2&envId=30-days-of-javascript)

## JSON
- [2727. Is Object Empty](https://leetcode.com/problems/is-object-empty/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2677. Chunk Array](https://leetcode.com/problems/chunk-array/description/?envType=study-plan-v2&envId=30-days-of-javascript) 
- [2619. Array Prototype Last](https://leetcode.com/problems/array-prototype-last/description/?envType=study-plan-v2&envId=30-days-of-javascript) 
- [2631. Group By](https://leetcode.com/problems/group-by/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2724. Sort By](https://leetcode.com/problems/sort-by/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2722. Join Two Arrays by ID](https://leetcode.com/problems/join-two-arrays-by-id/description/?envType=study-plan-v2&envId=30-days-of-javascript) [TS_Solved]
- [2625. Flatten Deeply Nested Array](https://leetcode.com/problems/flatten-deeply-nested-array/description/?envType=study-plan-v2&envId=30-days-of-javascript) [TS_Solved]
- [2705. Compact Object](https://leetcode.com/problems/compact-object/description/?envType=study-plan-v2&envId=30-days-of-javascript)[TS_Solved]

## Classes
- [2694. Event Emitter](https://leetcode.com/problems/event-emitter/description/?envType=study-plan-v2&envId=30-days-of-javascript)[TS_Unsolved]
- [2695. Array Wrapper](https://leetcode.com/problems/array-wrapper/description/?envType=study-plan-v2&envId=30-days-of-javascript)[TS_Solved]
- [2726. Calculator with Method Chaining](https://leetcode.com/problems/calculator-with-method-chaining/description/?envType=study-plan-v2&envId=30-days-of-javascript)[TS_Solved]



## Tricky JS Interview Coding Questions

### [Implement a function to execute N async tasks in series in JS](https://github.com/Narotam-Mishra/js-workspace#tricky-js-interview-coding-questions)

### Implementation

```javascript
async function executeTasksInSeries(tasks){
    // execute async task in series
    for(const task of tasks){
        await task();
    }
}

// task examples

async function todoTask1(){
    console.log('Task-1 started');
    await delay(1000);
    console.log('Task-1 completed');
}

async function todoTask2(){
    console.log('Task-2 started');
    await delay(1500);
    console.log('Task-2 completed');
}

async function todoTask3(){
    console.log('Task-3 started');
    await delay(500);
    console.log('Task-3 completed');
}

async function todoTask4(){
    console.log('Task-4 started');
    await delay(2000);
    console.log('Task-4 completed');
}

async function todoTask5(){
    console.log('Task-5 started');
    await delay(700);
    console.log('Task-5 completed');
}

// Utility function to simulate asynchronous delay
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

// call the main executeTasksInSeries(tasks) function
executeTasksInSeries([todoTask1, todoTask2, todoTask3, todoTask4, todoTask5]);
```

### [Implement a function to execute N async tasks in parallel in JS](https://github.com/Narotam-Mishra/js-workspace#tricky-js-interview-coding-questions)

### Implementation

```javascript
async function executeTasksInParallel(tasks){
    await Promise.all(tasks.map(task => task()));
}

// task examples

async function todoTask1(){
    console.log('Task-1 started');
    await delay(1000);
    console.log('Task-1 completed');
}

async function todoTask2(){
    console.log('Task-2 started');
    await delay(1500);
    console.log('Task-2 completed');
}

async function todoTask3(){
    console.log('Task-3 started');
    await delay(500);
    console.log('Task-3 completed');
}

async function todoTask4(){
    console.log('Task-4 started');
    await delay(900);
    console.log('Task-4 completed');
}

async function todoTask5(){
    console.log('Task-5 started');
    await delay(700);
    console.log('Task-5 completed');
}

// Utility function to simulate asynchronous delay
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

// call the main executeTasksInParallel(tasks) function
executeTasksInParallel([todoTask1, todoTask2, todoTask3, todoTask4, todoTask5]);
```

### [Implement a pipe function which chains N number of functions](https://github.com/Narotam-Mishra/js-workspace#tricky-js-interview-coding-questions)

### Implementation

```javascript
function pipe(...functions){
    return function(input){
        return functions.reduce((acc, func) => func(acc), input);
    };
}

// example usage

function addNum(x){
    return x + 1
}

function multiplyNum(x){
    return x * 2;
}

function squareNum(x){
    return x * x;
}

const res = pipe(addNum, multiplyNum, squareNum)(4);
console.log(res); // output - 100
```

### [Implement a function to execute N async tasks in race.](https://github.com/Narotam-Mishra/js-workspace#tricky-js-interview-coding-questions)

### Implementation

```javascript
// execute n-tasks in race

async function executeAsyncTasksInRace(tasks){
    try {
        // use Promise.race() to race the task
        const result = await Promise.race(tasks.map(task => task()));

        // return the first resolved task result
        return result;
    } catch (error) {
        // if any task rejects, then return the error
        throw error;
    }
}


// define async tasks

async function todoTask1(){
    return new Promise((resolve => {
        setTimeout(() => resolve('Task-1 finished'), 1000);
    }));
}

async function todoTask2(){
    return new Promise((resolve => {
        setTimeout(() => resolve('Task-2 finished'), 1500);
    }));
}

async function todoTask3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Task-3 failed'), 700);
    });
}

async function todoTask4(){
    return new Promise((resolve => {
        setTimeout(() => resolve('Task-4 finished'), 1100);
    }));
}

async function todoTask5(){
    return new Promise((resolve => {
        setTimeout(() => resolve('Task-5 finished'), 300);
    }));
}

// test above code

// array of tasks
const tasks = [todoTask1, todoTask2, todoTask3, todoTask4, todoTask5];

// execute tasks in race

executeAsyncTasksInRace(tasks)
  .then((result) => console.log("Result:", result))
  .catch((error) => console.log("Error:", error));

```

### [Implement a debounce function that comes with a cancel method to cancel delayed invocations.](https://github.com/Narotam-Mishra/js-workspace#tricky-js-interview-coding-questions)

### Implementation

```javascript
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

```

- This debounce function creates a debounced version of another function, which delays invoking the original function until after a certain delay has passed.

### [Implement the functionality behaviour of Promise.any() method](https://github.com/Narotam-Mishra/js-workspace#tricky-js-interview-coding-questions)

### Implementation

```javascript
Promise.customAny = function (promises) {
  return new Promise((resolve, reject) => {
    let errors = [];
    let completed = 0;

    for (let promise of promises) {
      Promise.resolve(promise)
        .then((val) => resolve(val))
        .catch((error) => {
          errors.push(error);
          completed++;
          if (completed === promises.length) {
            reject(new AggregateError("All promises were rejected", error));
          }
        });
    }
  });
};

// example usage

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 2 rejected");
    }, 1500);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 2000);
});

Promise.customAny([promise1, promise2, promise3])
  .then((val) => {
    console.log(val);
  })
  .catch((error) => {
    console.log(error);
  });

```

### [Implement a function that determines if two values are deep equal.](https://github.com/Narotam-Mishra/js-workspace#tricky-js-interview-coding-questions)

### Implementation

```javascript
function isDeepEuals(a, b) {
  // check if both values are objects and not null
  if (typeof a === "object" && a !== null && typeof b === "object" && b !== null) {
    
    // extact key from both objects
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    // check if both objects have the same number of keys
    if (keysA.length !== keysB.length) {
      return false;
    }

    // Check if all keys in object 'a' are present in object 'b'
    for (const key of keysA) {
      if (!keysB.includes(key)) {
        return false;
      }

      // recursively check the values of each key
      if (!isDeepEuals(a[key], b[key])) {
        return false;
      }
    }
    //Objects are deeply equal
    return true; 
  }else{
    // Compare primitive values directly
    return a === b;
  }
}


const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };

console.log(isDeepEuals(obj1, obj2)); // true - they are deeply equal hence return true
console.log(isDeepEuals(obj1, obj3)); // false - as they are not deeply equal

```

### [Implement a function that serializes a Javascript value into a JSON string.](https://github.com/Narotam-Mishra/js-workspace#tricky-js-interview-coding-questions)

### Implementation

```javascript
function serializeToJSON(value){
    try {
        // Use JSON.stringify to serialize the value to a JSON string
        const jsonString = JSON.stringify(value);
        return jsonString;
    } catch (error) {
        // Handle any errors that occur during serialization
        console.error('Error serializing value to JSON:', error);
        return null;
    }
}

let obj = { name: 'Peter', age: 24, isAdmin: true};
const jsonString = serializeToJSON(obj);
console.log(jsonString);

```

### [Implement a function that recursively flattens an array into a single level deep.](https://github.com/Narotam-Mishra/js-workspace?tab=readme-ov-file#tricky-js-interview-coding-questions)

### Implementation

```javascript
function flattenArray(arr){
    // intialize an empty array to store flattended elements
    let flattenedArr = [];

    // iterate through each array's element
    arr.forEach(function(ele){
        // If the element is an array, recursively call flattenArray on it
        if(Array.isArray(ele)){
            // Concatenate the flattened result with the current flattenedArray
            flattenedArr = flattenedArr.concat(flattenArray(ele));
        }else{
            // If the element is not an array, push it to the flattenedArray
            flattenedArr.push(ele);
        }
    });

    // return the flattened array
    return flattenedArr;
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattened = flattenArray(nestedArray);
console.log(flattened);

```

### [Implement a function that returns a memoized version of a function which accepts a single argument.](https://github.com/Narotam-Mishra/js-workspace?tab=readme-ov-file#tricky-js-interview-coding-questions)

### Implementation

```javascript

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

```

### [Implement the functionality behaviour of Promise.allSettled](https://github.com/Narotam-Mishra/js-workspace?tab=readme-ov-file#tricky-js-interview-coding-questions)

### Implementation

```javascript
function allSettled(promises) {
  return new Promise((resolve) => {
    let results = [];
    let completedPromises = 0;

    // iterate through each promise
    promises.forEach((promise, index) => {
      // if promise is resolved
      Promise.resolve(promise)
        .then((value) => {
          results[index] = {
            status: "fulfilled",
            value: value,
          };
        })
        // if promise is rejected
        .catch((reason) => {
          results[index] = {
            state: "rejected",
            value: reason,
          };
        })
        // finally block run despite of promise's success or failure
        .finally(() => {
          completedPromises++;
          // once all promises are resolved then only proceed further
          if (completedPromises === promises.length) {
            resolve(results);
          }
        });
    });
  });
}

// example

const promises = [
    Promise.resolve(1),
    Promise.reject('some_error'),
    Promise.resolve(7)
];

allSettled(promises).then(results => console.log(results));

```

### [Implement a function that performs a deep copy of a value, and also handles circular references.](https://github.com/Narotam-Mishra/js-workspace?tab=readme-ov-file#tricky-js-interview-coding-questions)

- A circular reference occurs when an object references itself directly or indirectly through another object. For example:

```javascript
let obj = {};
obj.self = obj; // obj references itself

```

- Approach : In this case, obj has a property self that points back to obj. This kind of structure can create problems with operations like deep copying or serialization (e.g., using JSON.stringify), as it can result in infinite loops or errors.

- To handle circular references while performing a deep copy, we need to keep track of objects we have already copied. We'll use a WeakMap to map original objects to their copies. WeakMap is useful here because it allows garbage collection of entries when there are no other references to the keys i.e the original objects.

### Implementation

```javascript
function deepCopy(value, seen = new WeakMap()){
    if(value === null || typeof value !== 'object'){
        // handle non-objects (primitives and functions)
        return value;
    }

    // handle circular references
    if(seen.has(value)){
        return seen.get(value);
    }

    // create a copy based on the type of the original object
    let copy;
    if(Array.isArray(value)){
        // if value is array
        copy = [];
    }else if(value instanceof Date){
        // if value is Date type object
        copy = new Date();
    }else if(value instanceof RegExp){
        // if value is Regular expression type object
        copy = new RegExp(value.source, value.flags);
    }else if(value instanceof Map){
        // if value is Map type object
        copy = new Map();
        value.forEach((val, key) => {
            // recursively copy key value 
            copy.set(deepCopy(key, seen), deepCopy(val, seen));
        });
        return copy;
    }else if(value instanceof Set){
        copy = new Set();
        value.forEach((val) => {
            // recursively add val to set
            copy.add(deepCopy(val, seen));
        });
        return copy;
    }else{
        // if it is instance of object
        copy = Object.create(Object.getPrototypeOf(value));
    }

    // Store the copy in the WeakMap before continuing the deep copy
    seen.set(value, copy);

    // Recursively copy properties
    for(let key in value){
        if(value.hasOwnProperty(key)){
            copy[key] = deepCopy(value[key], seen);
        }
    }

    // return copy
    return copy;
}

// example
let obj = {
    name : "JS_Dev"
};

// creating circular reference
obj.self = obj;

let copy = deepCopy(obj);
console.log(copy);

// check for existence of circular reference
console.log(copy.self === copy); // true, indicating the circular reference is preserved

```

### [Implement a function that deserializes a JSON string into a Javascript value.](https://github.com/Narotam-Mishra/js-workspace?tab=readme-ov-file#tricky-js-interview-coding-questions)

- Approach : To implement a function that deserializes a JSON string into a JavaScript value in plain JavaScript, we can use the JSON.parse() method. This method parses a JSON string and constructs the corresponding JavaScript value or object described by the string.

### Implementation

```javascript
function deserializeJSON(jsonStr){
    try {
        return JSON.parse(jsonStr);
    } catch (error) {
        throw new Error("Invalid JSON string");
    }
}

const jsonString = '{"name": "John", "age": 30, "isStudent": false, "courses": ["Math", "Science"]}';

// const jsonString = { name: "Alice" };

try {
    const res = deserializeJSON(jsonString);
    console.log(res);
} catch (error) {
    console.log(error);
}


/*
Output
{
  name: 'John',
  age: 30,
  isStudent: false,
  courses: [ 'Math', 'Science' ]
}
*/

```


### [Implement a promisify function that allows the original function to override the return value.](https://github.com/Narotam-Mishra/js-workspace?tab=readme-ov-file#tricky-js-interview-coding-questions)


- Approach : To implement a promisify function that allows the original function to override the return value, we can follow below steps:

a). Wrap the original function in a Promise.<br>
b). Allow the original function to provide a custom resolution value.

### Implementation

```javascript
function promisify(originalFn){
    return function(...args){
        return new Promise((resolve, reject) => {
            function callback(err, result){
                if(err){
                    reject(err);
                }else{
                    if(typeof originalFn.override === 'function'){
                        try {
                            const overrideFnResult = originalFn.override(result);
                            resolve(overrideFnResult);
                        } catch (overrideError) {
                            reject(overrideError);
                        }
                    }else{
                        resolve(result);
                    }
                }
            }
            args.push(callback);
            originalFn.apply(this, args);
        });
    };
}



// example usage

function sampleFunction(x, y, callback){
    const res = x + y;
    callback(null, res);
}

// Adding an override method to the sample function

sampleFunction.override = function(result){
    return result * 2;
}

const promisifiedFunction = promisify(sampleFunction);

promisifiedFunction(4, 4)
  .then((result) => {
    console.log(result); // Output: 16 (because 4 + 4 = 8, and then 4 * 4 = 16)
  })
  .catch((err) => {
    console.log(err);
  });

```

### [Implement negative indexing in Array using Proxies.](https://github.com/Narotam-Mishra/js-workspace?tab=readme-ov-file#tricky-js-interview-coding-questions)

- Approach : To implement negative indexing in an Array using Proxies, we can intercept the get and set operations on the array. This allows you to handle negative indices by converting them to their positive counterparts.

### Steps to follow
- Create a handler object that defines get and set traps.
- Inside these traps, convert negative indices to their positive equivalents.
- Use the Proxy constructor to create a new proxy for the array.

### Implementation

```javascript
const createNegativeIndexArray = (arr) => {
    return new Proxy(arr, {
        get(target, prop){
            // convert the property to a number if it is a string
            let index = Number(prop);

            // if the property is not a valid number, return it directly
            if(isNaN(index)){
                return target[prop];
            }

            // handle negative indices
            if(index < 0){
                index = target.length + index;
            }
            return target[index];
        },
        set(target, prop, value){
            // convert the property to a number if it is a string
            let index = Number(prop);

            // if the property is not a valid number, set it directly
            if(isNaN(index)){
                target[prop] = value;
                return true;
            }

            // handle negative indices
            if(index < 0){
                index = target.length + index;
            }
            target[index] = value;
            return true;
        }
    });
};

let arr = createNegativeIndexArray([1, 2, 3, 4, 5]);

console.log(arr[-1]); // output - 5
console.log(arr[-2]); // output - 4

arr[-1] = 10;
console.log(arr[4]); // output - 10

```

### [Implement your custom version of the call method which sets the "this" context.](https://github.com/Narotam-Mishra/js-workspace?tab=readme-ov-file#tricky-js-interview-coding-questions)

- Approach : To implement a custom version of the call method in JavaScript, we can define a method on the Function.prototype to mimic the behavior of the built-in call method. The call method in JavaScript allows us to call a function with a specified this value and arguments provided individually.

### Steps to follow

- Define the custom call method on the Function.prototype :- This ensures that all functions will have access to this custom call method.
- Set the this context :- Use the first argument passed to the custom call method as the this context for the function.
- Handle arguments :- Collect the remaining arguments to pass to the function.
- Invoke the function :- Use the specified this context and arguments to invoke the function

### Implementation

```javascript
Function.prototype.customCall = function(context, ...args){
    //step1 - if context is null or undefined, set it to the global object (window in browsers, global in Node.js)
    context = context || globalThis;

    //step2 - create a unique property on the context to avoid property collision
    const fnSymbol = Symbol();

    //step3 - assign the function (this) to the unique property of the context
    context[fnSymbol] = this;

    //step4 - invoke the function with the context and arguments
    const res = context[fnSymbol](...args);

    // step5 - delete the temporary property
    delete context[fnSymbol];

    //step6 - return the result of the function call
    return res;
}

// example usage

function greet(grt, pnc){
    return `${grt} ${this.name}${pnc}`;
}

const person = { name: "Peter" };

// using customCall() 
console.log(greet.customCall(person, "Hello", "!"));  // Output - Hello Peter!

```

### [Implement your own Lodash _.get method which gets value from the path](https://github.com/Narotam-Mishra/js-workspace?tab=readme-ov-file#tricky-js-interview-coding-questions)

### Steps to follow

1. Path Parsing 
- The path string is first transformed to replace [] notation with dot notation. For example, 'a[0].b.c' becomes 'a.0.b.c'.
- This is achieved using the replace method with a regular expression: path.replace(/\[(\w+)\]/g, '.$1').
- The resulting string is then split by . into an array of keys.

2. Traversal
- The code traverses the object using the keys in the path array.
- If any key does not exist on the current object, the default value is returned.

3. Default Value Handling
- After traversal, if the resulting value is undefined, the provided default value is returned.

### Implementation

```javascript
function get(obj, path, defaultVal){
    // convert string path into an array of keys
    if(typeof path === 'string'){
        path = path.replace(/\[(\w+)\]/g, '.$1').split('.');
    }

    // traverse the object along the path
    let result = obj;
    for(let key of path){
        // if the key is not in the object, return the default value
        if(result === undefined || result === null || !result.hasOwnProperty(key)){
            return defaultVal;
        }
        result = result[key];
    }

    // if the final result is undefined, return the default value
    return result === undefined ? defaultVal : result;
}

// using get()

const obj = { a: [{ b: { c: 3 } }] };

console.log(get(obj, 'a[0].b.c')); // 3
console.log(get(obj, ['a', 0, 'b', 'c'])); // 3
console.log(get(obj, 'a.b.c', 'default')); // default
console.log(get(obj, 'a[0].b.c.d', 'default')); // default
console.log(get(obj, 'a[1].b.c', 'default')); // default

```

### [Write a custom polyfill for typeof operator which returns the correct typeof for the Javascript value (without using 'typeof' in the code)](https://github.com/Narotam-Mishra/js-workspace?tab=readme-ov-file#tricky-js-interview-coding-questions)

- Approach : Below implementation avoids using the typeof operator and instead relies on Object.prototype.toString.call(value) and other type-specific checks to determine the type of the value.

### Steps to follow

1. Null Check: null is explicitly checked.

2. Undefined Check: undefined is explicitly checked.

3. Boolean Check: Check if the value is exactly true or false.

4. Number Check: Use Object.prototype.toString.call(value) to check for numbers and handle NaN separately.

5. String Check: Use Object.prototype.toString.call(value) to check for strings.

6. Array Check: Use Array.isArray(value) to check for arrays.

7. Function Check: Use Object.prototype.toString.call(value) to check for functions.

8. Date Check: Use Object.prototype.toString.call(value) to check for dates.

9. RegExp Check: Use Object.prototype.toString.call(value) to check for regular expressions.

10. Error Check: Use Object.prototype.toString.call(value) to check for errors.

11. Object Check: Use Object.prototype.toString.call(value) to check for generic objects.

12. Symbol Check: Use instanceof Symbol to check for symbols, if supported in the environment.

### Implementation

```javascript
function customTypeof(value) {
    // handle null specifically
    if(value === null) return 'null';

    //  handle undefined specifically
    if(value === undefined) return 'undefined';

    // handle boolean values
    if(value === true || value === false) return 'boolean';

    // handle numbers (excluding 'NaN' which is a number but needs special handling)
    if(Object.prototype.toString.call(value) === '[object Number]'){
        return isNaN(value) ? 'NaN' : 'number';
    }

    // handle strings
    if(Object.prototype.toString.call(value) === '[object String]'){
        return 'string';
    }

    // handle array
    if(Array.isArray(value)) return 'array';

    // handle functions
    if(Object.prototype.toString.call(value) === '[object Function]'){
        return 'function';
    }

    // handle dates
    if(Object.prototype.toString.call(value) === '[object Date]'){
        return 'date';
    }

    // handle regular expressions
    if(Object.prototype.toString.call(value) === '[object RegExp]'){
        return 'regexp';
    }

    // handle errors
    if(Object.prototype.toString.call(value) === '[object Error]'){
        return 'error';
    }

    // handle symbols
    if(Object.prototype.toString.call(value) === '[object Symbol]'){
        return 'symbol';
    }

    // to handle all other objects apart from above 
    if(Object.prototype.toString.call(value) === '[object Object]'){
        return 'object';
    }

    // default case (in case none from above matched)
    return 'unknown';
}

// test above customTypeof() method

console.log(customTypeof(42)); // 'number'
console.log(customTypeof('hello')); // 'string'
console.log(customTypeof(true)); // 'boolean'
console.log(customTypeof(undefined)); // 'undefined'
console.log(customTypeof(null)); // 'null'
console.log(customTypeof([1, 2, 3])); // 'array'
console.log(customTypeof({a: 1})); // 'object'
console.log(customTypeof(function() {})); // 'function'
console.log(customTypeof(/regex/)); // 'regexp'
console.log(customTypeof(new Date())); // 'date'
console.log(customTypeof(new Error('error'))); // 'error'
console.log(customTypeof(NaN)); // 'NaN'
console.log(customTypeof(Symbol('symbol'))); // 'symbol'

```

### [Implement your own split method in JS](https://github.com/Narotam-Mishra/js-workspace?tab=readme-ov-file#tricky-js-interview-coding-questions)

### Steps

1. Function Definition :-
- The function customSplit takes two parameters: str (the string to be split) and separator (the character or substring used as the delimiter).

2. Initialization :-
- An empty array result 'res' is initialized to store the substrings.
- A temporary string temp is initialized to build the current substring.

3. Iteration :-
- A for loop iterates over each character in the input string str.
- Inside the loop, an if statement checks if the current character matches the separator.
- If a match is found, the current temp substring is pushed to the result array, and temp is reset to an empty string.
- If there is no match, the current character is added to temp.

4. Final Substring :-
- After the loop ends, any remaining characters in temp are pushed to the result array to account for the last substring.

5. Return Result :-
- The result array 'res',  which now contains all the substrings, is returned.

```javascript
function customSplit(str, separator){
    // intialize an empty array 'res' to hold the split strings
    const res = [];

    // intialize a temporary 'temp' variable to build the current substring
    let temp = '';

    // iterate through each character in the input string
    for(let i=0; i<str.length; i++){
        // check if the current character matches the separator
        if(str[i] === separator){
            // if it matches, push the temporary substring to the result array
            res.push(temp);

            // reset the temporary variable for the next substring
            temp = '';
        }else{
            // if it doesn't match, add the current character to the temporary substring
            temp += str[i];
        }
    }

    // after the loop ends, push any remaining characters in temp to the result array
    res.push(temp);

    // return the array of substrings
    return res;
}


// test above code
const str = "hello-world-this-is-a-test";
const separator = "-";
const splitArr = customSplit(str, separator);

console.log(splitArr);

/*
Output - [ 'hello', 'world', 'this', 'is', 'a', 'test' ]
*/

```