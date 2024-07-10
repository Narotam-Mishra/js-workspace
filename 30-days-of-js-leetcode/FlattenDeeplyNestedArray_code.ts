
// Problem link - https://leetcode.com/problems/flatten-deeply-nested-array/?envType=study-plan-v2&envId=30-days-of-javascript

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

let flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    const flatten = (arr: MultiDimensionalArray, depth: number, res: number[] = [], currentDepth: number = 0): number[] => {
        if(depth === 0){
            return res.concat(arr as number[]);
        }else{
            for(let i=0; i<arr.length; i++){
                if(Array.isArray(arr[i]) && currentDepth < depth){
                    flatten(arr[i] as MultiDimensionalArray, depth, res, currentDepth+1);
                }else{
                    res.push(arr[i] as number);
                }
            }
        }
        return res;
    };
    return flatten(arr, n);
};

// test code

const nestedArray: MultiDimensionalArray = [1, [2, [3, [4, 5]]]];
console.log(flat(nestedArray, 2)); // Output: [1, 2, 3, [4, 5]]