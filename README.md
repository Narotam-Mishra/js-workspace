
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
- [2694. Event Emitter](https://leetcode.com/problems/event-emitter/description/?envType=study-plan-v2&envId=30-days-of-javascript)[TS_Solved]
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

### Implementation

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

### [Implement a custom polyfill version of Object.assign() method in JS](https://github.com/Narotam-Mishra/js-workspace?tab=readme-ov-file#tricky-js-interview-coding-questions)

### Steps
1. Argument Type Check :- 
- Throws a TypeError if the target is null or undefined because the native Object.assign expects a valid object.

2. Convert Target to Object :- 
- Uses Object(target) to ensure the target is treated as an object.

3. Iterate Over Sources :- 
- Loops through each source object provided in the arguments.

4. Copy Properties :- 
- For each source object, the code loops through its properties using a for...in loop. It checks if the property is an own property of the object using Object.prototype.hasOwnProperty.

5. Assign Property :- 
- If it’s an own property, the property is assigned to the target object.

6. Return Target Object :- 
- Finally, the function returns the modified target object, similar to the native Object.assign.

### Implementation

```javascript
let customObjectAssign = function(target, ...sources){
    // check if the target is an object otherwise throw an error
    if(target == null){
        throw new TypeError('Cannot convert undefined or null to object');
    }

    // convert target to an object
    let toObj = Object(target);

    // iterate over the source objects
    for(let i=0; i<sources.length; i++){
        let nextSrcObj = sources[i];

        // skip over if the source is null or undefined
        if(nextSrcObj !== null){
            // use a for...in loop to iterate over the own properties of the object
            for(let key in nextSrcObj){
                // only copy properties that are directly on the source object
                if(Object.prototype.hasOwnProperty.call(nextSrcObj, key)){
                    toObj[key] = nextSrcObj[key];
                }
            }
        }
    }

    // return the modified target object
    return toObj;
}

const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

const res = customObjectAssign(target, source1, source2);
console.log(res);

```

### [Implement a custom String Tokenizer in JS](https://github.com/Narotam-Mishra/js-workspace?tab=readme-ov-file#tricky-js-interview-coding-questions)

### Steps
1. Define `constructor` :- Accepts the string to be tokenized and an optional delimiter string. If no delimiter is provided, it defaults to a space " ".

2. Escape method (`escapeRegExp`): Escapes special characters in the delimiter string so that it can be used in a regular expression safely.

3. Tokenize method (`tokenize`): Uses a regular expression to split the string based on the delimiters. The `filter` function removes any empty tokens.

4. `hasMoreTokens` method: Checks if there are any more tokens available.

5. `getNextToken` method: Returns the next token and increments the index. Throws an error if there are no more tokens.

6. `getRemainingTokens` method: Returns all remaining tokens and moves the index to the end.

### Implementation

```javascript
class CustomStringTokenizer {
    constructor(str, delimiters = " "){
        this.str = str;
        this.delimiters = delimiters;
        this.tokens = this.tokenize();
        this.currentIndex = 0;
    }

    // escape special characters for use in a regular expression
    escapeRegExp(string){
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // tokenize the input string based on the delimiters
    tokenize(){
        const delimiterRegex = new RegExp(`[${this.escapeRegExp(this.delimiters)}]+`, 'g');
        return this.str.split(delimiterRegex).filter(token => token.length > 0);
    }

    // check if there are more tokens available
    hasMoreToken(){
        return this.currentIndex < this.tokens.length;
    }

    // get the next token
    getNextToken(){
        if(this.hasMoreToken()){
            return this.tokens[this.currentIndex++];
        }else{
            throw new Error("No more tokens available");
        }
    }

    // get all remaining tokens as an array
    getRemainingTokens(){
        if(this.hasMoreToken()){
            const remaining = this.tokens.slice(this.currentIndex);
            // move to next index
            this.currentIndex = this.tokens.length;
            return remaining;
        }else{
            return [];
        }
    }
}

// example usage
const tokenizer = new CustomStringTokenizer("Hello, world! This is a test.", " ,!");

// iterate through tokens
while(tokenizer.hasMoreToken()){
    console.log(tokenizer.getNextToken());
}

// getting remaining tokens
const remaining = tokenizer.getRemainingTokens();
console.log("Remaining tokens:", remaining);

/*

Output of code:-
Hello
world
This
is
a
test.
Remaining tokens: []

*/
```

### [Implement a throttle function that comes with a cancel method to cancel delayed invocations](https://github.com/Narotam-Mishra/js-workspace?tab=readme-ov-file#tricky-js-interview-coding-questions)

#### Intuition and approach

1. Function Structure :-

- We define a throttle function that takes two parameters: the function to be throttled (func) and the time limit (limit).
- Inside throttle, we define an inner function throttled that will be returned. This creates a closure, allowing us to maintain state between function calls.


2. State Variables :-

- lastFunc: Stores the last scheduled function call (as a timeout ID).
- lastRan: Stores the timestamp of when the function was last executed.


3. Throttling Logic :-

- When throttled is called for the first time (!lastRan), we execute the function immediately and set lastRan.
- For subsequent calls, we clear any existing scheduled call (clearTimeout(lastFunc)) to prevent multiple executions.
- We then schedule a new call using setTimeout. This new call is set to execute after the remaining time in the limit period.


4. Time Checking :-

- Before executing the function in the scheduled call, we check if enough time has passed since the last execution ((Date.now() - lastRan) >= limit).
- If enough time has passed, we execute the function and update lastRan.

5. Cancel Method:

- We add a cancel method to the throttled function.
- This method clears any pending timeout and resets the state variables.
- It allows users to cancel any scheduled executions manually.

6. Preserving Context and Arguments:

- We use func.apply(this, args) to ensure that the original function is called with the correct context (this) and all provided arguments.

#### The intuition behind throttling is to control the rate at which a function is called, especially useful for performance-intensive operations or API calls. This implementation ensures that :-

1. The function is executed immediately on the first call.
2. Subsequent calls within the limit period are delayed.
3. If multiple calls are made within the limit period, only the last one is scheduled for execution.
4. The function will never be called more frequently than the specified limit.

##### The addition of the cancel method provides more control, allowing us to stop any pending executions, which can be useful when cleaning up or when you no longer need the throttled function to run.

### Implementation

``` JavaScript []
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

/*

Output of code :-
Throttle function executed!
*/
```

### [Implement memoizing or caching identical API requests.](https://github.com/Narotam-Mishra/js-workspace?tab=readme-ov-file#tricky-js-interview-coding-questions)

#### Intuition

##### When making API requests, there are two main scenarios to handle :- 

1. **Sequential Requests** :- A request is made, the result is cached, and subsequent requests for the same URL retrieve the cached result without making another API call.

2. **Simultaneous Requests** :- If two or more requests for the same URL happen at the same time
- Without special handling, each request might trigger a separate API call before the first request completes.
- This results in duplicate network requests, which defeats the purpose of caching.

#### Key Insights from above steps :-
- Sequential requests use the cached result efficiently.
- Simultaneous requests share the same "in-progress" request to avoid duplicate API calls.

#### Step-by-Step Approach 

- Step 1 : **Caching Basics** - The cache is implemented as a Map, where :
    - **Key** : The API URL
    - **Value** : The result of the API call (or the promise of an in-progress API request).

- Step 2 : **Check for Cached Response** - Before making an API request, check if the `cache` already contains the URL, so if the URL exists in the `cache`, return the cached response immediately. We can use below snippet for this :-

``` JavaScript []
if (this.cache.has(apiURL)) {
    return this.cache.get(apiURL);
}
```

- Step 3 : **Handle Simultaneous Requests** - If the request isn't cached, make the API request and temporarily store the promise in the cache, we can use below snippet for this :-

``` JavaScript []
const fetchPromise = fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${apiURL}`);
        }
        return response.json();
    })
    .then(data => {
        this.cache.set(apiURL, data); // Cache the resolved data
        return data;
    })
    .catch(error => {
        this.cache.delete(apiURL); // Remove the in-progress entry on error
        throw error;
    });
