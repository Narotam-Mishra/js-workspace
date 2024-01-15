
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
