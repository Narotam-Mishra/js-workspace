
// Problem link - https://leetcode.com/problems/join-two-arrays-by-id/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1 (for of loop)

let join = function(arr1, arr2) {
    let resObj = {};
    
    // iterate first array arr1 items
    for(let k1 of arr1) {
        resObj[k1.id] = k1
    }
    
    // iterate second array arr2 items
    for(let k2 of arr2){
        // check for unique id
        if(resObj[k2.id]){
            // if id is duplicate overide arr1 items with arr2
            resObj[k2.id] = {...resObj[k2.id], ...k2};
        }else{
            // if the id is unique store its value as it is
            resObj[k2.id] = k2;
        }
    }

    // fetch values only 
    return Object.values(resObj);
};

// Approach - 2 (using for and for in loop)

var join1 = function(arr1, arr2) {
    let res = {};
    
    // iterate first array
    for(let i=0; i<arr1.length; i++){
        res[arr1[i].id] = arr1[i];
    }

    // then iterate second array
    for(let i=0; i<arr2.length; i++){
        
        // if id is unique
        if(res[arr2[i].id]){
            for(let k in arr2[i]){
                res[arr2[i].id][k] = arr2[i][k];
            }
        }else{
            res[arr2[i].id] = arr2[i];
        }
    }
    return Object.values(res);

};