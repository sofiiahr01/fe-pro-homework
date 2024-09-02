'use strict';

function exponentiation(num1, num2){
    const result = Math.pow(num1, num2)
    alert(`${num1} в ступені ${num2} дорівнює ${result}`)
}

function multiplay(num1, num2){
    const multiplication = num1 * num2
    alert(`${num1} помножене на ${num2} дорівнює ${multiplication}`)
}

function division(num1, num2){
    const divide = num1 / num2
    alert(`${num1} поділене на ${num2} дорівнює ${divide}`)
}

function modulo(num1, num2){
    const mod = num1 % num2
    alert(`Залишок від поділу ${num1} на ${num2} дорівнює ${mod}`)
}

function mainFunction(callback1, callback2, callback3,callback4){
    const num1 = +prompt('Введіть перше число:')
    const num2 = +prompt('Введіть друге число:')
    callback1(num1, num2)
    callback2(num1, num2)
    callback3(num1, num2)
    callback4(num1, num2)
}
mainFunction(exponentiation, multiplay, division, modulo)

