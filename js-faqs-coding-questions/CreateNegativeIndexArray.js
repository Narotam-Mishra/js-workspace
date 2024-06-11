
// Implement negative indexing in Array using Proxies.

/*

To implement negative indexing in an Array using Proxies, we can intercept the get and set operations on the array. This allows you to handle negative indices by converting them to their positive counterparts.

# Steps to follow:-

step1 :- Create a handler object that defines get and set traps.

step2 :- Inside these traps, convert negative indices to their positive equivalents.

step3 :- Use the Proxy constructor to create a new proxy for the array.

*/

const createNegativeIndexArray = (arr) => {
    return new Proxy(arr, {
        get(target, prop){
            // convert the property to a number if it is a string
            let index = Number(prop);

            // if the property is not a valid number, return it directly
            if(isNaN(index)){
                return target[prop];
            }

            // handle negative indices
            if(index < 0){
                index = target.length + index;
            }
            return target[index];
        },
        set(target, prop, value){
            // convert the property to a number if it is a string
            let index = Number(prop);

            // if the property is not a valid number, set it directly
            if(isNaN(index)){
                target[prop] = value;
                return true;
            }

            // handle negative indices
            if(index < 0){
                index = target.length + index;
            }
            target[index] = value;
            return true;
        }
    });
};

let arr = createNegativeIndexArray([1, 2, 3, 4, 5]);

console.log(arr[-1]); // output - 5
console.log(arr[-2]); // output - 4

arr[-1] = 10;
console.log(arr[4]); // output - 10