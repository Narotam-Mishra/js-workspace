
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



## Tricky JS Interview Coding Questions

- [Implement a function to execute N async tasks in series in JS]

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

- [Implement a function to execute N async tasks in parallel in JS]

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

- [Implement a pipe function which chains N number of functions]

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

- [Implement a function to execute N async tasks in race.]

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
