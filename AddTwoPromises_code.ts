
// Problem link - https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript

type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    let val1 = await promise1;
    let val2 = await promise2;
    return val1 + val2;
};
