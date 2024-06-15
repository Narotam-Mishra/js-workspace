
// Implement your custom version of the call method which sets the "this" context.

/*

To implement a custom version of the call method in JavaScript, we can define a method on the Function.prototype to mimic the behavior of the built-in call method. The call method in JavaScript allows us to call a function with a specified this value and arguments provided individually.

*/

Function.prototype.customCall = function(context, ...args){
    //step1 - if context is null or undefined, set it to the global object (window in browsers, global in Node.js)
    context = context || globalThis;

    //step2 - create a unique property on the context to avoid property collision
    const fnSymbol = Symbol();

    //step3 - assign the function (this) to the unique property of the context
    context[fnSymbol] = this;

    //step4 - invoke the function with the context and arguments
    const res = context[fnSymbol](...args);

    // step5 - delete the temporary property
    delete context[fnSymbol];

    //step6 - return the result of the function call
    return res;
}

// example usage

function greet(grt, pnc){
    return `${grt} ${this.name}${pnc}`;
}

const person = { name: "Peter" };

// using customCall() 
console.log(greet.customCall(person, "Hello", "!"));  // Output - Hello Peter!
