
/*

Given an object which can have a function as a value at a nested level, create a function that will accept arguments as input and pass it through all the functions in the input object and return the computed value.

*/

function solve(){
    // write the code
    const pipe = (obj) => {
        return (...args) => {
            for(let key in obj){
                let val = obj[key];
                if(typeof val === 'function'){
                    obj[key] = val(...args);
                }else if(typeof val === 'object'){
                    obj[key] = pipe(val)(...args);
                }
            }

            return obj;
        }
    }

    const obj = {
        a: {
            b : (a,b,c) => a + b + c,
            c : (a,b,c) => a + b - c,
            l : {
                m : (a,b,c) => a + b + c,
            },
        },
        d: (a,b,c) => a - b - c,
        e : 1,
        f : true,
        g : 'alpha',
        h : [1,2,3],
    }

    const output = pipe(obj)(1,1,1);
    console.log(output);
}

solve();