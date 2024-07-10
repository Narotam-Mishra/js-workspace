
// Problem link - https://leetcode.com/problems/calculator-with-method-chaining/?envType=study-plan-v2&envId=30-days-of-javascript

class Calculator {
    private result: number;

    constructor(value: number) {
        this.result = value;
    }
    
    // adds the given value to the result
    add(value: number): Calculator {
        this.result += value;
        return this;
    }
    
    // subtracts the given value from the result
    subtract(value: number): Calculator {
        this.result -= value;
        return this;
    }
    
    // multiplies the result by the given value
    multiply(value: number): Calculator {
        this.result *= value;
        return this;
    }
    
    // divides the result by the given value
    divide(value: number): Calculator {
        if(value === 0){
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }
    
    // raises the result to the power of the given value
    power(value: number): Calculator {
        this.result **= value;
        return this;
    }
    
    // returns the current result
    getResult(): number {
        return this.result;
    }
}

// test code

// Create a new Calculator instance with an initial value
const calc = new Calculator(10);

// Perform a series of operations
calc.add(5)       // Adds 5 to the result (10 + 5 = 15)
    .subtract(3)  // Subtracts 3 from the result (15 - 3 = 12)
    .multiply(4)  // Multiplies the result by 4 (12 * 4 = 48)
    .divide(2)    // Divides the result by 2 (48 / 2 = 24)
    .power(2);    // Raises the result to the power of 2 (24^2 = 576)

// Get the final result
console.log(calc.getResult()); // Output: 576