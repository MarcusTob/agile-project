import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from '../services/ProductService'; // Adjust the import according to your project structure

const imageUrl = "http://localhost:5219/images";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("About");

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        try {
          const product = await ProductService.getProductById(id);
          setProduct(product);
        } catch (error) {
          console.error("Failed to fetch product", error);
        }
      } else {
        console.error("Product ID is undefined");
      }
    }
    fetchProduct();
  }, [id]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (!product) {
    return <h1>Product not found</h1>
  }

  return (
    <div className="bg-brandBgLight min-h-screen flex flex-col justify-top items-center px-4 sm:px-0 ">
      <div className="bg-brandBgLight min-h-screen flex flex-col items-center">
        <div className="absolute w-[1092px] h-[471px] top-[199px] left-[339px]">
          <div className="absolute w-[1036px] h-[437px] top-[34px] left-0">
            <div className="absolute w-[910px] h-[429px] top-[8px] left-0">
              <img
                className="absolute w-[648px] h-[429px] top-0 left-0 object-cover"
                alt="Main"
                src={`${imageUrl}/${product.productImage}`}
              />
            </div>
            <div
              className="absolute w-[312px] top-0 left-[667px] font-bold text-brandTextOrange text-[40px] tracking-[0] leading-[60px]"
              style={{ fontFamily: 'Inter, Helvetica' }}
            >
              {product.name}
            </div>
            <p className="absolute w-[270px] top-[201px] left-[640px] text-shadow-[0px_4px_4px_#00000040] font-normal text-white text-[64px] text-center tracking-[0] leading-[96px] whitespace-nowrap" style={{ fontFamily: 'Inter, Helvetica' }}>
              <span className="text-[#24df06]">$</span>
              <span className="text-white">{product.price}</span>
            </p>
            <div className="absolute w-[243px] top-[193px] left-[667px] font-light text-white text-[20px] tracking-[0] leading-[30px] whitespace-nowrap" style={{ fontFamily: 'Roboto, Helvetica' }}>
              Category: {product.category}
            </div>
            <div className="absolute top-[169px] left-[667px] font-extralight text-white text-[20px] text-center tracking-[0] leading-[30px] whitespace-nowrap" style={{ fontFamily: 'Inter, Helvetica' }}>
              Creator: {product.creator}
            </div>
            <img
              className="absolute w-[125px] h-[24px] top-[303px] left-[667px]"
              alt="Star ratings"
              src="https://c.animaapp.com/2XehKRee/img/star-ratings@2x.png"
            />
            <div className="absolute w-[142px] top-[300px] left-[806px] font-normal text-white text-[20px] tracking-[0] leading-[30px]" style={{ fontFamily: 'Inter, Helvetica' }}>
              {product.nrOfReviews} Reviews
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
      <div className="flex justify-center space-x-8 mt-[-200px] relative">
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
            {product.description}
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

export default ProductPage;
