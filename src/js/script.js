'use strict';

function padString(str, stringLenght, symbol  = ' ', addLeft = true){
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
        return 'addLeft error'
    }
    if (str.length >= stringLenght) {
        return str.substring(0, stringLenght);
    }
    const addSymbol = stringLenght - str.length;
    let add = ''
    for (let i = 0; i < addSymbol; i++){
        add += symbol
    }
    if (addLeft) {
        return str + add;
    } else {
        return add + str;
    }

}

console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));
console.log(padString('hello', 7, '*', true))