
// Problem link - https://leetcode.com/problems/array-prototype-last/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1 (using this)

Array.prototype.last = function() {
    if(this.length === 0) return -1;
    return this[this.length - 1];
};

// Approach - 2 (using ternary operator)

Array.prototype.last = function() {
    return this.length ? this[this.length - 1] : -1;
};
