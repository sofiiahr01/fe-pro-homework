'use strict';

(function(){
    const LIST_TYPES = {
        UL: 'ul',
        OL: 'ol',
        MENU: 'menu',
    }

    const appendHTMLElement = (parentEl = null, elementToAppend = null) => {
        if (!parentEl || !elementToAppend) return
        parentEl.append(elementToAppend)
    }

    const generateList = (listItems, listType = LIST_TYPES.UL) => {
        if (!Object.values(LIST_TYPES).includes(listType)) throw new Error('listType is must be a list type');
        if (!listItems || !Array.isArray(listItems)) throw new Error('array is must be an array');
        if (!listItems.length) throw new Error('array length shouldn`t be equal to 0')

        const listElement = document.createElement(listType);

        listItems.forEach((item) => {
            const listItemElement = document.createElement('li');
            appendHTMLElement(listElement, listItemElement);

            if (Array.isArray(item)){
                appendHTMLElement(listItemElement, generateList(item, listType))
            }else {
                listItemElement.innerHTML = item;
            }
            appendHTMLElement(listElement, listItemElement);
        })
        return listElement
    }

    const result = generateList([1, 2, 3, [4, 5, 6]], 'ol');
    appendHTMLElement(document.body, result)
})();

