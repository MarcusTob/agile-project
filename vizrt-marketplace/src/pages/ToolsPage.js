import React from "react";

const Tools = () => {
  return (
    // Container for the tools component, centered vertically and horizontally
    <div className="flex justify-center items-center h-screen">
      {/* Image displaying someone working, with pulsating animation */}
      <img
        className="w-[500px] h-[500px] object-contain animate-pulse"
        src={process.env.PUBLIC_URL + "/images/workingon.png"}
        alt="Working On"
      />
    </div>
  );
};

export default Tools;
