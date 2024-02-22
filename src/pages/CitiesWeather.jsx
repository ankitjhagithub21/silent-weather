import React, { useState, useEffect } from 'react';
import CityWeather from '../components/CityWeather';
import Loader from '../components/Loader';

function CitiesWeather() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [citiesData, setCitiesData] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const getCitiesData = async () => {
      try {
        const cityNames = ['New Delhi', 'New York', 'London'];
        const promises = cityNames.map(async (cityName) => {
          const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
          const weatherResponse = await fetch(weatherUrl);
          if (!weatherResponse.ok) {
            throw new Error(`Failed to fetch weather data for ${cityName}`);
          }
          const weatherData = await weatherResponse.json();

          const imageUrl = `https://source.unsplash.com/random/900x700/?${cityName}`;
          const imageResponse = await fetch(imageUrl);
          if (!imageResponse.ok) {
            throw new Error(`Failed to fetch image for ${cityName}`);
          }

          return {
            name: cityName,
            weather: weatherData,
            imageUrl: imageResponse.url,
          };
        });
        const citiesData = await Promise.all(promises);
        setCitiesData(citiesData);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching cities data:', error);
        setLoading(false)
      }
    };

    getCitiesData();
  }, [apiKey]);

  if(loading){
    return <Loader/>
  }
  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-xl lg:text-2xl font-semibold mb-10 text-center">Some Popular Cities Weather</h2>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {citiesData.map((city, index) => (
            <CityWeather key={index} city={city.name} weather={city.weather} imageUrl={city.imageUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CitiesWeather;
