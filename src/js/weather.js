const API_KEY = '5d066958a60d315387d9492393935c19';

export function getWeather(city, displayWeather) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            displayWeather(data);
        } else {
            console.error(xhr.status);
        }
    };

    xhr.onerror = function () {
        console.error('Network error');
    };

    xhr.send();
}

export function displayWeather(data) {
    const weatherContainer = document.getElementById('weather');
    const weatherHTML = `
        <h2>Погода у ${data.name}</h2>
        <p>Температура: ${data.main.temp} °C</p>
        <p>Тиск: ${data.main.pressure} гПа</p>
        <p>Опис: ${data.weather[0].description}</p>
        <p>Вологість: ${data.main.humidity} %</p>
        <p>Швидкість вітру: ${data.wind.speed} м/с</p>
        <p>Напрям вітру: ${data.wind.deg}°</p>
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
    `;
    weatherContainer.innerHTML = weatherHTML;
}
