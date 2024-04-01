
// Problem link - https://leetcode.com/problems/array-wrapper/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach - 1

let ArrayWrapper = function(nums) {
    this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((acc,curNum) => 
        acc+curNum,0
    )
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return `[${String(this.nums)}]`
}
