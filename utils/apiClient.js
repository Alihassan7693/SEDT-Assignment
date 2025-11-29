const axios = require('axios');

async function getWeather(city, apiKey) {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        return response;
    } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        return error.response;  // Important: return the actual error response
    }
}

module.exports = { getWeather };
