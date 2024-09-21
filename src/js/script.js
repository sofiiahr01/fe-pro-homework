'use strict';

const complexArray = [
    [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
    [5, [6, [7, [8, 9]]]],
    [[10, 11], 12, 13]
];

console.log(complexArray)

const flat = function(arr, result = []) {
    if (arguments.length > 1) {
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    }
    for(const item of arr) {
        if(Array.isArray(item)) flat(item, result);
        else result.push(item);
    }

    return result;
}

try {
    console.log(
        flat(complexArray)
    );
} catch (error){console.error(error.message);}