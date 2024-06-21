
// Write a custom polyfill for typeof operator which returns the correct typeof for the Javascript value (without using 'typeof' in the code).

/*

Below implementation avoids using the typeof operator and instead relies on Object.prototype.toString.call(value) and other type-specific checks to determine the type of the value.

*/


function customTypeof(value) {
    // handle null specifically
    if(value === null) return 'null';

    //  handle undefined specifically
    if(value === undefined) return 'undefined';

    // handle boolean values
    if(value === true || value === false) return 'boolean';

    // handle numbers (excluding 'NaN' which is a number but needs special handling)
    if(Object.prototype.toString.call(value) === '[object Number]'){
        return isNaN(value) ? 'NaN' : 'number';
    }

    // handle strings
    if(Object.prototype.toString.call(value) === '[object String]'){
        return 'string';
    }

    // handle array
    if(Array.isArray(value)) return 'array';

    // handle functions
    if(Object.prototype.toString.call(value) === '[object Function]'){
        return 'function';
    }

    // handle dates
    if(Object.prototype.toString.call(value) === '[object Date]'){
        return 'date';
    }

    // handle regular expressions
    if(Object.prototype.toString.call(value) === '[object RegExp]'){
        return 'regexp';
    }

    // handle errors
    if(Object.prototype.toString.call(value) === '[object Error]'){
        return 'error';
    }

    // handle symbols
    if(Object.prototype.toString.call(value) === '[object Symbol]'){
        return 'symbol';
    }

    // to handle all other objects apart from above 
    if(Object.prototype.toString.call(value) === '[object Object]'){
        return 'object';
    }

    // default case (in case none from above matched)
    return 'unknown';
}

// test above customTypeof() method

console.log(customTypeof(42)); // 'number'
console.log(customTypeof('hello')); // 'string'
console.log(customTypeof(true)); // 'boolean'
console.log(customTypeof(undefined)); // 'undefined'
console.log(customTypeof(null)); // 'null'
console.log(customTypeof([1, 2, 3])); // 'array'
console.log(customTypeof({a: 1})); // 'object'
console.log(customTypeof(function() {})); // 'function'
console.log(customTypeof(/regex/)); // 'regexp'
console.log(customTypeof(new Date())); // 'date'
console.log(customTypeof(new Error('error'))); // 'error'
console.log(customTypeof(NaN)); // 'NaN'
console.log(customTypeof(Symbol('symbol'))); // 'symbol'