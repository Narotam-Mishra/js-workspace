
type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let counter = init;

    return{
        increment: () => {
            ++counter;
            return counter;
        },
    
        decrement: () => {
            --counter;
            return counter;
        },
    
        reset: () => {
            counter = init;
            return counter;
        }
    }
};