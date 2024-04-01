class Counter {
  constructor(init) {
    this.init = init;
    this.counter = counter;
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

let cObj = new Counter(5);
console.log(cObj.increment());
console.log(cObj.reset());
console.log(cObj.decrement());