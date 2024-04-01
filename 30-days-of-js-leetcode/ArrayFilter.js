
// Problem link - https://leetcode.com/problems/filter-elements-from-array/

// Approach - 1

let filter = function(arr, fn) {
    let res = [];
    for (let i in arr){
        if(fn(arr[i], Number(i))){
            res.push(arr[i]);
        }
    }
    return res;
};

// Approach - 2

let filter1 = function(arr, fn) {
    let res = [];
    for (let i=0; i<arr.length; i++){
        if(fn(arr[i], i)){
            res.push(arr[i]);
        }
    }
    return res;
};


// Approach - 3 (using filter method)

let filter2 = function(arr, fn) {
    return arr.filter(fn);
};