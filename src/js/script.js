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
            div.style.display = 'block';
        });
        textFeild.addEventListener('mouseout', () => {
            div.style.display = 'none';
        });

    }

showHideDiv()

