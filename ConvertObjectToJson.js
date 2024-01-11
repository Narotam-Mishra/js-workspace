
// NeetcodeIO

// Problem link - https://leetcode.com/problems/convert-object-to-json-string/description/

// Approach - 1

let jsonStringify = function(obj){
    // edge case
    if(obj === null || obj === undefined){
        return String(obj);
    }

    // for Array []
    if(Array.isArray(obj)){
        const values = obj.map((ob) => jsonStringify(ob));
        return `[${values.join(",")}]`;
    }

    // for Object {}
    if(typeof obj === 'object'){
        // extract all keys
        const keys = Object.keys(obj);
        // now stringify all key-value pairs
        const keyValPairs = keys.map((key) => `"${key}" : ${jsonStringify(obj[key])}`);
        return `{${keyValPairs.join(",")}}`;
    }

    // for Strings ""
    if(typeof obj === 'string'){
        return `"${String(obj)}"`;
    }

    // for number and boolean
    return String(obj);
}
