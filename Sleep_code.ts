
// Problem link - https://leetcode.com/problems/sleep/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1
async function sleep(millis: number): Promise<void> {
    return await new Promise((resolve) => setTimeout(resolve, millis))
}


// Approach - 2

async function sleep1(millis: number): Promise<void> {
    function callback(resolve){
        setTimeout(resolve, millis)
    }
    return new Promise(callback);
}