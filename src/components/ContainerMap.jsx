import React from "react";

import { Citys } from "./ListCity";

import map from "../assets/map.png";
import bird from "../assets/bird.png";

const ContainerMap = () => {
  return (
    <div className="w-full px-8 py-16">
      <div className="relative max-w-[1200px] mx-auto flex xl:grid lg:grid-cols-2 rounded-md shadow-shadow-map">
        <div className="px-8 md:pl-16 md:pr-32 py-16 flex flex-col justify-center mx-auto w-[70%] xl:w-full">
          <span className="text-yellow-dark text-xl">Encontrar</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-brown">
            Restaurantes
          </h1>
          <select
            name="select-city"
            id="select__city"
            className="outline-none border border-[#cecece] py-2 px-4 text-base lg:text-lg leading-9 w-full"
          >
            <option value="">SELECIONE UMA CIDADE</option>
            {Citys.map((city) => {
              return (
                <option value={city.value} className="" key={city.value}>
                  {city.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="bg-bg-map hidden xl:flex items-center justify-center px-16 py-16">
          <img
            src={map}
            alt="Desenho do mapa do Brasil na cor amarelada"
            className="w-[100%]"
          />
        </div>
        <div className="hidden xl:flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-4 px-4 bg-white shadow-shadow-map">
          <img src={bird} alt="Desenho de um pássaro" className="w-10" />
        </div>
      </div>
    </div>
  );
};

export default ContainerMap;
