
// Implement a function that performs a deep copy of a value, and also handles circular references. 

/*

#  A circular reference occurs when an object references itself directly or indirectly through another object. For example:
let obj = {};
obj.self = obj; // obj references itself

# In this case, obj has a property self that points back to obj. This kind of structure can create problems with operations like deep copying or serialization (e.g., using JSON.stringify), as it can result in infinite loops or errors.

# To handle circular references while performing a deep copy, we need to keep track of objects we have already copied. We'll use a WeakMap to map original objects to their copies. WeakMap is useful here because it allows garbage collection of entries when there are no other references to the keys (the original objects).

*/

function deepCopy(value, seen = new WeakMap()){
    if(value === null || typeof value !== 'object'){
        // handle non-objects (primitives and functions)
        return value;
    }

    // handle circular references
    if(seen.has(value)){
        return seen.get(value);
    }

    // create a copy based on the type of the original object
    let copy;
    if(Array.isArray(value)){
        // if value is array
        copy = [];
    }else if(value instanceof Date){
        // if value is Date type object
        copy = new Date();
    }else if(value instanceof RegExp){
        // if value is Regular expression type object
        copy = new RegExp(value.source, value.flags);
    }else if(value instanceof Map){
        // if value is Map type object
        copy = new Map();
        value.forEach((val, key) => {
            // recursively copy key value 
            copy.set(deepCopy(key, seen), deepCopy(val, seen));
        });
        return copy;
    }else if(value instanceof Set){
        copy = new Set();
        value.forEach((val) => {
            // recursively add val to set
            copy.add(deepCopy(val, seen));
        });
        return copy;
    }else{
        // if it is instance of object
        copy = Object.create(Object.getPrototypeOf(value));
    }

    // Store the copy in the WeakMap before continuing the deep copy
    seen.set(value, copy);

    // Recursively copy properties
    for(let key in value){
        if(value.hasOwnProperty(key)){
            copy[key] = deepCopy(value[key], seen);
        }
    }

    // return copy
    return copy;
}

// example
let obj = {
    name : "JS_Dev"
};

// creating circular reference
obj.self = obj;

let copy = deepCopy(obj);
console.log(copy);

// check for existence of circular reference
console.log(copy.self === copy); // true, indicating the circular reference is preserved