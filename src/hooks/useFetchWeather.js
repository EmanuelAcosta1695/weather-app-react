const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeather = async (city) => {
    try {
        const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}`);

        if (!response.ok) {
            throw new Error('City not found or other network error');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred: ', error.message);
        throw error;
    }
};