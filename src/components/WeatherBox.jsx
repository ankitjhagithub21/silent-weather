import React from 'react';

const WeatherBox = ({ title, value, unit,icon }) => {
  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div className="border-2 shadow px-4 py-6 rounded-lg bg-white">
        <i className={`${icon} fa-2x mb-2`}></i>
      <p className="leading-relaxed text-xl">{title}</p>
        <h2 className="title-font font-medium text-2xl text-gray-900">
          {value} {unit}
        </h2>
        
      </div>
    </div>
  );
};

export default WeatherBox;
