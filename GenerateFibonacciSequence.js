
// Problem link - https://leetcode.com/problems/generate-fibonacci-sequence/description/

// using generator function

let fibGenerator = function*() {
    let a = 0, b = 1;

    while(true){
        yield a;
        [a,b] = [b, a+b];
    }
};
