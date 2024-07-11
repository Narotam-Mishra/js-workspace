
// Problem link - https://leetcode.com/problems/join-two-arrays-by-id/?envType=study-plan-v2&envId=30-days-of-javascript

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    let resObj: { [key: number]: ArrayType } = {};
    
    // iterate first array arr1 items
    for(let k1 of arr1){
        resObj[k1.id] = k1;
    }

    // iterate second array arr2 items
    for(let k2 of arr2){
        // check for unique id
        if(resObj[k2.id]){
            // if id is duplicate override arr1 items with arr2
            resObj[k2.id] = { ...resObj[k2.id], ...k2 };
        }else{
            // if the id is unique store its value as it is
            resObj[k2.id] = k2;
        }
    }
    // fetch values only 
    return Object.values(resObj);
}

// Runner code
const arr1: ArrayType[] = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Jim", age: 35 }
];

const arr2: ArrayType[] = [
    { id: 2, name: "Jane Doe", age: 26 },
    { id: 3, occupation: "Engineer" },
    { id: 4, name: "Jake", age: 28 }
];

const result = join(arr1, arr2);
console.log(result);