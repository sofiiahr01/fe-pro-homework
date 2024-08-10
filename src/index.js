'use strict';

const yearBirth = prompt('Введіть ваш рік народження:');
const city = prompt('Введіть місто, в якому Ви проживаєте:');
const sport = prompt('Який Ваш улюблений вид спорту?');

const currentYear = new Date().getFullYear();
const age = currentYear - parseInt(yearBirth);

if (yearBirth !== null && !isNaN(yearBirth) && yearBirth.trim() !== "") {
    alert('Вам приблизно ' + age + ' років.' );
} else {
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
}

if (city ===null || city.trim() === ''){
    alert(`Шкода, що Ви не захотіли ввести своє місто.`)
} else {
    switch (city){
        case 'Київ':
            alert('Ви проживаєте у столиці України.');
            break;
        case 'Лондон':
            alert('Ви проживаєте у столиці Англії.');
            break;
        case 'Вашингтон':
            alert('Ви проживаєте у столиці США.');
            break;
        default:
            alert(`Ви проживаєте у місті ${city}.`);
    }}

if (sport ===null || sport.trim() === ''){
    alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту.')
} else {
    switch (sport){
        case 'бокс':
            alert('Круто! Хочете стати Олександром Усиком?');
            break;
        case 'фехтування':
            alert('Круто! Хочете стати Ольгою Харлан?');
            break;
        case 'шахмати':
            alert('Круто! Хочете стати Доммараджу Гукешем?');
            break;
    }
}


