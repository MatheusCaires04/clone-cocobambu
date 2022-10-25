import React from "react";

import phone from "../assets/phone.png";

const ContainerRequests = () => {
  return (
    <div className="bg-white px-8 py-8 w-full">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="box__1 px-8 lg:pl-16 rounded-md overflow-hidden relative w-[80%] md:w-[60%] lg:w-full mx-auto">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black" />
          <div className="z-10 text-white">
            <span className="text-yellow-dark font-semibold text-lg">
              FAÇA SUA
            </span>
            <h1 className="text-3xl md:text-5xl font-bold">RESERVA</h1>
            <p className="text-lg leading-5 mt-6 mb-4 w-full md:w-[60%]">
              Realizando a Reserva Online você garante seu lugar com segurança.
            </p>
            <button className="bg-yellow-dark py-1 px-4 rounded-md font-semibold text-base hover:bg-brown-dark duration-150">
              FAÇA SUA RESERVA
            </button>
            <a href="#" className="absolute top-0 left-0 right-0 bottom-0"></a>
          </div>
        </div>
        <div className="box__2 px-8 lg:pl-16 rounded-md overflow-hidden relative w-[80%] md:w-[60%] lg:w-full mx-auto">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black" />
          <div className="z-10 text-white">
            <span className="text-yellow-dark font-semibold text-lg">
              PEÇA PELO NOSSO
            </span>
            <h1 className="text-3xl md:text-5xl font-bold">DELIVERY</h1>
            <p className="text-lg leading-5 mt-6 mb-4 w-full md:w-[60%]">
              Coma o melhor Coco Bambu em qualquer lugar! Peça nossos pratos no
              conforto da sua casa.
            </p>
            <button className="bg-yellow-dark py-1 px-4 rounded-md font-semibold text-base hover:bg-brown-dark duration-150">
              FAÇA SEU PEDIDO
            </button>
            <a href="#" className="absolute top-0 left-0 right-0 bottom-0"></a>
            <img
              src={phone}
              alt="/"
              className="hidden md:flex absolute right-[-2rem] top-[50%] translate-y-[-50%] w-72"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerRequests;
