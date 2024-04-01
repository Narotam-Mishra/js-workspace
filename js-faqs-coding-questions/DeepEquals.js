
// Implement a function that determines if two values are deep equal.

function isDeepEuals(a, b) {
  // check if both values are objects and not null
  if (typeof a === "object" && a !== null && typeof b === "object" && b !== null) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    // check if both objects have the same number of keys
    if (keysA.length !== keysB.length) {
      return false;
    }

    // Check if all keys in object 'a' are present in object 'b'
    for (const key of keysA) {
      if (!keysB.includes(key)) {
        return false;
      }

      // recursively check the values of each key
      if (!isDeepEuals(a[key], b[key])) {
        return false;
      }
    }
    //Objects are deeply equal
    return true; 
  }else{
    // Compare primitive values directly
    return a === b;
  }
}


const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };

console.log(isDeepEuals(obj1, obj2)); // true - they are deeply equal hence return true
console.log(isDeepEuals(obj1, obj3)); // false - as they are not deeply equal