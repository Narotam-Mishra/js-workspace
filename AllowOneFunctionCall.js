
// Problem link - https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1

let once = function(fn) {
    let isFunctionCalled = false;
	return function(...args){
        if(isFunctionCalled){
            return undefined;
        }
        isFunctionCalled = true;
        return fn(...args);
    }
};


// Approach - 2

let once1 = function(fn) {
    let hasbeenCalled = false;
	return function(...args){
        if(!hasbeenCalled){
            hasbeenCalled = true;
            return fn.apply(this, args);
        }
    }
};
