
// Problem link - https://leetcode.com/problems/interval-cancellation/description/

// Approach - 1 (simple approach with setInterval() and clearTimeout() methods)

let cancellable = function(fn, args, t) {
    // as fn is calledd immediately so we call fn with 'args'
    fn(...args);
    
    //then fn() is called at every interval of time 't' seconds
    let timerId = setInterval(() => {
        fn(...args);
    },t) 

    // then return cancelFn function
    return cancelFn = () => {
        clearTimeout(timerId);
    }
};

// Approach - 2 (using Recursion using isCancelled flag)

let cancellable1 = function(fn, args, t) {
    let isCancelled = false;
    fn(...args);

    let startInterval = () => {
        setTimeout(() => {
            if(isCancelled) return;
            fn(...args)
            startInterval();
        },t)
    }

    startInterval();
    const cancelInterval = () => {
        isCancelled = true;
    }
    return cancelInterval;
};

// Approach - 3 (using Recursion with timerId)

let cancellable2 = function(fn, args, t) {
    let timerId = null;
    fn(...args);

    let startInterval = () => {
        timerId = setTimeout(() => {
            fn(...args)
            startInterval();
        },t)
    }

    startInterval();
    const cancelInterval = () => {
        if(timerId !== null){
            clearTimeout(timerId);
        }
    }
    return cancelInterval;
};