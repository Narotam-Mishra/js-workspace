
// Problem link - https://leetcode.com/problems/function-composition/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1
type F = (x: number) => number;

function compose(functions: F[]): F {
    
    return function(x) {
        for(let fn of functions.reverse()){
            x = fn(x);
        }
        return x;
    }
};