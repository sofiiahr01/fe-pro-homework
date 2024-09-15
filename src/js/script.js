'use strict';

const variablesExample = () => {
    console.log(firstVariable)
    console.log(secondVariable)
    console.log(thirdVariable)
    for (let i = 0; i < 3; i++){
        var firstVariable = i;
        let secondVariable = i;
        const thirdVariable = i;
        console.log(firstVariable)
        console.log(secondVariable)
        console.log(thirdVariable)
    }
    console.log(firstVariable)
    console.log(secondVariable)
    console.log(thirdVariable)
}
variablesExample()

/* Після хостингу var підіймається на початок. При виведенні змінної var в консоль до
її ініціалізації отримаємо undefined. Змінні let та const також підіймаються вгору, але
потрапляють в Temporal Dead Zone, тобто поки код не дійде до оголошення цих змінніх, вони
будуть недоступні.
В консолі побачимо виконання кожної ітерації, а також значення змінної var, яку ми виводили
після завершення циклу. Вивелось значення тільки цієї змінної, бо вона має глобальну область
видимості та може існувати як в циклі, так і поза нього. А змінні let і const доступні
тільки всередині циклу, тому що мають блочну область видимості.
*/

