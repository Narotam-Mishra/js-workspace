
// Problem link - https://leetcode.com/problems/sort-by/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Approach1 - If fn(n1) is less than fn(n2), then the function will return a negative value and n1 will go before n2. If fn(n1) is greater than fn(n2), the function will return a positive value, and n1 will go after n2.

let sortBy = function(arr, fn) {
    return arr.sort((n1,n2) => fn(n1) - fn(n2));
};

//Approach2 -  Comparison-Based Comparator

let sortBy1 = function(arr, fn) {
    function swap(a,b){
        return (fn(a) < fn(b)) ? -1 : 1;
    }

    return arr.sort(swap);
};