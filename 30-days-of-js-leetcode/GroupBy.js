// GroupBy key

// Problem link - https://leetcode.com/problems/group-by/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1 

Array.prototype.groupBy = function(fn) {
    const resObj = {};

    for(const obj of this){
        // get key from fn()
        let key = fn(obj);
        // check if the key already exist
        if(!resObj.hasOwnProperty(key)){ 
            resObj[key] = [];
        }
        resObj[key].push(obj);
    }
    return resObj;
};

// Approach - 2 (using reduce() method)

Array.prototype.groupBy = function(fn) {
    // group key into single object
    return this.reduce((grp, obj) => {

        // get key using fn()
        let key = fn(obj);

        // if the key does not exist in grouped object then create new array
        if(!grp[key]){
            grp[key] = [];
        }

        // push current item into the array associate with its key
        grp[key].push(obj)

        // returned grouped object
        return grp;
    }, {})
};

