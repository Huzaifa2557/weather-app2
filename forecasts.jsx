
import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherForecast from './WeatherForecast';

const API_KEY = 'YOU5b998cd931';
const API_URL =  "https://api.openweathermap.org/data/2.5/weather?q=" +
city +
"&units=metric&appid=" + 
                       {apiKey};

const App = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setWeatherData(response.data.forecast.forecastday);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  return (
    <div>
      <h1>5-Day Weather Forecast</h1>
      <WeatherForecast data={weatherData} />
    </div>
  );
};




const WeatherCard = ({ date, time, temperature, description, icon }) => {
  return (
    <div className="weather-card">
      <h2>{date}</h2>
      <p>Time: {time}</p>
      <p>Temperature: {temperature}°C</p>
      <p>Description: {description}</p>
      <img src={icon} alt={description} />
    </div>
  );
};

export default WeatherCard;
