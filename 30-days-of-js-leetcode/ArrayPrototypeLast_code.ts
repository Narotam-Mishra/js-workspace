
// Problem link - https://leetcode.com/problems/array-prototype-last/?envType=study-plan-v2&envId=30-days-of-javascript

interface Array<T> {
    last(): T | -1;
}

Array.prototype.last = function() {
    return this.length ? this[this.length - 1] : -1;
};


const arr = [1, 2, 3];
console.log(arr.last()); // 3
