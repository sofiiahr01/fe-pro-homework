'use strict';

const sum = () => {
    let totalSum = 0;
    return (numbers) => {
        totalSum += numbers;
        return totalSum;
    };
};

const result = sum();

console.log(result(3))
console.log(result(5))
console.log(result(20))
