
// Implement the functionality behaviour of Promise.any

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