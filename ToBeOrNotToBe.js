let expect = function(val) {
    
    return{
        toBe: (val1) => {
            if (val !== val1) new Error("Not Equal");
            else return true;
        },
        notToBe: (val2) => {
            if (val === val2) new Error("Equal");
            else return true;
        }
    };
};

expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"