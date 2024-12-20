document.addEventListener('DOMContentLoaded', () => {
    import('./weather.js').then(({ getWeather, displayWeather }) => {
        getWeather('Dnipro', displayWeather);
    });
});
