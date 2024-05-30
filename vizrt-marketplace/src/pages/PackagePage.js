import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PackageService from '../services/PackageService'; // Adjust the import according to your project structure

const imageUrl = "http://localhost:5219/images";

const PackagePage = () => {
  const { id } = useParams();
  const [graphicPackage, setPackage] = useState(null);
  const [activeTab, setActiveTab] = useState("About");

  useEffect(() => {
    const fetchPackage = async () => {
      if (id) {
        try {
          const graphicPackage = await PackageService.getPackageById(id);
          setPackage(graphicPackage);
        } catch (error) {
          console.error("Failed to fetch package", error);
        }
      } else {
        console.error("Package ID is undefined");
      }
    }
    fetchPackage();
  }, [id]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (!graphicPackage) {
    return <h1>Package not found</h1>
  }

  return (
    <div className="bg-brandBgLight min-h-screen flex flex-col justify-top items-center px-4 sm:px-0 ">
      <div className="min-h-screen">
        <div className="absolute w-[1092px] h-[471px] top-[150px] left-[339px]">
          <div className="absolute w-[1036px] h-[437px] top-[34px] left-0">
            <div className="absolute w-[910px] h-[429px] top-[8px] left-0">
              <img
                className="absolute w-[648px] h-[429px] top-0 left-0 object-cover"
                alt="Main"
                src={`${imageUrl}/${graphicPackage.packageImage}`}
              />
            </div>
            <div
              className="absolute w-[312px] top-0 left-[667px] font-bold text-brandTextOrange text-[40px] tracking-[0] leading-[60px]"
              style={{ fontFamily: 'Inter, Helvetica' }}
            >
              {graphicPackage.name}
            </div>
            <p className="absolute w-[270px] top-[201px] left-[640px] text-shadow-[0px_4px_4px_#00000040] font-normal text-white text-[64px] text-center tracking-[0] leading-[96px] whitespace-nowrap" style={{ fontFamily: 'Inter, Helvetica' }}>
              <span className="text-[#24df06]">$</span>
              <span className="text-white">{graphicPackage.price}</span>
            </p>
            <div className="absolute w-[243px] top-[193px] left-[667px] font-light text-white text-[20px] tracking-[0] leading-[30px] whitespace-nowrap" style={{ fontFamily: 'Roboto, Helvetica' }}>
              Category: {graphicPackage.category}
            </div>
            <img
              className="absolute w-[125px] h-[24px] top-[303px] left-[667px]"
              alt="Star ratings"
              src="https://c.animaapp.com/2XehKRee/img/star-ratings@2x.png"
            />
            <div className="absolute w-[142px] top-[300px] left-[806px] font-normal text-white text-[20px] tracking-[0] leading-[30px]" style={{ fontFamily: 'Inter, Helvetica' }}>
              {graphicPackage.nrOfReviews} Reviews
            </div>
            <div className="absolute w-[367px] h-[72px] top-[362px] left-[669px]">
              <div className="relative w-[365px] h-[72px] bg-collection-1-blue04 rounded-[17px]">
                <img
                  className="absolute w-[48px] h-[48px] top-[14px] left-[300px]"
                  alt="Shopping cart"
                  src="https://c.animaapp.com/2XehKRee/img/shopping-cart-4.png"
                />
                <div style={{ width: '100%', height: '100%', background: '#3956E5', borderRadius: 17 }} />
                <div className="absolute w-[247px] top-[3px] left-[45px] font-semibold text-white text-[40px] text-center tracking-[0] leading-[60px]" style={{ fontFamily: 'Inter, Helvetica' }}>
                  Add to Cart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs for About, Specifications, and Reviews */}
      <div className="flex justify-center space-x-8 mt-[-340px] relative">
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
      <div className="mt-4 text-white text-[32px]" style={{ fontFamily: 'Pontano_Sans, Helvetica' }}>
        {activeTab === "About" && (
          <p>
            {graphicPackage.description}
          </p>
        )}
        {activeTab === "Specifications" && (
          <p>
            Our product is made from high-quality materials that provide superior support and comfort.
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

export default PackagePage;