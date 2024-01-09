
// Problem link - https://leetcode.com/problems/json-deep-equal/

let areDeeplyEqual = function (o1,o2){
    
    // checking edge cases
    if(o1 === null || o1 === null){
        return o1 === o2;
    }
    // primitives
    if(typeof o1 !== typeof o2){
        return false;
    }

    // Array
    if(Array.isArray(o1) || Array.isArray(o2)){
        if(String(o1) !== String(o2)){
            return false;
        }
        for(let i=0; i<o1.length; i++){
            if(!areDeeplyEqual(o1[i], o2[i])){
                return false;
            }
        }
    }else{
        // for Objects
        if(Object.keys(o1).length !== Object.keys(o2).length){
            return false;
        }
        for(let key in o1){
            if(!areDeeplyEqual(o1[key], o2[key])){
                return false;
            }
        }
    }
    return true;
}