'use strict';

let halfStep = ''
for (let i = 20; i <= 30; i += 0.5) {
    halfStep += i + ' '
}
alert(halfStep)

const oneDollar = 27
let result = ''

for (let i = 10; i <= 100; i += 10) {
    let uah = i * oneDollar;
    result += `${i} доларів = ${uah} гривень` + '; '
}
alert(result)

const numberN = +prompt('Введіть число:')
let resultNumbers = ''

for (let i = 1; i <= 100; i++) {
    if (i * i <= numberN) {
        resultNumbers += i + ' '
    }
}

alert(resultNumbers)

const integer = +prompt('Введіть число:')
let isPrime = true;

if (integer <= 1) {
    isPrime = false;
} else if (integer === 2) {
    isPrime = true;
} else {
    for (let i = 2; i <= Math.sqrt(integer); i++) {
        if (integer % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    alert(`${integer} - просте число.`);
} else {
    alert(`${integer} - не просте число.`);
}

const num = +prompt('Введіть число:')
let cube = false;
let startDegree = 1;

while (startDegree <= num) {
    if (startDegree === num) {
        cube = true;
        break;
    }
    startDegree *= 3;
}

if (cube) {
    alert(`${num} можна одержати шляхом зведення числа 3 у деякий ступінь.`);
} else {
    alert(`${num} не можна одержати шляхом зведення числа 3 у деякий ступінь.`);
}



