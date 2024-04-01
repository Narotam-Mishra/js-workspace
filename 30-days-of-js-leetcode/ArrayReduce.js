
// Problem link - https://leetcode.com/problems/array-reduce-transformation/description/

// Approach - 1

let reduce = function(nums, fn, init) {
    if(nums.lenght === 0){
        return init;
    }
    let res = init;
    for(n of nums){
        res = fn(res,n)
    }
    return res;
};

// Approach - 2

let reduce1 = function(nums, fn, init) {
    if(nums.lenght === 0){
        return init;
    }
    let res = init;
    nums.forEach((n) => {
        res = fn(res,n);
    })
    return res;
};

// Approach - 3

let reduce3 = function(nums, fn, init) {
    if(nums.lenght === 0){
        return init;
    }
    return nums.reduce(fn, init);
};