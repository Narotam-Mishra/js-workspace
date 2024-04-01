
// Problem link - https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1 (using single Promise)

let addTwoPromises = async function(promise1, promise2) {
    let val1 = await promise1;
    let val2 = await promise2;
    return val1+val2;
};

// Approach - 2 (using Promise.all() method)

let addTwoPromises1 = async function(promise1, promise2) {
    let [val1, val2] = await Promise.all([promise1,promise1]);
    return val1+val2;
};


// Approach - 3 (one liner --> using Promise.all() method with arrow function)

let addTwoPromises2 = async function(promise1, promise2) {
    return await Promise.all([promise1,promise2]).then(([val1,val2]) => val1+val2);
};