'use strict';

function padString(str, stringLenght, symbol, addLeft = false){
    if (typeof str !== 'string' ){
        return 'string error'
    }
    if (typeof stringLenght !=='number'){
        return 'stringLenght error'
    }
    if (typeof symbol !== 'string' || symbol.length !== 1){
        return 'symbol error'
    }
    if (typeof addLeft !== 'boolean'){
        return 'boolean error'
    }
    if (str.length >= stringLenght) {
        return str.substr(0, length);
    }
    const addSymbol = stringLenght - str.length;
    const add = symbol.repeat(addSymbol);
    if (addSymbol) {
        return add + str;
    } else {
        return str + add;
    }

}

console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));