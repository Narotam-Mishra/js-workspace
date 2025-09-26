
/*

create a function in JS that accepts a function as input and a count and executes that input function once for a given count of calls. Known as sampling function

*/

function solve(){
    const sampler = (fn,count) => {
        let counter = 0;
        return () => {
            // base condition
            if(++counter != count) return;

            // invoke the function 
            fn()

            // and reset the counter
            counter = 0;
        };
    }

    function message(){
        console.log("hello");
    }

    const sample = sampler(message, 3);
    sample();
    sample();
    sample();
    sample();    // this will be executed
    sample();
    sample();
    sample();
    sample();    // this will be executed
}


solve();