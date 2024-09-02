'use strict';

function exponentiation(num, power){
    const result = Math.pow(num, power)
    alert(result)
}

function mainFunction(callback){
    let num = +prompt('Введіть число:')
    let power = +prompt('Введіть ступінь:')
    callback(num, power)
}
mainFunction(exponentiation)