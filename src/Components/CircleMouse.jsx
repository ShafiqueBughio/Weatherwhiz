import React, { useState, useEffect } from "react";

const CircleFollowMouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed bg-blue-500 rounded-full"
      style={{
        width: "20px",
        height: "20px",
        top: mousePosition.y,
        left: mousePosition.x,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none", // Prevent the circle from interfering with other elements
        zIndex: 9999, // Ensure the circle is on top of other elements
      }}
    ></div>
  );
};

export default CircleFollowMouse;
