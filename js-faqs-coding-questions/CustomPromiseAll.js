
// Implement your own `Promise.all` method in JS / Write polyfill for `Promise.all` method in JS.

function customPromiseAll(promises){
    // step 1 - return a new Promise that will resolve/reject based on input promises
    return new Promise((resolve, reject) => {

        // step 2 - handle edge case : empty array should resolve immediately
        if(!Array.isArray(promises)){
            reject(new TypeError('Input must be an array'));
            return;
        }

        if(promises.length === 0){
            resolve([]);
            return;
        }

        // step 3 - initialize tracking variables
        // pre-allocate array to maintain order
        const result = new Array(promises.length);

        // track how many promises have completed
        let completedCount = 0;

        // prevent multiple rejections
        let hasRejected;

        // step 4 - process each promise from input array `promises`
        promises.forEach((promise, index) => {
            // step 5 - convert non-promise values to resolved promises
            Promise.resolve(promise)
               .then(value => {
                // step 6 - check if we haven't already rejected
                if(hasRejected) return

                // step 7: Store result at correct index to maintain order
                result[index] = value;
                completedCount++;

                // step 8 - check if all promises have completed successfully
                if(completedCount === promises.length){
                    resolve(result);
                }
            })
            .catch(error => {
                // step 9 - fail-fast behavior - reject immediately on first error
                if(!hasRejected){
                    hasRejected = true;
                    reject(error);
                }
            });
        });
    });
}

// resolved promises example
const test1 = customPromiseAll([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]);

test1
  .then(results => console.log('✅ Success:', results))
  .catch(error => console.log('❌ Error:', error));

// rejected promise example
const test2 = customPromiseAll([
  Promise.resolve(1),
  Promise.reject('Error occurred'),
  Promise.resolve(3)
]);

test2
  .then(results => console.log('✅ Success:', results))
  .catch(error => console.log('❌ Error:', error))

const delayed = (value, delay) => new Promise(resolve => 
  setTimeout(() => resolve(value), delay)
);

const test3 = customPromiseAll([
  delayed('First', 300),   // Takes 300ms
  delayed('Second', 100),  // Takes 100ms  
  delayed('Third', 200)    // Takes 200ms
]);

test3
  .then(results => console.log('✅ Success (order maintained):', results))
  .catch(error => console.log('❌ Error:', error));