import React from "react";
import Starterpack from "../components/LandingPage/Starterpack";
import Carousel from "../components/LandingPage/Carousel";
import Welcomeoffer from "../components/LandingPage/Welcomeoffer";
import TrustedBy from "../components/LandingPage/TrustedBy";
import "../index.css";
import "tailwindcss/tailwind.css";

const LandingPage = () => {
  {
    /* All components on Landing page */
  }
  return (
    <div className="bg-brandBgLight min-h-screen flex flex-col items-center">
      <div className="mt-5">
        <Starterpack />
      </div>

      <div className="w-[60%] m-auto pt-8">
        <Carousel />
      </div>

      <div className="pt-8">
        <Welcomeoffer />
      </div>

      <div className="w-full bg-white mt-10">
        <TrustedBy />
      </div>
    </div>
  );
};
export default LandingPage;
