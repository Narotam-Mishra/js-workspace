
// Implement your own Lodash _.get() method which gets value from the path.

/**
 * 
 * Lodash's _.get() method, which retrieves the value at a given path of an object. If the resolved value is undefined, the default value is returned instead.
 *
 */

function get(obj, path, defaultVal){
    // convert string path into an array of keys
    if(typeof path === 'string'){
        path = path.replace(/\[(\w+)\]/g, '.$1').split('.');
    }

    // traverse the object along the path
    let result = obj;
    for(let key of path){
        // if the key is not in the object, return the default value
        if(result === undefined || result === null || !result.hasOwnProperty(key)){
            return defaultVal;
        }
        result = result[key];
    }

    // if the final result is undefined, return the default value
    return result === undefined ? defaultVal : result;
}

// using get()

const obj = { a: [{ b: { c: 3 } }] };

console.log(get(obj, 'a[0].b.c')); // 3
console.log(get(obj, ['a', 0, 'b', 'c'])); // 3
console.log(get(obj, 'a.b.c', 'default')); // default
console.log(get(obj, 'a[0].b.c.d', 'default')); // default
console.log(get(obj, 'a[1].b.c', 'default')); // default
