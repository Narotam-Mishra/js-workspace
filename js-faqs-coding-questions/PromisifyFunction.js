
// Implement a promisify function that allows the original function to override the return value.

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

