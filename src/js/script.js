'use strict';

    const showHideDiv = () => {
        const textFeild = document.createElement('input')
        textFeild.type = 'text';
        textFeild.placeholder = 'Text';
        document.body.append(textFeild)

        const div = document.createElement('div')
        div.innerHTML = 'Hello :)'
        document.body.append(div);

        textFeild.addEventListener('mouseover', () => {
            return div.style.display = 'block';
        });
        textFeild.addEventListener('mouseout', () => {
            return div.style.display = 'none';
        });

    }

showHideDiv()

