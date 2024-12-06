
// Implement throttling of promises which throttles API requests to max limit in JS

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