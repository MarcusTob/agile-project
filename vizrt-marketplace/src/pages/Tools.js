import React from "react";

const Tools = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        className="w-[500px] h-[500px] object-contain animate-pulse"
        src={process.env.PUBLIC_URL + "/images/workingon.png"}
        alt="Working On"
      />
    </div>
  );
};

export default Tools;
