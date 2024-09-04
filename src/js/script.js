'use strict';

const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

const positive = arr.filter(number => number > 0)
console.log(`Кількість позитивних елементів в масиві - ${positive.length}.`);
const positiveSum = positive.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(`Сума позитивних елементів дорівнює ${positiveSum}.`);

/*const minNumber = arr.reduce((sum, current) => sum > current ? current : sum);
console.log(minNumber);
const indexMinNum = minNumber.indexOf;
console.log(indexMinNum)

const maxNumber = arr.reduce((sum, current) => sum < current ? current : sum);
console.log(maxNumber);
const indexMaxNum = maxNumber.indexOf;
console.log(indexMaxNum)*/

const negative = arr.filter(number => number < 0)
console.log(`Кількість негативних елементів в масиві - ${negative.length}.`);

const uneven = arr.filter(number => number % 2 === 1 )
console.log(`Кількість позитивних непарних елементів в масиві - ${uneven.length}.`);
