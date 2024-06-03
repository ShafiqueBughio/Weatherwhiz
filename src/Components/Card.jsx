import React, { useState, useEffect } from "react";
import Search from "./Search";
import { Button } from "./Button";
import { UseWeather } from "../WeatherContext/WeatherContext";
import CircleFollowMouse from "./CircleMouse";

export const Card = () => {
  const [search, setSearch] = useState(true);
  const [button, setButton] = useState(false);

  const handleSearchButton = () => {
    setSearch(true);
    setButton(false);
  };

  const handleBackButton = () => {
    setSearch(false);
    setButton(true);
  };

  const Weather = UseWeather();

  console.log(Weather);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setSearch(false);
      setButton(true);
    } else {
      setSearch(true);
      setButton(false);
    }
  };

  useEffect(() => {
    Weather.Current_User_Location_Data();
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative h-screen w-screen flex">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://videos.pexels.com/video-files/856356/856356-hd_1280_720_25fps.mp4" // Replace with your video file path
        autoPlay
        loop
        muted
      />

      <div className="relative z-10 flex flex-col p-10">
        <p className="text-white font-bold md:text-2xl text-xl">WeatherWhiz</p>

        <div className="mt-auto flex items-center">
          <div className="mr-4 ">
            <img
              src={Weather?.data?.current?.condition?.icon}
              alt="weather icon"
              className="md:w-[80px] md:h-[80px] w-[60px] h-[60px]"
            />
            <p className="text-white md:text-xl text-sm flex flex-wrap">
              {Weather?.data?.current?.condition?.text}
            </p>
          </div>
          <div className="ml-4">
            <h2 className="text-white md:text-6xl font-semibold text-4xl">
              {Weather?.data?.current?.temp_c}℃
            </h2>
            <h2 className="text-white md:text-4xl text-2xl md:mt-2 mt-1">
              {Weather?.data?.location?.name}
              <p className="md:text-xl font-normal text-sm">
                {Weather?.data?.location?.localtime}
              </p>
            </h2>
          </div>
        </div>

        <div className="flex mt-4">
          {search && <Search HandleBack_Button={handleBackButton} />}
        </div>
      </div>
      {button && <Button HandleSearch_Button={handleSearchButton} />}
      {/* <CircleFollowMouse/> */}
    </div>
  );
};
