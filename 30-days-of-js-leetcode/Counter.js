// Problem link - https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach-1

let createCounter = function(n) {
    
    return function() {
        return n++;
    };
};


 const counter = createCounter(10)
 counter() // 10
 counter() // 11
 counter() // 12
 

// Approach-2

let createCounter1 = function(n) {
    let count = n;
    return function() {
        return count++;
    };
};


const counter1 = createCounter1(10)
counter1() // 10
counter1() // 11
counter1() // 12

// Approach-3 using ES6 class

class Counter{
    constructor(n){
        this.n = n;
    }

    increment(){
        return this.n++;
    }
}

const counter2 = new Counter(10);
counter2.increment(); //11
counter2.increment(); //12
counter2.increment(); //13

