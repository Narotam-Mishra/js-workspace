
// Implement a custom polyfill version of Object.assign() method.

let customObjectAssign = function(target, ...sources){
    // check if the target is an object otherwise throw an error
    if(target == null){
        throw new TypeError('Cannot convert undefined or null to object');
    }

    // convert target to an object
    let toObj = Object(target);

    // iterate over the source objects
    for(let i=0; i<sources.length; i++){
        let nextSrcObj = sources[i];

        // skip over if the source is null or undefined
        if(nextSrcObj !== null){
            // use a for...in loop to iterate over the own properties of the object
            for(let key in nextSrcObj){
                // only copy properties that are directly on the source object
                if(Object.prototype.hasOwnProperty.call(nextSrcObj, key)){
                    toObj[key] = nextSrcObj[key];
                }
            }
        }
    }

    // return the modified target object
    return toObj;
}

const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

const res = customObjectAssign(target, source1, source2);
console.log(res);
