// Problem link - https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/

// Approach - 1 (using Promise)

let promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let len = functions.length, count = 0;
        let ansArr = new Array(len);

        for(let index=0; index<len; index++){
            functions[index]()
            .then((value) => {
                ansArr[index] = value;
                count++;
                if(count == len){
                    resolve(ansArr);
                }
            })
            .catch(err => reject(err))
        }
    })
};

// Approach - 2 (using async await with forEach)

let promiseAll1 = function(functions) {
    return new Promise(async (resolve, reject) => {
        let len = functions.length, count = 0;
        let ansArr = new Array(len);

        functions.forEach(async (fn, index) => {
            try {
                let val = await fn();
                ansArr[index] = val;
                count++;
                if(count === len) resolve(ansArr)
            } catch (error) {
                reject(err);
            }
        })
    })
};