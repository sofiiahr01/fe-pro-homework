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

for (let i = 0; i <= 10; i++) {
    let multiplication = i * 7;
    if (i < 10) {
        multiplicationSeven += multiplication + ', ';
    } else {
        multiplicationSeven += multiplication;
    }
}

alert(multiplicationSeven)

let sum = +'';
for (let i = 1; i <= 15; i++){
    sum += i
}

alert(sum)

/*let multipling = +'';
for (let i = 15; i <= 35; i++){
    multipling *= i
}

alert(multipling)*/

/*let arithmeticMean = '';
for (let i = 1; i <= 500; i++){
    totalSum += i
    arithmeticMean = totalSum /
}

alert(arithmeticMean)*/

let evenSum = +'';

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

let naturalNumber = +prompt('Введіть натуральне число:')

for (let i = 1; i <= 10; i++){
    if (i % 10){
        naturalNumber += i + ' '
    }
}

alert(naturalNumber)