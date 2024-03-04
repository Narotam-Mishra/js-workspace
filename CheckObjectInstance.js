
// Problem link - https://leetcode.com/problems/check-if-object-instance-of-class/

// Approach - 1

let checkIfInstanceOf = function(obj, classFunction) {
    if(obj === null || obj === undefined || typeof classFunction !== 'function'){
        return false;
    }

    let curPrototype = Object.getPrototypeOf(obj);
    while(curPrototype !== null){
        if(curPrototype === classFunction.prototype){
            return true;
        }
        curPrototype = Object.getPrototypeOf(curPrototype);
    }
    return false;
};

// Approach - 2

function isInstance(value, Class) {
    // Handle undefined values and classes
    if (value === undefined || Class === undefined) {
      return false;
    }
  
    // Check for direct instances using instanceof
    if (value instanceof Class) {
      return true;
    }
  
    // Iterate through the prototype chain to check for inherited methods
    let proto = Object.getPrototypeOf(value);
    while (proto !== null) {
      if (proto === Class.prototype) {
        return true;
      }
      proto = Object.getPrototypeOf(proto);
    }
  
    // If no match found, return false
    return false;
  }
