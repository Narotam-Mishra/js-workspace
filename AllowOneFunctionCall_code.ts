
// Problem link - https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
    let fnHasBeenCalled = false;
    return function (...args) {
        if(!fnHasBeenCalled){
            fnHasBeenCalled = true;
            return fn.apply(this, args);
        }
    };
}