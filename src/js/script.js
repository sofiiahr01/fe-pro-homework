'use strict';

const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

const positive = arr.filter(number => number > 0)
console.log(`Кількість позитивних елементів в масиві - ${positive.length}.`);
const positiveSum = positive.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(`Сума позитивних елементів дорівнює ${positiveSum}.`);

const minNumber = Math.min(...arr)
console.log(`${minNumber} є мінімальним елементом масиву.`)
const indexMinNum = arr.indexOf(minNumber);
console.log(`Порядковий номер мінімального елементу масиву ${indexMinNum}.`)

const maxNumber = Math.max(...arr)
console.log(`${maxNumber} є максимальним елементом масиву.`);
const indexMaxNum = arr.indexOf(maxNumber);
console.log(`Порядковий номер максимального елементу масиву ${indexMaxNum}.`)

const negative = arr.filter(number => number < 0)
console.log(`Кількість негативних елементів в масиві - ${negative.length}.`);

const unevenPositive = arr.filter(num => num > 0 && num % 2 === 1)
console.log(`Кількість позитивних непарних елементів в масиві - ${unevenPositive.length}.`);

const evenPositive = arr.filter(num => num > 0 && num % 2 === 0)
console.log(`Кількість позитивних парних елементів в масиві - ${evenPositive.length}.`);

const positiveEvenSum = evenPositive.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(`Сума парних позитивних елементів дорівнює ${positiveEvenSum}.`);

const positiveUnevenSum = unevenPositive.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(`Сума непарних позитивних елементів дорівнює ${positiveUnevenSum}.`);

const positiveMultipl = positive.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(`Добуток позитивних елементів дорівнює ${positiveMultipl}.`);

const maxNumberArr = arr.map(num => num === maxNumber ? maxNumber : 0);

console.log(`Знайшли найбільший елемент масиву, інші обнулили - [${maxNumberArr}].`);