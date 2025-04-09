import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className=" card mb-4 p-3">
      <h4>Weather Checker</h4>
      <input className="form-control mb-2" placeholder="Enter city name" value={city} onChange={e => setCity(e.target.value)} />
      <button className="btn btn-primary" onClick={fetchWeather}>Check Weather</button>
      {weather && weather.main && (
        <div className="mt-2">
          <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
          <p><strong>Condition:</strong> {weather.weather[0].description}</p>
          <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
