import React from "react";

import desktop_banner_1 from "../assets/banner-1.png";
import desktop_banner_2 from "../assets/banner-2.png";
import desktop_banner_3 from "../assets/banner-3.png";
import desktop_banner_4 from "../assets/banner-4.jpg";
import desktop_banner_5 from "../assets/banner-5.png";
import desktop_banner_6 from "../assets/banner-6.jpg";
import desktop_banner_7 from "../assets/banner-7.png";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-6rem)] mt-[6rem] pb-8">
      <div className="w-full h-full overflow-auto scrollbar-hide">
        <div className="w-[400%] h-full flex">
          <div className="bg-brown w-[25%] h-full"></div>
          <div className="bg-brown-dark w-[25%] h-full"></div>
          <div className="bg-brown w-[25%] h-full"></div>
          <div className="bg-brown-dark w-[25%] h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
