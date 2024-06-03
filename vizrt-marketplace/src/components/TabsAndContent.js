import React from 'react';

const TabsAndContent = ({ activeTab, handleTabClick, product }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center space-x-8 mt-4">
        <div
          className={`font-normal text-white text-[40px] text-center tracking-[0] leading-[60px] cursor-pointer ${
            activeTab === 'About' ? 'underline' : ''
          }`}
          onClick={() => handleTabClick('About')}
        >
          About
        </div>
        <div
          className={`font-normal text-white text-[40px] text-center tracking-[0] leading-[60px] cursor-pointer ${
            activeTab === 'Specifications' ? 'underline' : ''
          }`}
          onClick={() => handleTabClick('Specifications')}
        >
          Specifications
        </div>
        <div
          className={`font-normal text-white text-[40px] text-center tracking-[0] leading-[60px] cursor-pointer ${
            activeTab === 'Reviews' ? 'underline' : ''
          }`}
          onClick={() => handleTabClick('Reviews')}
        >
          Reviews
        </div>
      </div>
      <div className="mt-4 text-white text-[32px] w-full px-4">
        {activeTab === 'About' && <p>{product.description}</p>}
        {activeTab === 'Specifications' && (
          <p>Our product is made from high-quality materials that provide superior support and comfort.</p>
        )}
        {activeTab === 'Reviews' && (
          <p>Our product has received excellent reviews from athletes and fitness enthusiasts around the world.</p>
        )}
      </div>
    </div>
  );
};

export default TabsAndContent;
