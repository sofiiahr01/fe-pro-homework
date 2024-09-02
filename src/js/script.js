'use strict';

//1
function arithmeticalMean(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
            count++;
        }
    }

    return count === 0 ? 0 : sum / count;
}

const arr = [10, 'hello', 27, true, 49, null, 93];
const average = arithmeticalMean(arr);
console.log(average)


//2
function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            if (y !== 0) {
                return x / y;
            } else {
                return "На нуль ділити не можна.";
            }
        case '%':
            return x % y;
        case '^':
            return Math.pow(x, y);
        default:
            return "Цей знак не є математичною дією.";
    }
}

const x = parseFloat(prompt("Введіть перше число:"));
const znak = prompt("Введіть знак:");
const y = parseFloat(prompt("Введіть друге число:"));

const result = doMath(x, znak, y);
alert(result);

//3
function createArr() {
    let rows = parseInt(prompt("Введіть кількість рядків"));
    let columns = parseInt(prompt("Введіть кількість стовпців"));

    let arr = [];

    for (let i = 0; i < rows; i++) {
        let innerArray = [];
        for (let j = 0; j < columns; j++) {
            let value = prompt(`Введіть значення для елемента [${i}][${j}]: `);
            innerArray.push(value);
        }
        arr.push(innerArray);
    }

    return arr;
}

let userArr = createArr();
console.log(userArr)


//4
function removeChars(str, charsToRemove) {
    let taskResult = '';
    for (let i = 0; i < str.length; i++) {
        if (!charsToRemove.includes(str[i])) {
            taskResult += str[i];
        }
    }
    return taskResult;
}

const taskResult = removeChars("hello world", ['l', 'd']);
console.log(taskResult)

