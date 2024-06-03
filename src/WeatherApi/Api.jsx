import React from "react";

export const Get_Weather_Data_For_City = async(city)=>{
    const CityUrl = "https://api.weatherapi.com/v1/current.json?key=6a65f3a7c4104110b67130206240206";
    const response = await fetch(`${CityUrl}&q=${city}&aqi=yes`);  //aqi (air quality index)

    return(
        await response.json()
    )

}

export const Get_Weather_Data_For_Location = async(lat,lon)=>{
    const CityUrl = "https://api.weatherapi.com/v1/current.json?key=6a65f3a7c4104110b67130206240206";
    const response = await fetch(`${CityUrl}&q=${lat},${lon}&aqi=yes`);  //aqi (air quality index)

    return(
        await response.json()
    )

}


