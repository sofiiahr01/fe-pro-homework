'use strict';

(function (){
    let user = {
        _name: 'Yana',
        _age: 22,

        get userName (){
            return this._name
        },
        set userName (newName) {
            this._name = newName
        },

        get userAge () {
            return this._age
        },
        set userAge (value){
            if (typeof value !== 'number' || value < 0 || value > 120) throw new Error('the number should`t be less than 0 and more than 120')
            this._age = value
        }
    }

        user.userName = 'Lily';
        user.userAge = 122;

        console.log(user);
})()