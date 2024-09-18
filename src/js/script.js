'use strict';

const userName = {
    name: 'Yana'
}

const greeting = function () {
    console.log('Welcome, ' + this.name)
}

let userGreeting = greeting.bind(userName)
userGreeting()



