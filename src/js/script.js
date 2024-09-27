'use strict';


const tableFunc = (rows, columns) => {
    const table = document.getElementById('table');
    let count = 1;

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('td');
            cell.textContent = count;
            row.appendChild(cell);
            count++;
        }

        table.appendChild(row);
    }
}

tableFunc(10, 10);