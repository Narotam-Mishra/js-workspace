
// Implement the functionality behaviour of Promise.allSettled

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