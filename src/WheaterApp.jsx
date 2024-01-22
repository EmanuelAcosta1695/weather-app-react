import React, { useState } from 'react'
import { fetchWeather } from './hooks/useFetchWeather'

export const WheaterApp = () => {
    const difKelvin = 273.15

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

            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={city}
                    onChange={handleChangeCity}
                />
                <button type='submit'>Buscar</button>
            </form>
            {
                dataWeather && (
                    <div>
                        <h2>{dataWeather.name}</h2>
                        <p>Temperatura: {parseInt(dataWeather?.main.temp - difKelvin)}°C</p>
                        <p>Condición meteorológica: {dataWeather?.weather[0].description}</p>
                        <img src={`https://openweathermap.org/img/wn/${dataWeather?.weather[0].icon}@2x.png`}/>
                    </div>
                )
            }
        </div>
    )
}
