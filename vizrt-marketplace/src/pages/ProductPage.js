import React, { useState, useEffect } from "react";
import '../App.css'; 
import '../index.css';

const images = [
  "https://c.animaapp.com/2XehKRee/img/unsplash-ttsebukwps8.png",
  "https://c.animaapp.com/2XehKRee/img/unsplash-vtzujbsafsy@2x.png",
  "https://c.animaapp.com/2XehKRee/img/unsplash-lnpxoooamnk@2x.png",
  "https://c.animaapp.com/2XehKRee/img/unsplash-fkaanwckmfc@2x.png"
];

export const ProductPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("About");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-brandBgLight min-h-screen flex flex-col justify-top items-center px-4 sm:px-0 relative">
      <div className="w-full sm:w-[1512px] h-[982px] relative mt-[-500px] sm:mt-[-200px]">
        <div className="absolute w-[1092px] h-[471px] top-[199px] left-[339px]">
          <div className="absolute w-[1036px] h-[437px] top-[34px] left-0">
            <div className="absolute w-[910px] h-[429px] top-[8px] left-0">
              <img
                className="absolute w-[648px] h-[429px] top-0 left-0 object-cover"
                alt="Main"
                src={images[currentImageIndex]}
              />
            </div>
            <div 
              className="absolute w-[312px] top-0 left-[667px] font-bold text-brandTextOrange text-[40px] tracking-[0] leading-[60px]" 
              style={{fontFamily: 'Inter, Helvetica' }}
            >
              3D-effects of motion graphics
            </div>
            <p className="absolute w-[270px] top-[201px] left-[640px] text-shadow-[0px_4px_4px_#00000040] font-normal text-white text-[64px] text-center tracking-[0] leading-[96px] whitespace-nowrap" style={{fontFamily: 'Inter, Helvetica'}}>
              <span className="text-[#24df06]">$</span>
              <span className="text-white"> 19.99</span>
            </p>
            <div className="absolute w-[243px] top-[193px] left-[667px] font-light text-white text-[20px] tracking-[0] leading-[30px] whitespace-nowrap" style={{fontFamily: 'Roboto, Helvetica'}}>
              Category: 3D-effects
            </div>
            <div className="absolute top-[169px] left-[667px] font-extralight text-white text-[20px] text-center tracking-[0] leading-[30px] whitespace-nowrap" style={{fontFamily: 'Inter, Helvetica'}}>
              Creator: John Johnson
            </div>
            <img
              className="absolute w-[125px] h-[24px] top-[303px] left-[667px]"
              alt="Star ratings"
              src="https://c.animaapp.com/2XehKRee/img/star-ratings@2x.png"
            />
            <div className="absolute w-[142px] top-[300px] left-[806px] font-normal text-white text-[20px] tracking-[0] leading-[30px]" style={{fontFamily: 'Inter, Helvetica'}}>
              864 Reviews
            </div>
            <div className="absolute w-[367px] h-[72px] top-[362px] left-[669px]">
              <div className="relative w-[365px] h-[72px] bg-collection-1-blue04 rounded-[17px]">
                <img
                  className="absolute w-[48px] h-[48px] top-[14px] left-[300px]"
                  alt="Shopping cart"
                  src="https://c.animaapp.com/2XehKRee/img/shopping-cart-4.png"
                />
                <div style={{width: '100%', height: '100%', background: '#3956E5', borderRadius: 17}} />
                <div className="absolute w-[247px] top-[3px] left-[45px] font-semibold text-white text-[40px] text-center tracking-[0] leading-[60px]" style={{fontFamily: 'Inter, Helvetica'}}>
                  Add to Cart
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small images for switching */}
        <img
          className="absolute w-[197px] h-[126px] top-[241px] left-[126px] object-cover cursor-pointer"
          alt="Thumbnail 1"
          src={images[1]}
          onClick={() => handleImageClick(1)}
        />
        <img
          className="absolute w-[197px] h-[126px] top-[391px] left-[125px] object-cover cursor-pointer"
          alt="Thumbnail 2"
          src={images[2]}
          onClick={() => handleImageClick(2)}
        />
        <img
          className="absolute w-[197px] h-[126px] top-[541px] left-[125px] object-cover cursor-pointer"
          alt="Thumbnail 3"
          src={images[3]}
          onClick={() => handleImageClick(3)}
        />

        {/* Navigation circles */}
        <div className="absolute w-[72px] h-[14px] top-[679px] left-[616px] flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-[14px] h-[14px] rounded-full ${index === currentImageIndex ? 'bg-black' : 'bg-white'}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>

      {/* Tabs for About, Specifications, and Reviews */}
      <div className="flex justify-center space-x-8 mt-[-300] "> {/* Adjusted margin */}
        <div
          className={`font-normal text-white text-[40px] text-center tracking-[0] leading-[60px] cursor-pointer ${activeTab === "About" ? "underline" : ""}`}
          style={{ fontFamily: 'Play, Helvetica' }}
          onClick={() => handleTabClick("About")}
        >
          About
        </div>
        <div
          className={`font-normal text-white text-[40px] text-center tracking-[0] leading-[60px] cursor-pointer ${activeTab === "Specifications" ? "underline" : ""}`}
          style={{ fontFamily: 'Play, Helvetica' }}
          onClick={() => handleTabClick("Specifications")}
        >
          Specifications
        </div>
        <div
          className={`font-normal text-white text-[40px] text-center tracking-[0] leading-[60px] cursor-pointer ${activeTab === "Reviews" ? "underline" : ""}`}
          style={{ fontFamily: 'Play, Helvetica' }}
          onClick={() => handleTabClick("Reviews")}
        >
          Reviews
        </div>
      </div>

      {/* Conditionally rendered content based on active tab */}
      <div className="mt-4 text-white text-[32px]" style={{ fontFamily: 'Pontano_Sans, Helvetica' }}> {/* Adjusted margin */}
        {activeTab === "About" && (
          <p>
            Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles.
          </p>
        )}
        {activeTab === "Specifications" && (
          <p>
            Our compression wear is made from high-quality materials that provide superior support and comfort.
          </p>
        )}
        {activeTab === "Reviews" && (
          <p>
            Our product has received excellent reviews from athletes and fitness enthusiasts around the world.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
