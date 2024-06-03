import React from "react";

export const Button = ({ HandleSearch_Button }) => {
  return (
    <>
      <div>
        <button
          className="bg-gradient-to-b from-blue-400 to-gray-500 text-white font-semibold md:py-2 md:px-4 rounded-md shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 ease-in-out absolute top-[40px] right-[20px] px-2 py-1"
          onClick={HandleSearch_Button}
        >
          Search Weather
        </button>
      </div>
    </>
  );
};
