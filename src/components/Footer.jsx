import React from "react";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdOutlineNavigateNext } from "react-icons/md";

import logo_footer from "../assets/logo-footer.png";
import logo_app_store from "../assets/Logo_App-Store.png";
import logo_google_play from "../assets/Logo_Google-Play.png";

const Footer = () => {
  return (
    <div className="bg-brown w-full px-8 mt-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="xl:flex py-16 xl:py-24 gap-[25px]">
          <div className="w-[300px] flex flex-col xl:justify-between">
            <a href="#" className="mb-4">
              <img src={logo_footer} alt="" className="w-72" />
            </a>
            <div className="flex gap-8 text-xl">
              <a
                href="#"
                className="p-2 rounded-full bg-white hover:first:rotate-6"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white hover:last:rotate-6"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="flex w-[400px] text-white font-normal text-lg 2xl:text-xl my-8 xl:my-0">
            <ul className="flex flex-col gap-3 w-[50%]">
              <li className="hover:underline">
                <a href="#">Quem somos</a>
              </li>
              <li className="hover:underline">
                <a href="#">Unidades</a>
              </li>
              <li className="hover:underline">
                <a href="#">Nossos Produtos</a>
              </li>
              <li className="hover:underline">
                <a href="#">Eventos</a>
              </li>
              <li className="hover:underline">
                <a href="#">Contato</a>
              </li>
            </ul>
            <ul className="flex flex-col gap-3 w-[50%]">
              <li className="hover:underline">
                <a href="#">Trabalhe conosco</a>
              </li>
              <li className="hover:underline">
                <a href="#">Política de privacidade</a>
              </li>
            </ul>
          </div>
          <div className="w-[450px]">
            <div className="flex">
              <a href="#">
                <img
                  src={logo_app_store}
                  alt="Botão com direcionamento para download na App Store"
                  className="border border-[#cecece] bg-brown-dark px-3 py-1 hover:bg-brown duration-150 rounded-lg w-[80%]"
                />
              </a>
              <a href="#">
                <img
                  src={logo_google_play}
                  alt="Botão com direcionamento para download na Google Play"
                  className="border border-[#cecece] bg-brown-dark px-3 py-1 hover:bg-brown duration-150 rounded-lg w-[80%]"
                />
              </a>
            </div>
            <form action="" className="mt-6">
              <span className="text-lg text-yellow-dark font-bold">
                NEWSLETTER
              </span>
              <div className="border border-white relative py-2 px-4 rounded-xl">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full text-lg py-1 px-2 outline-none border-none bg-bg-transparent placeholder:text-white text-white"
                  placeholder="E-mail"
                />
                <MdOutlineNavigateNext className="absolute top-[50%] translate-y-[-50%] right-4 text-white text-2xl font-black bg-yellow-dark cursor-pointer rounded-md" />
              </div>
              <div className="flex items-center mt-2">
                <input type="checkbox" id="confirm" />
                <label for="confirm" className="ml-2 text-base text-white">
                  Aceito a <a href="#">política de privacidade</a>
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="border-t-[1px] border-white pt-4 pb-8 text-white">
          <span>
            Copyright &copy; 2022 Coco Bambu - Todos os direitos reservados
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