```

- Step 4 : **Store Final Data** - Once the API call is successful :-
    - Replace the cached promise with the actual data.
    - This ensures future requests for the same URL retrieve the resolved data immediately

- Step 5 : **Handle Errors** - If the API request fails :-
    - Remove the "in-progress" promise from the cache to prevent stale or invalid entries.
    - Throw the error so it can be handled by the caller.

- Step 6 : **Return the Result** - The result of the `fetchPromise` (either data or an error) is returned to the caller.

### Implementation

``` JavaScript []
class ApiCache {
    constructor(){
        this.cache = new Map();
    }

    // utility function to fetch API responses using cache
    async fetchWithCache(apiURL){
        if (this.cache.has(apiURL)) {
            console.log('Cache hit for:', apiURL);
            return this.cache.get(apiURL);
        }

        console.log('Making API request for:', apiURL); 

        // store the in-progress fetch promise in the cache
        const fetchPromise = fetch(apiURL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch data from ${apiURL}`);
                }
                return response.json();
            })
            .then((data) => {
                // cache the resolved data
                this.cache.set(apiURL, data); 
                return data;
            })
            .catch((error) => {
                // remove the in-progress entry on error
                this.cache.delete(apiURL); 
                throw error;
            });

        this.cache.set(apiURL, fetchPromise);

        return fetchPromise;
    }

    // utility function to clear the cache
    clearCache(){
        this.cache.clear();
        console.log('Cache cleared');
    }
}


// test code
const apiCache = new ApiCache();

// First fetch: makes an API call and caches the result
apiCache.fetchWithCache('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log("First fetch:", data));

// Second fetch: uses the cached result
apiCache.fetchWithCache('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log("Second fetch:", data));

Promise.all([
    apiCache.fetchWithCache(`https://jsonplaceholder.typicode.com/users`),
    apiCache.fetchWithCache(`https://jsonplaceholder.typicode.com/users`)
])
.then((results) => {
    console.log("Simultaneous call - Data:", results);
})
.catch((error) => {
    console.log("Simultaneous call - Error:", error);
});
```

### [Implement throttling of promises which throttles API requests to max limit](https://github.com/Narotam-Mishra/js-workspace?tab=readme-ov-file#tricky-js-interview-coding-questions)

#### Intuition

- To implement throttling of promises in JavaScript, we need to limit the maximum number of simultaneous API requests to avoid overwhelming the server or breaching API rate limits. By setting a throttle limit, we ensure only a certain number of promises are active at any given time.

#### Approach

###### We can follow below steps for implementation :-

1. **Define a Queue** :- When a new request is made but the limit has been reached, queue it until a current request finishes.

2. **Track Active Promises** :- Use a counter to keep track of the number of currently active promises.

3. **Execute Promises in Batches** :- When a promise completes, check the queue to see if a new promise can be started.

4. **Control Flow with Promise** :- Use `Promise` to control asynchronous flow, ensuring each new request waits for the next available "slot."

### Implementation

``` JavaScript []
class PromiseThrottler {
  /**
   * creates a PromiseThrottler class with a specified limit.
   * maximum number of concurrent promises allowed.
   */
  constructor(limit) {
    this.limit = limit;
    this.activeCount = 0;
    this.queue = [];
  }

