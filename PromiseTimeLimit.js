
// Problem link - https://leetcode.com/problems/promise-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1 (using Promise)
let timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise((resolve, reject) => {
            let timerId = setTimeout(() => reject('Time Limit Exceeded'),t)

            fn(...args)
                .then((res) => resolve(res))
                .catch((err) => reject(err))
                .finally(() => clearTimeout(timerId))
        })
    }
};


// Approach - 2 (using async await)

let timeLimit1 = function(fn, t) {
    
    return async function(...args) {
        return new Promise(async (resolve, reject) => {
            setTimeout(() => reject('Time Limit Exceeded'),t)

            try {
                const res = await fn(...args)
                resolve(res);
            } catch (error) {
                reject(error);
            }
        })
    }
};