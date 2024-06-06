
// Implement a function that deserializes a JSON string into a Javascript value.

function deserializeJSON(jsonStr){
    try {
        return JSON.parse(jsonStr);
    } catch (error) {
        throw new Error("Invalid JSON string");
    }
}

const jsonString = '{"name": "John", "age": 30, "isStudent": false, "courses": ["Math", "Science"]}';

// const jsonString = { name: "Alice" };

try {
    const res = deserializeJSON(jsonString);
    console.log(res);
} catch (error) {
    console.log(error);
}
