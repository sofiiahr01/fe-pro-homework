'use strict';

const appendHTMLElement = (textField, div) => {
    document.body.append(textField, div);
};

const createInput = () => {
    const textField = document.createElement('input');
    textField.type = 'text';
    textField.placeholder = 'Text';
    return textField;
};

const createDiv = () => {
    const div = document.createElement('div');
    div.innerHTML = 'Hello :)';
    div.classList.add('hidden');
    return div;
};

const addEventListeners = (textField, div) => {
    textField.addEventListener('mouseover', () => {
        div.classList.remove('hidden');
        div.classList.add('show');
    });
    textField.addEventListener('mouseout', () => {
        div.classList.add('hidden');
        div.classList.remove('show');
    });
};

const showHideDiv = () => {
    const textField = createInput();
    const div = createDiv();
    appendHTMLElement(textField, div);
    addEventListeners(textField, div);
};

showHideDiv()







