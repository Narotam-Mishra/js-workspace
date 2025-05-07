let userDetails3 = {
    name: 'Nick',
    age: 27,
    designation: "Software Engineer",
}

let printDetails = function(state){
    console.log("UserName:", this.name, "from", +state);
}

printDetails.call(userDetails3, "Delhi");