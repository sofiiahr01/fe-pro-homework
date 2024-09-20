'use strict';

const bindFunc = function(func, context, ...linkedArgs) {
    return function(...args) {
        return func.bind(context)(...linkedArgs, ...args);
    };
}

const userName = {
    name: 'Yana'
}

const greet = function(greeting) {
    return `${greeting}, ${this.name}`;
}

const boundGreet = bindFunc(greet, userName, 'Welcome');
console.log(boundGreet())





