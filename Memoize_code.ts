
// Problem link - https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript

type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    let cachedFn = {};
    return function(...args) {
        let objKey = JSON.stringify(args);
        if(objKey in cachedFn){
            return cachedFn[objKey];
        }
        cachedFn[objKey] = fn(...args);
        return cachedFn[objKey];
    }
}
