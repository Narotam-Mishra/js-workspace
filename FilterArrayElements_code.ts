
// Problem link - https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1 

type Fn = (n: number, i: number) => any

function filter3(arr: number[], fn: Fn): number[] {
    let resArr: number[] = [];
    for(let i in arr){
        if(fn(arr[i], Number(i))){
            resArr.push(arr[i]);
        }
    }
    return resArr;
};

// Approach - 2

type Fn1 = (n: number, i: number) => any

function filter4(arr: number[], fn: Fn): number[] {
    let resArr: number[] = [];
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i], i)){
            resArr.push(arr[i]);
        }
    }
    return resArr;
};
