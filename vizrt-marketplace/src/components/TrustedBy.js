import React from "react";

const TrustedBy = () => {
  {
    /* Trusted by logo and logos */
  }
  return (
    <div className="bg-white py-10 w-full flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-6">Trusted By</h2>
      <div className="flex justify-around w-3/4">
        <img
          src="/images/pga-tour.webp"
          alt="pga tour "
          className="h-16 w-auto"
        />
        <img src="/images/nfl-logo.png" alt="nfl" className="h-16 w-auto" />
        <img
          src="/images/moviestar-logo.png"
          alt="moviestar"
          className="h-16 w-auto"
        />
      </div>
    </div>
  );
};

export default TrustedBy;
