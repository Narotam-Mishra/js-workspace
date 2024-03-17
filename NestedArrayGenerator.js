
// Problem link - https://leetcode.com/problems/nested-array-generator/description/

let inorderTraversal = function*(arr) {
    // Base case : // Yield the integer value directly
    if(!Array.isArray(arr)){
        yield arr;
        return;
    }

    // Recursive case: - Iterate on multi dimentional array
    // and recurively call inorderTraversal() method
    for(let nums of arr){
        yield* inorderTraversal(nums);
    }
};