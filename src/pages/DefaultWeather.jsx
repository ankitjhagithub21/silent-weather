import React, { useState, useEffect } from 'react';
import CityWeather from '../components/CityWeather'; 

function DefaultWeather() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [delhiWeather, setDelhiWeather] = useState(null);
  const [newYorkWeather, setNewYorkWeather] = useState(null);
  const [londonWeather, setLondonWeather] = useState(null);

  useEffect(() => {


    // Fetch weather data for Delhi
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=New Delhi&appid=${apiKey}&units=metric`)
      .then((response) => response.json())
      .then((data) => setDelhiWeather(data));

    // Fetch weather data for New York
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`)
      .then((response) => response.json())
      .then((data) => setNewYorkWeather(data));

    // Fetch weather data for London
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`)
      .then((response) => response.json())
      .then((data) => setLondonWeather(data));
  }, [apiKey]);

  // Define city data with name and image URL
  const cities = [
    {
      name: 'New Delhi',
      imageURL: 'https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg',
      weather: delhiWeather,
    },
    {
      name: 'New York',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg',
      weather: newYorkWeather,
    },
    {
      name: 'London',
      imageURL: 'https://www.touristengland.com/wp-content/uploads/2020/09/london-3598397_640.jpg',
      weather: londonWeather,
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-xl lg:text-2xl font-semibold mb-10 text-center">Some Popular Cities Weather</h2>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {cities.map((city, index) => (
            <CityWeather key={index} city={city} weather={city.weather} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DefaultWeather;
