
// Problem link - https://leetcode.com/problems/is-object-empty/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1 (using Object.keys() method)

let isEmpty1 = function(obj) {
    let size = Object.keys(obj).length;
    if(size){
        return false;
    }else{
        return true;
    }
};

// Approach - 2 (for in loop in O(1) complexity)

let isEmpty2 = function(obj) {
    for(const key in obj) return false;
    return true;
}

// Approach - 3 (using JSON.stringify() method)

let isEmpty3 = function(obj) {
    if(JSON.stringify(obj).length <=2) return true;
    else return false;
}