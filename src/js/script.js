'use strict';

const userName = {
    firstName: 'Yana',
    lastName: 'Repjah'
}

const getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

const apply = function (func, context, ...args) {
    let result = null
    context.func = func;
    result = context.func(...args);
    delete context.func;

    return result;
}

const bind = (func= null, context = undefined, args = []) => {
    if(!func) return undefined;

    return function() {
        return apply(func, context, ...args)
    }
}

const bindedGetFullName = bind(getFullName, userName);
console.log(bindedGetFullName)
console.log(bindedGetFullName());





