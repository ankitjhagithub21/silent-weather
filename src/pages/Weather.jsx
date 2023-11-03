import React, { useState, useEffect } from 'react';
import WeatherBox from '../components/WeatherBox';

function Weather() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleButtonClick = () => {
    fetchWeatherData(city);
  };

  useEffect(() => {
    fetchDefaultWeatherData();
  }, []);

  const fetchDefaultWeatherData = () => {
    const defaultCity = 'Patna'; 
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.log(error));
  };

  const fetchWeatherData = (cityName) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.log(error));
  };

 
 
  return (
    <section className='py-24'>
      <div className="w-full max-w-xs mx-auto flex flex-col justify-center items-center mt-4">
        <div className="w-full">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={handleInputChange}
            />
            <button
              className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded outline-none"
              type="submit"
              onClick={handleButtonClick}
            >
              Get Weather
            </button>
          </div>
        </div>
      </div>
        <div className="mt-4">
        {weather && (
          <div className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
             
              <h2 className="text-3xl font-semibold mb-10 text-center">Weather in {weather.name}</h2>

              <div className="flex flex-wrap -m-4 text-center">
                <WeatherBox title="Temperature" value={weather.main.temp} unit="°C" />
                <WeatherBox title="Humidity" value={weather.main.humidity} unit="%" />
                <WeatherBox title="Description" value={weather.weather[0].description} unit="" />
                <WeatherBox title="Wind Speed" value={weather.wind.speed} unit="m/s" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Weather;
