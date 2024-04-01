// Problem link - https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1 (closures)

let createCounter = function (init) {
  let counter = init;
  return {
    increment: () => {
      ++counter;
      return counter;
    },
    decrement: () => {
      --counter;
      return counter;
    },
    reset: () => {
      counter = init;
      return counter;
    },
  };
};
  

const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4


// Approach-2 (using ES6 class)

class Counter {
  constructor(init) {
    this.init = init;
    this.counter = init;
  }

  increment() {
    return ++this.counter;
  }

  decrement() {
    return --this.counter;
  }

  reset() {
    this.counter = this.init;
    return this.counter;
  }
}

let cObj = new Counter(0);
console.log(cObj.increment());
console.log(cObj.increment());
console.log(cObj.decrement());
console.log(cObj.reset());
console.log(cObj.reset());