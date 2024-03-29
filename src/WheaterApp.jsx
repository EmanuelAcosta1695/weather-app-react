import React, { useState } from 'react'
import { fetchWeather } from './hooks/useFetchWeather'
import { WeatherDisplay } from './components/WeatherDisplay'
import { WeatherForm } from './components/WeatherForm'

export const WheaterApp = () => {

    const [city, setCity] = useState('')
    const [dataWeather, setDataWeather] = useState(null)

    const handleChangeCity = (e) => {
        setCity(e.target.value)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const data = await fetchWeather(city);
            setDataWeather(data);
        } catch (error) {
            console.error('An error occurred: ', error.message);
        }
    }

    return (
        <div className='container'>
            <h1>Aplicación del Clima</h1>

            <WeatherForm
                city={city}
                handleChangeCity={handleChangeCity}
                handleSubmit={handleSubmit}
            />
            {
                dataWeather && (
                    <WeatherDisplay dataWeather={dataWeather}/>
                )
            }
        </div>
    )
}
