
// Problem link - https://leetcode.com/problems/calculator-with-method-chaining/description/?envType=study-plan-v2&envId=30-days-of-javascript

class Calculator1 {
    
    constructor(value) {
       this.result = value; 
    }
    
    add(value){
        this.result += value
        return this;
    }
    
    subtract(value){
        this.result -= value
        return this;
    }
    
    multiply(value) {
        this.result *= value
        return this;
    }
    
    divide(value) {
        if(value === 0){
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value
        return this;
    }
    
    power(value) {
        this.result **= value
        return this;
    }
    
    getResult() {
        return this.result;
    }
}