
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
- [2721. Execute Asynchronous Functions in Parallel](https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/?envType=study-plan-v2&envId=30-days-of-javascript) [TS - Unsolved]

## JSON
- [2727. Is Object Empty](https://leetcode.com/problems/is-object-empty/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2677. Chunk Array](https://leetcode.com/problems/chunk-array/description/?envType=study-plan-v2&envId=30-days-of-javascript) [TS - Unsolved]
- [2619. Array Prototype Last](https://leetcode.com/problems/array-prototype-last/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2631. Group By](https://leetcode.com/problems/group-by/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2724. Sort By](https://leetcode.com/problems/sort-by/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2722. Join Two Arrays by ID](https://leetcode.com/problems/join-two-arrays-by-id/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2625. Flatten Deeply Nested Array](https://leetcode.com/problems/flatten-deeply-nested-array/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2705. Compact Object](https://leetcode.com/problems/compact-object/description/?envType=study-plan-v2&envId=30-days-of-javascript)

## Classes
- [2694. Event Emitter](https://leetcode.com/problems/event-emitter/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2695. Array Wrapper](https://leetcode.com/problems/array-wrapper/description/?envType=study-plan-v2&envId=30-days-of-javascript)
- [2726. Calculator with Method Chaining](https://leetcode.com/problems/calculator-with-method-chaining/description/?envType=study-plan-v2&envId=30-days-of-javascript)



## Tricky JS Interview Coding Questions

- [Implement a function to execute N async tasks in series in JS](https://github.com/Narotam-Mishra/js-workspace#tricky-js-interview-coding-questions)

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

- [Implement a function to execute N async tasks in parallel in JS](https://github.com/Narotam-Mishra/js-workspace#tricky-js-interview-coding-questions)

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

- [Implement a pipe function which chains N number of functions](https://github.com/Narotam-Mishra/js-workspace#tricky-js-interview-coding-questions)

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

- [Implement a function to execute N async tasks in race.](https://github.com/Narotam-Mishra/js-workspace#tricky-js-interview-coding-questions)

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

- [Implement a debounce function that comes with a cancel method to cancel delayed invocations.](https://github.com/Narotam-Mishra/js-workspace#tricky-js-interview-coding-questions)

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

- [Implement the functionality behaviour of Promise.any() method](https://github.com/Narotam-Mishra/js-workspace#tricky-js-interview-coding-questions)

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

- [Implement a function that determines if two values are deep equal.](https://github.com/Narotam-Mishra/js-workspace#tricky-js-interview-coding-questions)

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

- [Implement a function that serializes a Javascript value into a JSON string.](https://github.com/Narotam-Mishra/js-workspace#tricky-js-interview-coding-questions)

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

- [Implement a function that recursively flattens an array into a single level deep.](https://github.com/Narotam-Mishra/js-workspace?tab=readme-ov-file#tricky-js-interview-coding-questions)

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

- [Implement a function that returns a memoized version of a function which accepts a single argument.](https://github.com/Narotam-Mishra/js-workspace?tab=readme-ov-file#tricky-js-interview-coding-questions)

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