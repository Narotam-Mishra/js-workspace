
// Problem link - https://leetcode.com/problems/array-wrapper/?envType=study-plan-v2&envId=30-days-of-javascript

class ArrayWrapper {
    private nums: number[];

    constructor(nums: number[]) {
        this.nums = nums;
    }
    
    valueOf(): number {
        return this.nums.reduce((acc, curNum) => acc + curNum, 0);
    }
    
    toString(): string {
        return `[${String(this.nums)}]`
    }
};

const array = new ArrayWrapper([1, 2, 3, 4]);

// Using valueOf method to get the sum of the array elements
console.log(array.valueOf()); // Output: 10

// Using toString method to get the string representation of the array
console.log(array.toString()); // Output: [1,2,3,4]