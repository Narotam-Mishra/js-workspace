
// Problem link - https://leetcode.com/problems/promise-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript

type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    
    return async function(...args) {
        return new Promise(async (resolve, reject) => {
            setTimeout(() => reject('Time Limit Exceeded'), t)

            try {
                const res = await fn(...args);
                resolve(res);
            } catch (error) {
                reject(error);
            }
        })
    }
};