'use strict';

function generateKey(length, characters){
    let generatedKey = '';
    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        generatedKey += characters[randomIndex];
    }
    return generatedKey
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters)
console.log(key)
