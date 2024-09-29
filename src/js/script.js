'use strict';

const appendHTMLElement = (parentEl = null, elementToAppend = null) => {
if (!parentEl || !elementToAppend) return
    parentEl.append(elementToAppend)
}

const generateTable = () =>{
    const tableSize = 9;
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    table.append(tbody);
    let count = 1;
    for (let i = 0; i <= tableSize; i++){
        const tr = document.createElement('tr');
        for (let c = 0; c <= tableSize; c++){
        const td = document.createElement('td');
         ttd.textContent  = count;
         tr.append(td);
        count++;
        }
         tbody.append(tr);
    }
    return table;
}

console.log(generateTable())
appendHTMLElement(document.body, generateTable())
