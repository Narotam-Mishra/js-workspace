
// Approach-1
const createHelloWorld1 = function() {
    
    return function(...args) {
        return "Hello World";
    }
};

const f1 = createHelloWorld1();
f1(); // "Hello World"


// Approach-2 (Arrow function)

const createHelloWorld2 = function() {
    return () => "Hello World";
};

const f2 = createHelloWorld2();
console.log(f2());

// Approach-3 

const createHelloWorld3 = function() {
    return (...args) => "Hello World";
};

const f3 = createHelloWorld3();
console.log(f3());