  /*
   * adds a promise-returning function to the queue, throttling based on the limit.
   */
  addPromise(promiseFunction) {
    // wrap the promise function to track its completion
    const promiseWrapper = () => {
      // increment active count
      this.activeCount++;

      // execute the promise function
      return promiseFunction()
        .then((res) => {
          this.activeCount--;
          this.next();
          return res;
        })
        .catch((error) => {
          this.activeCount--;
          this.next();
          throw error;
        });
    };

    // if within limit , execute promise immediately; otherwise, enqueue
    if (this.activeCount < this.limit) {
      return promiseWrapper();
    } else {
      // enqueue the promise function if limit is reached
      return new Promise((resolve, reject) => {
        this.queue.push(() => promiseWrapper().then(resolve).catch(reject));
      });
    }
  }

  /**
   * executes the next promise in the queue, if available and within the limit.
   */
  next() {
    if (this.queue.length > 0 && this.activeCount < this.limit) {
      // get the next function from the queue
      const nextPromiseFunc = this.queue.shift();

      // Execute the function
      nextPromiseFunc();
    }
  }
}

// example usage

const throttler = new PromiseThrottler(3);

// simulate a promise-returning function (e.g., an API call)
function makeApiCall(id){
    return new Promise((resolve) => {
        console.log(`Starting request ${id}`);
        setTimeout(() => {
            console.log(`Completing request ${id}`);
            resolve(`Result of ${id}`);
        }, 1000);
    })
}

// add multiple requests to the throttler
const requests = Array.from({ length: 9 }, (_, i) => throttler.addPromise(() => makeApiCall(i)))

// wait for all requests to complete
Promise.all(requests).then((res) => {
    console.log(`All requests completed:`, res);
});


/*
Output of above code :-
Starting request 0
Starting request 1
Starting request 2
Completing request 0
Starting request 3
Completing request 1
Starting request 4
Completing request 2
Starting request 5
Completing request 3
Starting request 6
Completing request 4
Starting request 7
Completing request 5
Starting request 8
Completing request 6
Completing request 7
Completing request 8
All requests completed: [
  'Result of 0',
  'Result of 1',
  'Result of 2',
  'Result of 3',
  'Result of 4',
  'Result of 5',
  'Result of 6',
  'Result of 7',
  'Result of 8'
]
*/
```

### Explanation of above code :-

1. **Constructor** :- The `PromiseThrottler` class is initialized with a `limit` defining the maximum concurrent promises allowed.

2. **Adding Promises** :-
    - When `addPromise()` is called, it checks if `activeCount` is below the limit.
    
    - if within `limit`, it executes the `promiseFunc` immediately, incrementing `activeCount`.

    - if the `limit` is reached, it adds the `promiseFunc` to a queue instead.

3. **Handling Queue** :-
    - After each promise completes (either resolves or rejects), `next()` is called.

    - this checks if there are queued promises and if more requests can be started (based on the limit).

    - if so, it dequeues the next function and executes it.

4. **Simulating Usage** :-
    - The example shows `makeApiCall`, a mock asynchronous function.

    - `PromiseThrottler.addPromise()` is called for each simulated API call, ensuring at most 3 requests run concurrently.

    - the `Promise.all(requests)` at the end waits for all requests to complete before logging results.

### [Implement polyfill for sort() method in JS](https://github.com/Narotam-Mishra/js-workspace#implement-polyfill-for-sort-method-in-js)

#### Intuition
- Sorting Algorithm :- Uses Merge Sort (a stable, efficient O(n log n) algorithm) instead of the native JS sort (which may use QuickSort, MergeSort, or Timsort depending on engine).

- Comparator Support :- Supports an optional compare function for custom sorting logic.

- Default Behavior :- Falls back to a default lexicographical comparison if no function is provided (to mimic JS default behavior).

#### Approach

##### Step 1: Check if `customSort` already exists
`
if(!Array.prototype.customSort)
`
- Prevents overwriting an existing method if someone has already defined it.

##### Step 2: Define the polyfill

`
Array.prototype.customSort = function(compareFn){
    <!-- your implementation -->
}
`
- Extends the Array prototype.
- Accepts an optional compareFn, just like the native .sort().

##### Step 3: Define defaultCompare

`
function defaultCompare(a, b){
    const aStr = String(a);
    const bStr = String(b);
    ...
}
`
- Converts a and b to strings.
- Compares them character by character using Unicode values (`charCodeAt(i)`).
- Mimics JS's default lexicographic comparison for strings:
    - "12" < "2" returns true because "1" comes before "2".

➡️ Return values:

- `-1` if `a < b`
- `1` if `a > b`
- `0` if equal

##### Step 4: Select comparison function
`
const cmp = compareFn || defaultCompare;
`
- If `compareFn` is provided by the user, use it.
- Otherwise, fall back to `defaultCompare`.

##### Step 5: Define and call mergeSort
`
function mergeSort(start, end) { ... }
mergeSort(0, arr.length);
`
- Implements recursive Merge Sort on arr from index start to end.

#### Implementation

``` JavaScript []
if(!Array.prototype.customSort){
    Array.prototype.customSort = function(compareFn){
        const arr = this;

        // step 1 - defaultCompare function for default compare using lexicographic order
        function defaultCompare(a, b){
            const aStr = String(a);
            const bStr = String(b);
            let i = 0;
            while(i < aStr.length && i <bStr.length){
                if(aStr.charCodeAt(i) < bStr.charCodeAt(i)) return -1;
                if(aStr.charCodeAt(i) > bStr.charCodeAt(i)) return 1;
                i++;
            }

            if(aStr.length < bStr.length) return -1;
            if(aStr.length > bStr.length) return 1;
            return 0;
        }

        // step 2 - if if custom compare function (callback of sort method) is not defined, use defaultCompare function 
        const cmp = compareFn || defaultCompare;

        // step 3 - implement Merge sort form scratch
        function mergeSort(start, end){
            // base case
            if(end - start <= 1) return;

            // calculate mid
            const mid = Math.floor((start + end) / 2);

            // recursive call to first half of array
            mergeSort(start, mid);

            // recursive call to second half of array
            mergeSort(mid, end);

            // then merge
            merge(start, mid, end);
        }

        // utility function to merge sorted array
        function merge(start, mid, end){
            const left = [], right = [];
            for(let i=start; i<mid; i++){
                left.push(arr[i]);
            }

            for(let i=mid; i<end; i++){
                right.push(arr[i]);
            }

            let i=0, j=0, k = start;
            while(i < left.length && j < right.length){
                if(cmp(left[i], right[j]) <= 0){
                    arr[k++] = left[i++];
                }else{
                    arr[k++] = right[j++];
                }
            }

            while(i < left.length){
                arr[k++] = left[i++];
            }

            while(j < right.length){
                arr[k++] = right[j++];
            }
        }

        mergeSort(0, arr.length);
        return arr;
    }
}

const nums = [10, 20, 2, 4, 3, 5, 1];
const res1 = nums.customSort();
console.log("Lexical Order Sort:", res1);

const res2 = nums.customSort((a, b) => a - b);
console.log("Original Order Sort:", res2);

/*
Output of above code :-
Lexical Order Sort: [
  1, 10, 2, 20,
  3,  4, 5
]
Original Order Sort: [
  1,  2,  3, 4,
  5, 10, 20
]
*/

```

### [Implement your own reduce method in JS / Write polyfill for reduce method in JS.](https://github.com/Narotam-Mishra/js-workspace?tab=readme-ov-file#tricky-js-interview-coding-questions)

### Intuition

The `reduce()` function takes an array and "reduces" it to a single value by applying a callback function to each element sequentially. Think of it as folding or accumulating values - you start with an initial value (accumulator) and combine it with each array element one by one.

### Approach

1. **Handle the accumulator**: If an initial value is provided, use it. If not, use the first array element as the starting accumulator.
2. **Iterate through elements**: Start from the appropriate index (0 if initial value provided, 1 if not).
3. **Apply the callback**: For each element, call the reducer function with the current accumulator, current element, index, and original array.
4. **Update accumulator**: The result of each callback becomes the new accumulator.
5. **Return final result**: After processing all elements, return the final accumulator value.## Key Points Explained

### Steps

**1. Accumulator Handling**: The trickiest part is handling the initial value. If provided, we start iterating from index 0. If not provided, we use the first array element as the accumulator and start from index 1.

**2. Callback Parameters**: The reducer callback receives four parameters:
   - `accumulator`: The accumulated result so far
   - `currentValue`: The current element being processed
   - `currentIndex`: The index of the current element
   - `array`: The original array being reduced

**3. Error Handling**: We need to handle edge cases like empty arrays without initial values, invalid inputs, and non-function callbacks.

**4. Immutability**: The original array is never modified - we only read from it and accumulate results.

``` JavaScript []

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

/*
Output of above code :-
Sum1 value: 15
Sum2 value: 15
*/

```
