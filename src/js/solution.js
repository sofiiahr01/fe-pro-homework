'use strict';

(function() {
    const ulElement = document.querySelector('ul');
    const liElements = document.querySelectorAll('ul li');
    const ulAttr = ulElement.attributes;

    const liText = () => {
        liElements.forEach((li) => {
            console.log(li.textContent);
        });
    }

    const getUlVal = () => {
        const attrValues = [];

        for (let attr of ulAttr) {
            attrValues.push(attr.value);
        }
        console.log(attrValues);
    }

    const getUlNames = () => {
        const attrNames = [];

        for (let attr of ulAttr) {
            attrNames.push(attr.name);
        }
        console.log(attrNames);
    }

    const changeLastLiText = (newText) => {
        liElements[liElements.length - 1].textContent = newText;
    }

    const addAttrToFirstLi = (name) => {
        liElements[0].setAttribute('data-my-name', name);
    }

    const removeAttrFunc = () => {
        ulElement.removeAttribute('data-dog-tail');
    }

    liText();
    getUlVal();
    getUlNames();
    changeLastLiText('Привіт, мене звуть Софія');
    addAttrToFirstLi('Софія');
    removeAttrFunc();

})();






