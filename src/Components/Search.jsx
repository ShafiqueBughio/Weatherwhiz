import React, { useEffect, useState } from 'react';
import { UseWeather } from '../WeatherContext/WeatherContext';

const Search = ({ HandleBack_Button }) => {
  const Weather = UseWeather();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); // Start the transition
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      HandleBack_Button(); // Call the parent function to handle the back button action
    }, 500); // Duration matches the CSS transition duration
  };

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden md:visible search-container `}>
      <div className={`bg-gradient-to-b from-blue-400 to-transparent-950 h-screen md:w-80 w-60 p-6 md:pt-0 transform ${visible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out absolute right-0`}>
        <div className='text-white text-xl cursor-pointer transition md:invisible' onClick={handleClose}>X</div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search location"
            value={Weather.search}
            onChange={(e) => { Weather.setSearch(e.target.value) }}
            className="md:w-[200px] w-[134px] p-2 bg-transparent border-b border-gray-300 text-white focus:outline-none placeholder:text-gray-200"
          />
          <button className="mt-4 bg-transparent" onClick={Weather.FetchData} value="search">
            <svg className="md:w-6 md:h-6 w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
        <div className="mb-6">
          <ul className="text-white">
            <li className="flex justify-between py-1">
              <span>Current Search</span><span>{Weather?.search}</span>
            </li>
            <li className="flex justify-between py-1">
              <span>Country</span><span>{Weather?.data?.location?.country}</span>
            </li>
            <li className="flex justify-between py-1">
              <span>Region</span><span>{Weather?.data?.location?.region}</span>
            </li>
          </ul>
        </div>
        <div className="border-t border-gray-300 pt-4 text-white">
          <h2 className="text-lg mb-4">Weather Details</h2>
          <ul>
            <li className="flex justify-between py-1">
              <span>Cloudy</span><span>{Weather?.data?.current?.cloud}%</span>
            </li>
            <li className="flex justify-between py-1">
              <span>Humidity</span><span>{Weather?.data?.current?.humidity}%</span>
            </li>
            <li className="flex justify-between py-1">
              <span>Wind</span><span>{Weather?.data?.current?.wind_kph}km/h</span>
            </li>
            <li className="flex justify-between py-1">
              <span>Rain</span><span>{Weather?.data?.current?.precip_mm}</span>
            </li>
            <li className="flex justify-between py-1">
              <span>Fahrenheit</span><span>{Weather?.data?.current?.temp_f}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
