'use strict';

let message = ''

for (let i = 10; i <= 20; i++) {
    if (i < 20) {
        message += i + ', ';
    } else {
        message += i;
    }
}

alert(message)

let squareMessage = '';

for (let i = 10; i <= 20; i++) {
    let square = i ** 2;
    if (i < 20) {
        squareMessage += square + ', ';
    } else {
        squareMessage += square;
    }
}

alert(squareMessage)


let multiplicationSeven = '';

for (let i = 1; i <= 10; i++) {
    let multiplication = `7 x ${i} = ${7 * i}`;
    multiplicationSeven += multiplication + '  ';
}

alert(multiplicationSeven)

let sum = 0;
for (let i = 1; i <= 15; i++){
    sum += i
}

alert(sum)

let multipling = 1;
for (let i = 15; i <= 35; i++){
    multipling *= i
}

alert(multipling)


let totalSum = 0;
let count = 500;

for (let i = 1; i <= count; i++) {
    totalSum += i;
}

let arithmeticMean = totalSum / count;

alert(arithmeticMean)


let evenSum = 0;

for (let i = 30; i <= 80; i++){
    if (i % 2 === 0) {
        evenSum += i
    }
}

alert(evenSum)

let multipThree = '';

for (let i = 100; i <= 200; i++){
    if (i % 3 === 0) {
        multipThree += i + ' '
    }
}

alert(multipThree)

let naturalNumber = +prompt('Введіть натуральне число:');

let primeFactor = '';
let evenFactor = 0;
let evenFactorSum = 0

for (let i = 1; i <= naturalNumber; i++) {
    if (naturalNumber % i === 0) {
        primeFactor += i + ' ';
        if (i % 2 === 0) {
            evenFactor++
            evenFactorSum += i
        }
    }

}

alert(primeFactor);
alert(evenFactor);
alert(evenFactorSum)

for (let i=1; i<=10; i++) {
    let j = 1
    while (j<=10) {
        document.write(i + ' * ' + j + ' = ' + i*j + '<br>');
        j++;
    }
}




