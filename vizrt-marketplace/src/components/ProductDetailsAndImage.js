import React from 'react';
import CartService from '../services/CartService';

const ProductDetailsAndImage = ({ imageUrl, product }) => {
  return (
    <div className="relative w-[1092px] h-[471px] flex justify-center">
      <div className="relative w-[910px] h-[429px]">
        <img
          className="absolute w-[648px] h-[429px] top-0 left-0 object-cover"
          alt="Main"
          src={`${imageUrl}/${product.image}`}
        />
        <div
          className="absolute w-[412px] top-0 left-[667px] font-bold text-brandTextOrange text-[40px] tracking-[0] leading-[60px]"
          style={{ fontFamily: 'Inter, Helvetica' }}
        >
          {product.name}
        </div>
        <p
          className="absolute w-[270px] top-[201px] left-[640px] text-shadow-[0px_4px_4px_#00000040] font-normal text-white text-[64px] text-center tracking-[0] leading-[96px] whitespace-nowrap"
          style={{ fontFamily: 'Inter, Helvetica' }}
        >
          <span className="text-[#24df06]">$</span>
          <span className="text-white">{product.price}</span>
        </p>
        <div
          className="absolute w-[243px] top-[193px] left-[667px] font-light text-white text-[20px] tracking-[0] leading-[30px] whitespace-nowrap"
          style={{ fontFamily: 'Roboto, Helvetica' }}
        >
          Category: {product.category}
        </div>
        <div
          className="absolute top-[169px] left-[667px] font-extralight text-white text-[20px] text-center tracking-[0] leading-[30px] whitespace-nowrap"
          style={{ fontFamily: 'Inter, Helvetica' }}
        >
          Creator: {product.creator}
        </div>
        <img
          className="absolute w-[125px] h-[24px] top-[303px] left-[667px]"
          alt="Star ratings"
          src="https://c.animaapp.com/2XehKRee/img/star-ratings@2x.png"
        />
        <div
          className="absolute w-[142px] top-[300px] left-[806px] font-normal text-white text-[20px] tracking-[0] leading-[30px]"
          style={{ fontFamily: 'Inter, Helvetica' }}
        >
          {product.nrOfReviews} Reviews
        </div>
        <div className="absolute w-[367px] h-[72px] top-[362px] left-[669px]">
          <div className="relative w-[365px] h-[72px] bg-collection-1-blue04 rounded-[17px]">
            <button className="
            absolute bg-brandBlue rounded-[17px] w-[247px] top-[3px] left-[15px] font-semibold text-white text-[40px] text-center tracking-[0] leading-[60px]" 
            onClick={() => CartService.addToCart(product)}
            >Add to cart             
            <img
              className="absolute w-[48px] h-[48px] top-[13px] left-[255px]"
              alt="Shopping cart"
              src="https://c.animaapp.com/2XehKRee/img/shopping-cart-4.png"
            />
            </button>
            
            {/* <img
              className="absolute w-[48px] h-[48px] top-[14px] left-[300px]"
              alt="Shopping cart"
              src="https://c.animaapp.com/2XehKRee/img/shopping-cart-4.png"
            />
            <div style={{ width: '100%', height: '100%', background: '#3956E5', borderRadius: 17 }} />
            <div
              className="absolute w-[247px] top-[3px] left-[45px] font-semibold text-white text-[40px] text-center tracking-[0] leading-[60px]"
              style={{ fontFamily: 'Inter, Helvetica' }}
            >
              Add to Cart
            </div> */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsAndImage;
