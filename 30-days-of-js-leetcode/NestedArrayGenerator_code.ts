
// Problem link - https://leetcode.com/problems/nested-array-generator/

type MultidimensionalArray = (MultidimensionalArray | number)[]

function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
    // Base case : Yield the integer value directly
    if(!Array.isArray(arr)){
        yield arr;
        return;
    }

    // Recursive case: - Iterate on multi dimentional array
    // and recurively call inorderTraversal() method
    for(let nums of arr){
        yield* inorderTraversal(nums as MultidimensionalArray);
    }
};
