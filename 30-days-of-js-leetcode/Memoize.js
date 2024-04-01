
// Problem link - https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Apporach - 1 (using object as Map)

function memoize(fn) {
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

// Approach - 2 (using Map)

function memoize(fn) {
    let cachedMap = new Map();
    return function(...args) {
        let argsAsStr = args.toString();

        if(cachedMap.has(argsAsStr)){
            return cachedMap.get(argsAsStr);
        }
        
        let memoFnVal = fn(...args);
        cachedMap.set(argsAsStr, memoFnVal);
        return memoFnVal;
    }
}