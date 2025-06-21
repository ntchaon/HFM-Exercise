import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-[#161616] text-white p-4 sticky-top sticky top-0 z-50">
      <div className="flex lg:hidden items-center justify-between ">
        <div className="w-[80px]">
          {" "}
          <img src="/images/header-icon-logo.png" alt="" />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2">
          <a href="#" className="text-gray-700 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-white">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-white">
            Contact
          </a>
        </div>
      )}
      <div className="hidden lg:flex">
        <div className="container mx-auto">
          <div className="flex flex-wrap text-[#eeeeee]">
            <div className="w-1/2 flex items-center text-[#5a5a5a] text-[10px] text-start">
              Member of HF Markets Group
            </div>
            <div className="w-1/2 flex justify-end items-center text-sm">
              <div className="flex items-center justify-center border-[1px] border-[#5a5a5a] rounded py-[3px] px-[10px]">
                <div className="me-2">
                  <img src="/images/header-icon-phone.png" alt="" />
                </div>
                <div>Download App</div>
              </div>
              <div className="px-4 border-r border-[#5a5a5a]">Contact us</div>
              <div className="px-4 border-r border-[#5a5a5a]">
                Partner with us
              </div>
              <div className="ps-4">
                <img src="/images/header-icon-flag.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-3/4 flex justify-start items-center">
              <div className="me-20">
                <img src="/images/header-icon-logo.png" alt="" />
              </div>
              <nav>
                <a className="px-4" href="">
                  Markets
                </a>
                <a className="px-4" href="">
                  Trading
                </a>
                <a className="px-4" href="">
                  Investing
                </a>
                <a className="px-4" href="">
                  Tools & Education
                </a>
                <a className="px-4" href="">
                  Company
                </a>
              </nav>
            </div>
            <div className="w-1/4 flex justify-end items-center">
              <button className="hover:bg-red-600 transition duration-300 border-[1px] border-red-600 rounded-[4px] py-1 px-4 me-4">
                Login
              </button>
              <button className=" bg-[#179149] hover:bg-[#0f6933] transition duration-300  border-[1px] border-[#179149] hover:border-[#0f6933] rounded-[4px] py-1 px-4">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
