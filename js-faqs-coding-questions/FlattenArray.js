
// Implement a function that recursively flattens an array into a single level deep.

function flattenArray(arr){
    // intialize an empty array to store flattended elements
    let flattenedArr = [];

    // iterate through each array's element
    arr.forEach(function(ele){
        // If the element is an array, recursively call flattenArray on it
        if(Array.isArray(ele)){
            // Concatenate the flattened result with the current flattenedArray
            flattenedArr = flattenedArr.concat(flattenArray(ele));
        }else{
            // If the element is not an array, push it to the flattenedArray
            flattenedArr.push(ele);
        }
    });

    // return the flattened array
    return flattenedArr;
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattened = flattenArray(nestedArray);
console.log(flattened);