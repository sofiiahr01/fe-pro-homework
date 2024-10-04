'use strict';

const appendHTMLElement = (parentEl = null, elementToAppend = null) => {
    if (!parentEl || !elementToAppend) return;
    parentEl.append(elementToAppend);
};

const createCounter = () => {
    let count = 1;
    return () => count++;
};

const generateTable = (rows, cols) => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    table.append(tbody);

    const cellCounter = createCounter()

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let c = 0; c < cols; c++) {
            const td = document.createElement('td');
            td.textContent = cellCounter();
            tr.append(td);
        }
        tbody.append(tr);
    }
    return table
}

appendHTMLElement(document.body, generateTable(10, 10))