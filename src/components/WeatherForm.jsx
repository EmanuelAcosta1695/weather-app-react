import React from 'react';

export const WeatherForm = ({ city, handleChangeCity, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={city}
        onChange={handleChangeCity}
      />
      <button type='submit'>Buscar</button>
    </form>
  );
};