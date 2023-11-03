import React from 'react';

const CityWeather = ({ city, weather }) => {
  return (
    <div className="p-4 md:w-1/2 lg:w-1/3 sm:mb-0 mb-6 sm:w-full">
     
     <div className="h-64 overflow-hidden rounded-t-lg">
       
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src={city.imageURL}
        />
      </div>
      
      
      <div className="text-base leading-relaxed  bg-slate-200 p-3 rounded-b-lg shadow">
      <h2 className="text-xl font-medium title-font text-indigo-500">{city.name}</h2>
        {weather && (
          <>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Description: {weather.weather[0].description}</p>
          </>
        )}
      </div>
      
     </div>
    
  );
};

export default CityWeather;
