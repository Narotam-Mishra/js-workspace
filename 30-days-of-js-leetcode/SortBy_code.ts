
// Problem link - https://leetcode.com/problems/sort-by/?envType=study-plan-v2&envId=30-days-of-javascript

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
    // Use the sort method with a custom comparator based on the fn output
    return arr.sort((a,b) => fn(a) - fn(b));
};

const arr: JSONValue[] = [1, 'two', { key: 'value' }, [1, 2, 3], true, null];
const fn: Fn = (value: JSONValue) => {
    if (typeof value === 'number') return value;
    if (typeof value === 'string') return value.length;
    if (Array.isArray(value)) return value.length;
    if (typeof value === 'boolean') return value ? 1 : 0;
    if (value === null) return -1;
    if (typeof value === 'object') return Object.keys(value).length;
    return 0;
};

const sortedArr = sortBy(arr, fn);
console.log(sortedArr);