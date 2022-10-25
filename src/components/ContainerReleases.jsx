import React, { useRef } from "react";

import { GrNext, GrPrevious } from "react-icons/gr";
import { IoMdAddCircleOutline } from "react-icons/io";

import { Images } from "./ImagesReleases";

const ContainerReleases = () => {
  const refSlide = useRef(null);

  const handleNext = (e) => {
    e.preventDefault();
    refSlide.current.scrollLeft += refSlide.current.offsetWidth;
  };
  const handlePrev = (e) => {
    e.preventDefault();
    refSlide.current.scrollLeft -= refSlide.current.offsetWidth;
  };

  return (
    <div className="w-full px-8 my-8">
      <div className="max-w-[1200px] mx-auto relative">
        <div>
          <span className="text-yellow-dark text-xl">Nossos</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-brown">
            Lançamentos
          </h1>
        </div>
        <div className="w-full">
          <div className="absolute top-[20%] right-0 hidden lg:flex flex-row-reverse gap-4">
            <div
              className="cursor-pointer p-2 shadow-shadow-map btn__next"
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
                <div
                  className="flex-none cursor-grab relative overflow-hidden item__releases"
                  key={item.url}
                >
                  <div className="w-[500px] lg:w-[350px] xl:w-[250px]">
                    <img src={item.url} alt="" />
                  </div>
                  <div className="info__releases absolute left-0 right-0 bottom-[-100%] bg-brown/70 flex flex-col items-center justify-end text-white">
                    <IoMdAddCircleOutline className="text-3xl" />
                    <strong className="font-normal mt-2 mb-4 text-xl">
                      NOME DA COMIDA
                    </strong>
                    <span className="text-yellow-dark text-base font-medium mb-3">
                      VER MAIS
                    </span>
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
