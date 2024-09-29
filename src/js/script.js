'use strict';

const appendHTMLElement = (parentEl = null, elementToAppend = null) => {
    if (!parentEl || !elementToAppend) return
    parentEl.append(elementToAppend)

}

const textFeild = document.createElement('input')
console.log(textFeild)

appendHTMLElement()
