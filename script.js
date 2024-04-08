// document.addEventListener("DOMContentLoaded", getWeather);

const weatherDiv = document.getElementById("weather-div");
const apiKey = '600b87e32881f787023fb3fe707e4b18';

async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Calgary&appid=${apiKey}&units=metric`);
        const data = await response.json();
        console.log(data);
        

        const temperature = Math.round(data.main.temp);
        const feelsTemp = Math.round(data.main.feels_like);
        const weatherDescription = data.weather[0].description;
        
        weatherDiv.innerHTML = `
            <p>Real Temperature: ${temperature}°C</p>
            <p>Feels like: ${feelsTemp}°C</p>
            <p>Description: ${weatherDescription}</p>
        `;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        weatherDiv.innerHTML = '<p>Error fetching weather data</p>';
    }
}
