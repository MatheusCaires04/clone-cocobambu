import React, { useRef } from "react";

import { GrNext, GrPrevious } from "react-icons/gr";

import { Images } from "./ImagesReleases";

const ContainerReleases = () => {
  const refSlide = useRef(null);

  const handleNext = (e) => {
    e.preventDefault();
    console.log(refSlide.current.offsetWidth);
    refSlide.current.scrollLeft += refSlide.current.offsetWidth;
  };
  const handlePrev = (e) => {
    e.preventDefault();
    console.log(refSlide.current.offsetWidth);
    refSlide.current.scrollLeft -= refSlide.current.offsetWidth;
  };

  return (
    <div className="w-full px-8 my-8">
      <div className="max-w-[1100px] mx-auto relative">
        <div>
          <span className="text-yellow-dark text-xl">Nossos</span>
          <h1 className="text-3xl lg:text-5xl font-bold mb-8 text-brown">
            Lançamentos
          </h1>
        </div>
        <div className="w-full">
          <div className="absolute top-[20%] right-0 hidden md:flex flex-row-reverse gap-4">
            <div
              className="cursor-pointer p-2 shadow-shadow-map"
              onClick={handleNext}
            >
              <GrNext />
            </div>
            <div
              className="cursor-pointer p-2 shadow-shadow-map"
              onClick={handlePrev}
            >
              <GrPrevious />
            </div>
          </div>
          <div
            className="flex overflow-x-auto scroll-smooth gap-8 scrollbar-hide"
            ref={refSlide}
          >
            {Images.map((item) => {
              return (
                <div className="flex-none cursor-grab" key={item.url}>
                  <div className="w-[250px]">
                    <img src={item.url} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerReleases;
