
// Problem link - https://leetcode.com/problems/is-object-empty/?envType=study-plan-v2&envId=30-days-of-javascript

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

// Approach - 1
function isEmpty11(obj: Obj): boolean {
    let size: number = Object.keys(obj).length;
    if(size){
        return false;
    }else{
        return true;
    }
};

// Approach - 2
function isEmpty(obj: Obj): boolean {
    for(const key in obj){
        // if the loop execute atleast once that means object is not empty
        return false;
    }
    return true;
};