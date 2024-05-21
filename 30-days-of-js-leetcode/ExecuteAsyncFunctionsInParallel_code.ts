
// Problem link - https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/?envType=study-plan-v2&envId=30-days-of-javascript

type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    return new Promise(async (resolve, reject) => {
        let len = functions.length, count = 0;
        let ansArr = new Array(len);

        functions.forEach(async (fn, index) => {
            try {
                let val = await fn();
                ansArr[index] = val;
                count++;
                if(count === len) resolve(ansArr);
            } catch (error) {
                reject(error);
            }
        });
    });
};


// example to run above code

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const demoFunctions: Fn<number>[] = [
    () => delay(1000).then(() => 1), // resolves to 1 after 1 second
    () => delay(2000).then(() => 2), // resolves to 2 after 2 seconds
    () => delay(500).then(() => 3)   // resolves to 3 after 0.5 seconds
];

promiseAll(demoFunctions)
    .then(results => {
        console.log(results); // Output: [1, 2, 3] after approximately 2 seconds
    })
    .catch(error => {
        console.error('One of the promises rejected:', error);
    });