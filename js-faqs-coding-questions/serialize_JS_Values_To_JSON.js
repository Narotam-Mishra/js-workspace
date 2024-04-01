
// Implement a function that serializes a Javascript value into a JSON string.

function serializeToJSON(value){
    try {
        // Use JSON.stringify to serialize the value to a JSON string
        const jsonString = JSON.stringify(value);
        return jsonString;
    } catch (error) {
        // Handle any errors that occur during serialization
        console.error('Error serializing value to JSON:', error);
        return null;
    }
}

let obj = { name: 'Peter', age: 24, isAdmin: true};
const jsonString = serializeToJSON(obj);
console.log(jsonString);