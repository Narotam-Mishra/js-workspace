
// Implement your own split method in JS 

/**
 * Custom implementation of the split method.
 * This function splits a string into an array of substrings using a specified separator.
 *
 * @param {string} str - The string to be split.
 * @param {string} separator - The character or substring that will be used as the delimiter.
 * @returns {Array} - An array of substrings.
 */

function customSplit(str, separator){
    // intialize an empty array 'res' to hold the split strings
    const res = [];

    // intialize a temporary 'temp' variable to build the current substring
    let temp = '';

    // iterate through each character in the input string
    for(let i=0; i<str.length; i++){
        // check if the current character matches the separator
        if(str[i] === separator){
            // if it matches, push the temporary substring to the result array
            res.push(temp);

            // reset the temporary variable for the next substring
            temp = '';
        }else{
            // if it doesn't match, add the current character to the temporary substring
            temp += str[i];
        }
    }

    // after the loop ends, push any remaining characters in temp to the result array
    res.push(temp);

    // return the array of substrings
    return res;
}


// test above code
const str = "hello-world-this-is-a-test";
const separator = "-";
const splitArr = customSplit(str, separator);

console.log(splitArr);

/*
Output - [ 'hello', 'world', 'this', 'is', 'a', 'test' ]
*/