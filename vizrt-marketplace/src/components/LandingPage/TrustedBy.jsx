import React from "react";

// Component to display logos of trusted organizations
const TrustedBy = () => {
  // Render trusted logos
  return (
    <div className="bg-white py-10 w-full flex flex-col items-center">
      {/* Title */}
      <h3 className="text-h3 font-semibold mb-6 focustomFont">Trusted By</h3>
      {/* Logos */}
      <div className="flex justify-around w-3/4">
        {/* Logo: PGA Tour */}
        <img
          src="/images/pga-tour.webp"
          alt="PGA Tour"
          className="h-16 w-20"
        />
        {/* Logo: NFL */}
        <img src="/images/nfl-logo.png" alt="NFL" className="h-16 w-auto" />
        {/* Logo: MovieStar */}
        <img
          src="/images/moviestar-logo.png"
          alt="MovieStar"
          className="h-16 w-auto"
        />
      </div>
    </div>
  );
};

export default TrustedBy;
