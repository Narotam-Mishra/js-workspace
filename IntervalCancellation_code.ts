
// Problem link - https://leetcode.com/problems/interval-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
    // as fn is called immediately so we can call fn with args
    fn(...args);
    
    //then we will call fn() with args at interval of t 
    const timerId = setInterval(() => {
        fn(...args);
    }, t)
    
    // then return the cancelFn function
    const cancelFn = () => {
        clearInterval(timerId);
    }

    return cancelFn;
};