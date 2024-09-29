'use strict';

const appendHTMLElement = (parentEl = null, elementToAppend = null) => {
    if (!parentEl || !elementToAppend) return
    parentEl.append(elementToAppend)

}
    const textFeild = document.createElement('input')

    textFeild.type = 'text';
    textFeild.placeholder = 'Text';

    document.body.append(textFeild)
    const div = document.createElement('div')
div.style.display = 'none';
div.style.border = '1px solid #000';
div.style.padding = '10px';
div.style.marginTop = '10px';
document.body.append(div);

function showDiv() {
    div.style.display = 'block';
}

function hideDiv() {
    div.style.display = 'none';
}

textFeild.addEventListener('mouseover', showDiv);
textFeild.addEventListener('mouseout', hideDiv);
appendHTMLElement()

