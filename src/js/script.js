'use strict';

const arrLength = +prompt("Введіть довжину масиву:");

let arr = [];

for (let i = 0; i < arrLength; i++) {
    let element = prompt(`Введіть елемент ${i + 1}:`);
    arr.push(element);
}

alert(arr);

alert(arr.sort(function (a, b) {
    return a - b;
}));

arr.splice(1, 3)
alert(arr);
