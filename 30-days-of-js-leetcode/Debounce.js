
// Problem link - https://leetcode.com/problems/debounce/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1

let debounce1 = function(fn, t) {
    let timerId;
    return function(...args) {
        // to restrict frequent function calls we will setTimeout()
        // then we will clear the timeout using clearTimeout() method
        clearTimeout(timerId);
        timerId = setTimeout(() => fn(...args),t);
    }
};

// Approach - 2