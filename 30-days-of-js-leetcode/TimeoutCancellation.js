
// Problem link - https://leetcode.com/problems/timeout-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1 using closures

let cancellable = function(fn, args, t) {
    const tId = setTimeout(() => {
        fn(...args)
    },t)
    const cancelFn = function() {
        clearTimeout(tId);
    }
    return cancelFn;
};

// Approach - 2 (using closures)

let cancellable1 = function(fn, args, t) {
    const timeoutId = setTimeout(function() {
      fn.apply(null, args);
    }, t);
  
    const cancelFn = function() {
      clearTimeout(timeoutId);
    };
  
    return cancelFn;
  };



// Approach - 3 (using Boolean flag)

let cancellable2 = function(fn, args, t) {
    let isCancelled = false;
    setTimeout(() => {
        if(!isCancelled){
            fn(...args);
        }
    }, t);

    return () => {
        isCancelled = true;
    }
};