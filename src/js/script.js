'use strict';

//Task 1
const factorial = function(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(3))

//Task 2
const pow = function(num, degree) {
    if (degree === 1) {
        return num;
    } else {
        return num * pow(num, degree - 1);
    }
}

console.log(pow(4, 2))

//Task 3
const sum = function(a, b) {
    if (b === 0) {
        return a;
    } else {
        return sum(a + 1, b - 1);
    }
}

console.log(sum(9, 4));



