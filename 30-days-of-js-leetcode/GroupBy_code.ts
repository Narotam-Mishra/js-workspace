
// Problem link - https://leetcode.com/problems/group-by/?envType=study-plan-v2&envId=30-days-of-javascript

interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    const res = {};

    for(const obj of this){
        const key = fn(obj);
        if(!res[key]){
            res[key] = [];
        }
        res[key].push(obj);
    }
    return res;
}