'use strict';

function insertWordInto(str) {
    const words = str.split(' ')
    let insertIndex = 0

    return function(word) {
        const gap = ` ${word} `
        if (insertIndex === 0) {
            words.unshift(gap.trim())
        } else if (insertIndex === words.length) {
            words.push(gap.trim())
        } else {
            words[insertIndex - 1] += gap
        }

        insertIndex++;

        if (insertIndex > words.length) {
            insertIndex = 0;
        }

        return words.join(' ').trim();
    };
}

const paste = insertWordInto('hello world');
console.log(paste('Odesa'));
console.log(paste('Odesa'));
console.log(paste('Odesa'));
console.log(paste('Odesa'))


