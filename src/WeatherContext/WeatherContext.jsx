import { createContext, useContext, useState } from "react";
import { Get_Weather_Data_For_City } from "../WeatherApi/Api";
import { Get_Weather_Data_For_Location } from "../WeatherApi/Api";

// Create context
const WeatherContext = createContext(null);

// Custom hook to use the context
export const UseWeather = () => {
  return useContext(WeatherContext);
};

// Context Provider
export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(null);

  const FetchData = async () => {
    if (search) {
      const response = await Get_Weather_Data_For_City(search);
      setData(response);
    }
  };
  const Current_User_Location_Data = ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        Get_Weather_Data_For_Location(position.coords.latitude,position.coords.longitude)
        .then((data)=>{setData(data)})
    })
  }

  return (
    <WeatherContext.Provider value={{ data, search, setSearch, FetchData,Current_User_Location_Data }}>
      {children}
    </WeatherContext.Provider>
  );
};
