import React, { useState, useEffect } from 'react';

const CurrentLocationWeather = () => {
  const [coords, setCoords] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });

        // Fetch weather data for the current location
        fetchWeatherData(latitude, longitude);
      });
    }
  }, []);

  const fetchWeatherData = (latitude, longitude) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error('Error fetching weather data:', error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-slate-200 p-6 rounded-lg shadow-md mx-3">
        {coords ? (
          <>
            <h1 className="text-2xl font-semibold mb-4">Current Location Weather</h1>
           
            {weatherData && (
              <div className="text-lg">
                <p>Temperature: {weatherData.main.temp}°C</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
                <p>Description: {weatherData.weather[0].description}</p>
                
              </div>
            )}
          </>
        ) : (
          <p className="text-lg">Fetching your location...</p>
        )}
      </div>
    </div>
  );
};

export default CurrentLocationWeather;
