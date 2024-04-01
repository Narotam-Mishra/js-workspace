
// Problem link - https://leetcode.com/problems/throttle/

// throttle - means rate limiting

let throttle = function(fn,t){
    let isThrottled = false;
    let nextArgs = null;

    return function(...args){
        if(isThrottled){
            // wait
            nextArgs = args;
        }else{
            fn(...args);
            isThrottled = true;
            setTimeout(helperFn, t)
        }

        function helperFn(){
            // scheduled ?
            if(nextArgs){
                fn(...nextArgs);
                isThrottled = true;
                nextArgs = null;
                setTimeout(helperFn, t);
            }else{
                isThrottled = false;
            }
        }
    }
}