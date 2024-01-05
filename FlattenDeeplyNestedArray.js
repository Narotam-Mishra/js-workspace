
// Problem link - https://leetcode.com/problems/flatten-deeply-nested-array/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1 (using Recursion)

let flat = function (arr, n, res=[], cd=0) {
    for(let i=0; i<arr.length; i++) {
        // check current depth cd is less than actual depth n
        if(Array.isArray(arr[i]) && cd<n){
            flat(arr[i],n,res,cd+1);
        }else{
            // if current depth, cd is not less than actual dept n 
            // then push the array items into resultant array
            res.push(arr[i]);
        }
    }
    return res;
};

// Approach - 2 (easy solution with recursion)

let flat1 = function (arr, n) {
    const res = [];

    function helperRec(arr, depth){
        for(let val of arr){
            if(typeof val === 'object' && depth < n){
                helperRec(val, depth+1);
            }else{
                res.push(val);
            }
        }
        return res;
    }
    return helperRec(arr,0);
};