
// Problem link - https://leetcode.com/problems/chunk-array/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1 (using 2 Arrays)

let chunk = function(arr, size) {
    let res = [];
    let subArr = [];

    for(let i=0; i<arr.length; i++){
        subArr.push(arr[i]);
        if(subArr.length === size){
            res.push(subArr);
            subArr = [];
        }
    }
    if(subArr.length){
        res.push(subArr);
    }
    return res;
};

// Approach - 2 (using 1 Array)

let chunk1 = function(arr, size) {
    let res = [];
    for(let i=0; i<arr.length; i+=size){
        res.push(arr.slice(i, i+size));
    }
    return res;
};

