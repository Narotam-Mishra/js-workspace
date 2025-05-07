
// call, apply & bind methods in JS

// call method  example

let userDetails1 = {
    name: 'Nick',
    age: 27,
    designation: "Software Engineer",
    printDetails: function(){
        console.log("UserName:", this.name);
    }
}

userDetails1.printDetails();

let userDetails2 = {
    name: 'Peter',
    age: 29,
    designation: "Software Engineer",
    printDetails: function(){
        console.log("UserName:", this.name);
    }
}

// function borrowing using call
userDetails1.printDetails.call(userDetails2);

let userDetails3 = {
    name: 'Nick',
    age: 27,
    designation: "Software Engineer",
}

let printDetails = function(state, country){
    console.log("UserName:", this.name+ " from " +state+ " of "+country);
}

printDetails.call(userDetails3, "Delhi", "India");

let userDetails4 = {
    name: 'Peter',
    age: 29,
    designation: "Software Engineer",
}

// using apply method we can pass arguments in array
printDetails.apply(userDetails4, ["Kolkata", "India"]);


// bind method example

let userDetails5 = {
    name: 'Mike',
    age: 59,
    designation: "Senior Software Engineer",
}

// bind method used to create a new copy of the binded function and return it
let newFun = printDetails.bind(userDetails5, "Jaipur", "Rajasthan");

newFun();