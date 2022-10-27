// function hasProperty(jsonString, propertyName) {
//     let hasProperty = false;
    
//     let convertedJSON = JSON.parse(jsonString);
    
//     if (Object.keys(convertedJSON).includes(propertyName)) {
//         hasProperty = true;
//     }
    
//     return hasProperty;
// }

// const jsonString = '{"name":"Jane Doe","favorite-game":"Stardew Valley","subscriber":false}'

// console.log(hasProperty(jsonString, "name"));

function filter_less_than_or_equal_to(values, threshold) {
    return values.filter(value => value <= threshold);
}

let result = filter_less_than_or_equal_to([5, 30, 40], 10);

console.log(result);