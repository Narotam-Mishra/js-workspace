
// Problem link - https://leetcode.com/problems/array-reduce-transformation/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1

type Fn = (accum: number, curr: number) => number

function reduce2(nums: number[], fn: Fn, init: number): number {
    let res: number;
    
    // check input array length
    if(nums.length === 0){
        return init;
    }
    res = init;
    for(let num of nums){
        res = fn(res, num);
    }
    return res;
};

// Approach - 2

type Fn1 = (accum: number, curr: number) => number

function reduce4(nums: number[], fn: Fn, init: number): number {
    let res: number;

    if(nums.length === 0){
        return init;
    }
    res = init;
    nums.forEach(n => {
        res = fn(res, n);
    })
    return res;
};