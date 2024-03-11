
// Problem link - https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1

function map3(arr: number[], fn: (n: number, i: number) => number): number[] {
    let resArr: number[] = [];
    for(let i in arr){
        resArr.push(fn(arr[i], Number(i)));
    }
    return resArr;
};

// Approach - 2

function map4(arr: number[], fn: (n: number, i: number) => number): number[] {
    for(let i=0; i<arr.length; i++){
        arr[i] = fn(arr[i], i);
    }
    return arr;
};