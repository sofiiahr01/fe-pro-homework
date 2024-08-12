'use strict';

const yearBirth = prompt('Введіть ваш рік народження:');
const city = prompt('Введіть місто, в якому Ви проживаєте:');
const sport = prompt('Який Ваш улюблений вид спорту?');

const currentYear = new Date().getFullYear();
const age = currentYear - parseInt(yearBirth);

let commonAlert = '';

if (yearBirth !== null && !isNaN(yearBirth) && yearBirth.trim() !== "") {
    commonAlert += 'Вам ' + age + ' років.\n';
} else {
    commonAlert += "Шкода, що Ви не захотіли ввести свій рік народження.\n";
}

if (city === null || city.trim() === '') {
    commonAlert += 'Шкода, що Ви не захотіли ввести своє місто.\n';
} else {
    switch (city) {
        case 'Київ':
            commonAlert += 'Ви проживаєте у столиці України.\n';
            break;
        case 'Лондон':
            commonAlert += 'Ви проживаєте у столиці Англії.\n';
            break;
        case 'Вашингтон':
            commonAlert += 'Ви проживаєте у столиці США.\n';
            break;
        default:
            commonAlert += `Ви проживаєте у місті ${city}.\n`;
    }
}

if (sport === null || sport.trim() === '') {
    commonAlert += 'Шкода, що Ви не захотіли ввести свій улюблений вид спорту.\n';
} else {
    switch (sport) {
        case 'бокс':
            commonAlert += 'Круто! Хочете стати Олександром Усиком?\n';
            break;
        case 'фехтування':
            commonAlert += 'Круто! Хочете стати Ольгою Харлан?\n';
            break;
        case 'шахмати':
            commonAlert += 'Круто! Хочете стати Доммараджу Гукешем?\n';
            break;
        default:
            commonAlert += `Ваш улюблений вид спорту ${sport}.\n`;
    }
}

alert(commonAlert);




