// import '../App.css'; 
// import React from "react";
// import '../index.css';
// import 'tailwindcss/tailwind.css'
// import ProductDetail from '../components/ProductDetail';

// const ProductPage = () => {
//   return (
//     <div>
//       <ProductDetail />
//     </div>
//   )
// }
// export default ProductPage;

// export const ProductPage = () => {
  

//   return (
//   <div className="bg-brandBgLight flex flex-row justify-center w-full">
//     <div className= "w-[1512px] h-[982px] relative">
//       <div className="absolute top-[712px] left-[414px] font-normal text-white text-[40px] text-center tracking-[0] leading-[60px] underline whitespace-nowrap" style={{fontFamily: 'Play, Helvetica'}}>
//         About
//       </div>
//       <div className="absolute top-[712px] left-[551px] font-normal text-white text-[40px] text-center tracking-[0] leading-[60px] whitespace-nowrap" style={{fontFamily: 'Play, Helvetica'}}>
//         Specifications
//       </div>
//       <div className="absolute top-[712px] left-[847px] font-normal text-white text-[40px] text-center tracking-[0] leading-[60px] whitespace-nowrap" style={{fontFamily: 'Play, Helvetica'}}>
//         Reviews
//       </div>
//       <p className="absolute w-[455px] top-[772px] left-[414px] font-normal text-white text-[32px] tracking-[0] leading-[48px]" style={{fontFamily: 'Pontano_Sans, Helvetica'}}>
//         Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles
//       </p>
//       <div className="absolute w-[1092px] h-[471px] top-[199px] left-[339px]">
//         <div className="absolute w-[1036px] h-[437px] top-[34px] left-0">
//           <div className="absolute w-[367px] h-[72px] top-[362px] left-[669px]">
//             <div className="relative w-[365px] h-[72px] bg-collection-1-blue04 rounded-[17px]">
//               <img
//                 className="absolute w-[48px] h-[48px] top-[14px] left-[300px]"
//                 alt="Shopping cart"
//                 src="https://c.animaapp.com/2XehKRee/img/shopping-cart-4.png"
//               />
//               <div style={{width: '100%', height: '100%', background: '#3956E5', borderRadius: 17}} />
//               <div className="absolute w-[247px] top-[3px] left-[45px] font-semibold text-white text-[40px] text-center tracking-[0] leading-[60px]" style={{fontFamily: 'Inter, Helvetica'}}>
//                 Add to Cart
//               </div>
//             </div>
//           </div>
//           <img
//             className="absolute w-[125px] h-[24px] top-[303px] left-[667px]"
//             alt="Star ratings"
//             src="https://c.animaapp.com/2XehKRee/img/star-ratings@2x.png"
//           />
//           <div className="absolute w-[142px] top-[300px] left-[806px] font-normal text-white text-[20px] tracking-[0] leading-[30px]" style={{fontFamily: 'Inter, Helvetica'}}>
//             864 Reviews
//           </div>
//           <div className="absolute w-[910px] h-[429px] top-[8px] left-0">
//             <p className="absolute w-[270px] top-[201px] left-[640px] text-shadow-[0px_4px_4px_#00000040] font-normal text-white text-[64px] text-center tracking-[0] leading-[96px] whitespace-nowrap" style={{fontFamily: 'Inter, Helvetica'}}>
//               <span className="text-[#24df06]">$</span>
//               <span className="text-white"> 19.99</span>
//             </p>
//             <div className="absolute w-[243px] top-[193px] left-[667px] font-light text-white text-[20px] tracking-[0] leading-[30px] whitespace-nowrap" style={{fontFamily: 'Roboto, Helvetica'}}>
//               Category: 3D-effects
//             </div>
//             <div className="absolute top-[169px] left-[667px] font-extralight text-white text-[20px] text-center tracking-[0] leading-[30px] whitespace-nowrap" style={{fontFamily: 'Inter, Helvetica'}}>
//               Creator: John Johnson
//             </div>
//             <img
//               className="absolute w-[648px] h-[429px] top-0 left-0 object-cover"
//               alt="Unsplash"
//               src="https://c.animaapp.com/2XehKRee/img/unsplash-ttsebukwps8.png"
//             />
//           </div>
//           <div 
//         className="absolute w-[312px] top-0 left-[667px] font-bold text-brandTextOrange text-[40px] tracking-[0] leading-[60px]" 
//         style={{fontFamily: 'Inter, Helvetica' }}
//       >
//             3D-effects of motion graphics
//           </div>
//         </div>
//       </div>
//       <img
//         className="absolute w-[197px] h-[126px] top-[391px] left-[125px] object-cover"
//         alt="Unsplash vtzujbsafsy"
//         src="https://c.animaapp.com/2XehKRee/img/unsplash-vtzujbsafsy@2x.png"
//       />
//       <img
//         className="absolute w-[197px] h-[126px] top-[241px] left-[126px] object-cover"
//         alt="Unsplash lnpxoooamnk"
//         src="https://c.animaapp.com/2XehKRee/img/unsplash-lnpxoooamnk@2x.png"
//       />
//       <img
//         className="absolute w-[197px] h-[126px] top-[541px] left-[125px] object-cover"
//         alt="Unsplash fkaanwckmfc"
//         src="https://c.animaapp.com/2XehKRee/img/unsplash-fkaanwckmfc@2x.png"
//       />
//       <div className="absolute w-[72px] h-[14px] top-[679px] left-[616px]">
//         <div className="left-[58px] bg-white absolute w-[14px] h-[14px] top-0 rounded-[7px]" />
//         <div 
//           className="left-[19px] absolute w-[14px] h-[14px] top-0 rounded-[7px]" 
//           style={{ background: 'linear-gradient(90deg, black 0%, white 73%, white 100%)' }} 
//         />
//         <div className="left-[38px] bg-white absolute w-[14px] h-[14px] top-0 rounded-[7px]" />
//         <div className="left-0 bg-[#000000] absolute w-[14px] h-[14px] top-0 rounded-[7px]" />
//       </div>
//     </div>
//   </div>
//   )
// }
// export default ProductPage;
