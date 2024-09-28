'use strict';

const appendHTMLElement = (parentEl = null, elementToAppend = null) => {
if (!parentEl || !elementToAppend) return
    parentEl.append(elementToAppend)
}

const generateTable = () =>{
    const tableSize = 10;
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    table.append(tbody);
    for (let i = 0; i <= tableSize; i++){
        const tr = document.createElement('tr');
        for (let c = 0; i <= tableSize; c++){
        const td = document.createElement('td');
         td.innerHTML = c +'' ;
         tr.append(td);
        }
         tbody.append(tr);
    }
    return table;
}

console.log(generateTable())
appendHTMLElement(document.body, generateTable())