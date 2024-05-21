
// Problem link - https://leetcode.com/problems/chunk-array/?envType=study-plan-v2&envId=30-days-of-javascript

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const res: Obj[][] = [];
    let subArr: Obj[] = [];

    for(let i=0; i<arr.length; i++){
        subArr.push(arr[i]);
        if(subArr.length === size){
            res.push(subArr);
            subArr = [];
        }
    }

    if(subArr.length){
        res.push(subArr);
    }

    return res;
};

const exampleArr: Obj[] = [
    { key1: "value1" },
    { key2: "value2" },
    { key3: "value3" },
    { key4: "value4" },
    { key5: "value5" }
];

const chunkedArr = chunk(exampleArr, 3);
console.log(chunkedArr);