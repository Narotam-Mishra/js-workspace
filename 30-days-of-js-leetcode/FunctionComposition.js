
// Problem Solving - https://leetcode.com/problems/function-composition/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1

let compose = function(functions) {
    
	return function(x) {
        for (fn of functions.reverse()){
            x = fn(x);
        }
        return x;
    }
};

// Approach - 2

let compose1 = function(functions) {
    let callback = (acc,cb) => cb(acc);
	return function(x) {
        return functions.reduceRight(callback,x);
    }
};

