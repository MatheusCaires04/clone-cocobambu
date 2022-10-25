import React, { useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import Logo from "../assets/logo.png";
import br from "../assets/brazil.svg";
import eua from "../assets/eua.svg";
import site_yzzer from "../assets/logo-site-yzzer.png";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
  };

  const links = [
    {
      id: 0,
      text: "QUEM SOMOS",
    },
    {
      id: 1,
      text: "UNIDADES",
    },
    {
      id: 2,
      text: "EVENTOS",
    },
    {
      id: 3,
      text: "NOSSOS PRODUTOS",
    },
    {
      id: 4,
      text: "CONTATO",
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 bg-white h-24 px-8 shadow-lg z-[9999]">
      <div className="max-w-[1200px] mx-auto h-full flex items-center">
        <a href="#">
          <img
            src={Logo}
            alt="Logo do COCO BAMBU, na cor brown com um desenho de uma arara tomando agua de coco"
            className="w-56"
          />
        </a>
        <nav className="w-full hidden xl:flex items-center justify-end">
          <ul className="flex gap-4">
            {links.map((index) => {
              return (
                <li
                  key={index.id}
                  className="text-base h-[6rem] font-normal text-black"
                >
                  <a
                    href="#"
                    className="h-full items-center flex hover:stroke-[1px] hover:stroke-brown-dark hover:drop-shadow-link"
                  >
                    {index.text}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#"
            className="mx-4 text-base font-bold text-white bg-yellow-dark rounded-md w-24 py-1 text-center hover:bg-brown duration-150"
          >
            DELIVERY
          </a>
          <a href="#" className="w-24">
            <img src={site_yzzer} alt="/" className="w-full" />
          </a>
          <div className="flex flex-col gap-2 absolute right-4">
            <a href="#">
              <img
                src={eua}
                alt="Ícone com desenho da bandeira do EUA em suas cores predominantes"
                className="w-6 opacity-80 hover:opacity-100"
              />
            </a>
            <a href="#">
              <img
                src={br}
                alt="Ícone com desenho da bandeira do Brasil em suas cores predominantes"
                className="w-6 opacity-80 hover:opacity-100"
              />
            </a>
          </div>
        </nav>

        {/* MENU MOBILE */}
        <nav className="w-full flex xl:hidden justify-end">
          <div
            className="text-black flex xl:hidden text-3xl font-extrabold cursor-pointer"
            onClick={openMenu}
          >
            {!menu ? <HiMenuAlt3 /> : <AiOutlineClose />}
          </div>

          <div
            className={
              !menu
                ? "absolute h-screen w-full bg-white top-[100%] left-[100%] duration-200"
                : "absolute h-screen w-full bg-white top-[100%] left-0 duration-200"
            }
          >
            <div className="pl-16 w-full h-full fixed">
              <ul className="flex flex-col gap-4">
                {links.map((index) => {
                  return (
                    <li
                      key={index.id}
                      className="text-base font-semibold text-black"
                    >
                      <a
                        href="#"
                        className="h-full items-center flex hover:underline duration-100"
                      >
                        {index.text}
                      </a>
                    </li>
                  );
                })}
                <a
                  href="#"
                  className="my-4 text-base font-bold text-white bg-yellow-dark rounded-md w-24 py-1 text-center hover:bg-brown duration-150"
                >
                  DELIVERY
                </a>
                <a href="#" className="w-24">
                  <img src={site_yzzer} alt="/" className="w-full" />
                </a>
              </ul>
              <div className="flex gap-4 mt-4">
                <button href="#" className="w-6">
                  <img
                    src={eua}
                    alt="Ícone com desenho da bandeira do EUA em suas cores predominantes"
                    className=" opacity-80 hover:opacity-100"
                  />
                </button>
                <button href="#" className="w-6">
                  <img
                    src={br}
                    alt="Ícone com desenho da bandeira do Brasil em suas cores predominantes"
                    className="opacity-80 hover:opacity-100"
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
