// Problem link - https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach-1 (without using map)
let map = function(arr, fn) {
    let resArr = [];
    for (let i in arr){
        resArr.push(fn(arr[i], Number(i)));
    }
    return resArr;
};

// Approach - 2 (using inbuit map method)

let map1 = function(arr, fn) {
    return arr.map(fn);
};

// Approach-3

let map2 = function(arr, fn) {
    for(let i=0; i<arr.length; i++){
        arr[i] = fn(arr[i], i);
    }
    return arr;
};

