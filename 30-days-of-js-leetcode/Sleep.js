
// Problem link - https://leetcode.com/problems/sleep/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1 (using Promise's resolve)

async function sleep(millis) {
    function callback(resolve){
        setTimeout(resolve,millis);
    }
    return new Promise(callback);
}


// Approach - 2 (using async await)

async function sleep(millis) {
    await new Promise((resolve,reject) => {
        setTimeout(resolve,millis)
    })
}

// Approach - 3 (one liner)

async function sleep(millis) {
    return await new Promise(resolve => setTimeout(resolve,millis));
}