
// Problem link - https://leetcode.com/problems/compact-object/description/?envType=study-plan-v2&envId=30-days-of-javascript

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
    if(typeof obj === 'object' && obj !== null){
        if(Array.isArray(obj)){
            let temp1: JSONValue[] = [];
            for(let i=0; i<obj.length; i++){
                if(Boolean(obj[i])){
                    temp1.push(compactObject(obj[i] as Obj) as JSONValue);
                }
            }
            return temp1;
        }else{
            let temp: { [key: string]: JSONValue } = {};
            for(let i in obj){
                if(Boolean(obj[i])){
                    temp[i] = compactObject(obj[i] as Obj) as JSONValue;
                }
            }
            return temp;
        }
    }
    return obj;
};


// Runner code
const inputObject: Obj = {
    a: 'Hello',
    b: null,
    c: false,
    d: 0,
    e: '',
    f: {
        g: 'World',
        i: true,
        j: [],
        k: [null, 'foo', false, 'bar', 0],
    },
    l: [false, 'baz', null, 'qux', 1, ''],
    m: true
};

console.log('Original Object:', JSON.stringify(inputObject, null, 2));

const compactedObject = compactObject(inputObject);

console.log('Compacted Object:', JSON.stringify(compactedObject, null, 2));