// function hasProperty(jsonString, propertyName) {
//     let hasProperty = false; // boolean

//     // edge case: empty string
//     if (jsonString == "") {
//         console.log(hasProperty);
//         return hasProperty;
//     }

//     // 1. Use json.parse() to convert jsonString to a JS object
//     let parsedJsonString = JSON.parse(jsonString);

//     // 2. Check if propertyName exists in the JS object
//     if (Object.keys(parsedJsonString).includes(propertyName)) {
//         // 3. If it exists, return true
//         hasProperty = true;
//     }

//         // 4. Otherwise, return false
//     console.log(hasProperty);
//     return hasProperty;
// }

// let jsonString = '';
// hasProperty(jsonString, 'name');


function valuesForProperty(values, propertyName) {
    let output = [];
    
    for (let obj of values) {
        if (!(propertyName in obj)) {
            output.push(undefined);
        } else {
            output.push(obj[propertyName]);
        }
    }
    
    return output;
}

let val = [{age: 10}, {age: 12}]
let pn = "age"

console.log(valuesForProperty(val, pn));