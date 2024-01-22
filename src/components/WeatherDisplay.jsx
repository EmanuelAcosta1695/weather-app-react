import React from 'react'

export const WeatherDisplay = ({dataWeather}) => {
    const difKelvin = 273.15
        
    return (
        <div>
            <h2>{dataWeather.name}</h2>
            <p>Temperatura: {parseInt(dataWeather?.main.temp - difKelvin)}°C</p>
            <p>Condición meteorológica: {dataWeather?.weather[0].description}</p>
            <img src={`https://openweathermap.org/img/wn/${dataWeather?.weather[0].icon}@2x.png`}/>
        </div>
    )
}
