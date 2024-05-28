import PropTypes from "prop-types";
import React from "react";
import '../index.css';
import 'tailwindcss/tailwind.css';

// Navbar Component
export const Navbar = ({
  property1 = "default",
  logoLogo = "https://c.animaapp.com/2XehKRee/img/logo-2@2x.png",
  search = "https://c.animaapp.com/2XehKRee/img/search-1.svg",
  user = "https://c.animaapp.com/2XehKRee/img/user-1.svg",
  shoppingCart = "https://c.animaapp.com/2XehKRee/img/shopping-cart.svg",
  img = "https://c.animaapp.com/2XehKRee/img/shopping-cart-1.svg",
}) => {
  return (
    <div className="flex justify-center bg-white relative">
      <div className="w-[1512px] h-[154px] bg-white relative">
        <div className="w-[1108px] left-[32px] top-[30px] h-[124px] absolute">
          <div className="w-[805px] left-0 top-0 h-[124px] absolute">
            <div className="w-[589px] left-[216px] top-[70px] h-[45px] absolute">
              <div className="w-[379px] left-[204px] top-0 h-[45px] absolute">
                <div className="w-[204px] left-0 text-center text-[25px] text-[#000000] h-[45px] font-medium absolute">
                  Packages
                </div>
                <div className="w-[204px] left-[175px] text-center text-[25px] text-[#000000] h-[45px] font-medium absolute">
                  Tools
                </div>
              </div>
              <div className="w-[204px] left-0 text-center text-[25px] text-[#000000] h-[45px] font-medium absolute">
                <a href="/graphics">Graphics</a>
              </div>
            </div>
            <a href="/">
              <Logo className="left-0 top-0" logo={logoLogo} />
            </a>
          </div>
          <div className="border-2 border-solid border-[#000000] w-[840px] flex left-[268px] items-center top-[6px] gap-[12px] pl-[12px] pr-[16px] py-[8px] h-[58px] rounded-[8px] bg-white absolute">
            <img
              className="w-[24px] h-[24px] relative"
              alt="Search"
              src={property1 === "variant-2" ? "search.svg" : search}
            />
            <div className="flex-1 text-[#828282] overflow-hidden relative">
              Search
            </div>
          </div>
        </div>
        <div
          className={`absolute ${property1 === "variant-2" ? "w-[152px]" : "w-[251px]"} ${
            property1 === "variant-2" ? "left-[1328px]" : "left-[1229px]"
          } ${property1 === "variant-2" ? "top-[26px]" : "top-[15px]"} ${
            property1 === "variant-2" ? "h-[65px]" : "h-[129px]"
          }`}
        >
          {property1 === "variant-2" && (
            <>
              <img className="absolute w-[55px] h-[59px] top-[6px] left-[97px]" alt="User" src={user} />
              <img className="absolute w-[53px] h-[47px] top-[12px] left-0" alt="Shopping cart" src={img} />
              <Badge
                badgeLabelClassName="!left-[7px] !top-[7px]"
                badgeLabelSingleDigit="3"
                className="!h-[27px] !absolute !left-[39px] !w-[27px] !top-0"
                size="large-single-digit"
              />
            </>
          )}

          {property1 === "default" && (
            <div className="absolute w-[152px] h-[65px] top-[11px] left-[99px]">
              <img className="absolute w-[55px] h-[59px] top-[6px] left-[97px]" alt="User" src={user} />
              <div className="absolute w-[66px] h-[59px] top-0 left-0">
                <img className="absolute w-[53px] h-[47px] top-[12px] left-0" alt="Shopping cart" src={shoppingCart} />
                <Badge
                  badgeLabelClassName="!left-[7px] !top-[7px]"
                  badgeLabelSingleDigit="3"
                  className="!h-[27px] !absolute !left-[39px] !w-[27px] !top-0"
                  size="large-single-digit"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Logo Component
const Logo = ({ className, logoClassName, logo }) => {
  return (
    <div className={`relative w-[216px] h-[116px] ${className}`}>
      <img className={`absolute w-[171px] h-[92px] top-0 left-0 object-cover ${logoClassName}`} alt="Logo" src={logo} />
    </div>
  );
};

// Badge Component
const Badge = ({ badgeLabelClassName, badgeLabelSingleDigit, className, size }) => {
  return (
    <div className={`relative ${className}`}>
      <div className={`absolute text-white bg-red-600 rounded-full text-center ${size === "large-single-digit" ? "w-[27px] h-[27px]" : ""} ${badgeLabelClassName}`}>
        {badgeLabelSingleDigit}
      </div>
    </div>
  );
};

// PropTypes and DefaultProps for Navbar
Navbar.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  logoLogo: PropTypes.string,
  search: PropTypes.string,
  user: PropTypes.string,
  shoppingCart: PropTypes.string,
  img: PropTypes.string,
};

// PropTypes and DefaultProps for Logo
Logo.propTypes = {
  className: PropTypes.string,
  logoClassName: PropTypes.string,
  logo: PropTypes.string,
};

Logo.defaultProps = {
  className: "",
  logoClassName: "",
  logo: "https://c.animaapp.com/2XehKRee/img/logo-2@2x.png",
};

// PropTypes and DefaultProps for Badge
Badge.propTypes = {
  badgeLabelClassName: PropTypes.string,
  badgeLabelSingleDigit: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
};

Badge.defaultProps = {
  badgeLabelClassName: "",
  className: "",
  size: "large-single-digit",
};

export default Navbar;
