
// Problem link - https://leetcode.com/problems/compact-object/

// Approach - 1 (using Recursion)

let compactObject1 = function(obj) {
    if(typeof obj === 'object'){
        if(Array.isArray(obj)){
            let temp1 = []
            for(let i=0; i<obj.length; i++){
                if(Boolean(obj[i])){
                    temp1.push(compactObject(obj[i]));
                }
            }
            return temp1;
        }else{
            let temp = {};
            for(let i in obj){
                if(Boolean(obj[i])){
                    temp[i] = compactObject((obj[i]))
                }
            }
            return temp;
        }
    }
    return obj;
};

// Approach - 2 (Recursion, clean approach)

let compactObject2 = function(obj) {
    if(obj === null) return null;

    // if type of object is an array
    if(Array.isArray(obj)){
        return obj.filter(Boolean).map(compactObject1);
    }

    if(typeof obj !== 'object') return obj;

    // if type of object is simple object
    const compacted = [];
    for(const key in obj){
        let val = compactObject1(obj[key])
        if(val) compacted[key] = val;
    }
    return compacted;
};
