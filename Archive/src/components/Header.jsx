import React from "react";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [offcanvasMenu, setOffcanvasMenu] = useState(false);
  const [offcanvasLang, setOffcanvasLang] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const dropdownRef = useRef(null); // ใช้ตรวจจับคลิกข้างนอก

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenLang(false); // ปิด dropdown ถ้าคลิกนอก element
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="bg-[#161616] text-white p-4 sticky-top sticky top-0 z-50">
      <div className="flex lg:hidden items-center justify-between ">
        <div className="w-[80px]">
          {" "}
          <img src="/images/header-icon-logo.png" alt="" />
        </div>
        <div>
          <button onClick={() => setOffcanvasLang(!offcanvasLang)}>
            <img src="/images/header-icon-flag.png" alt="" />
          </button>
          <button
            onClick={() => setOffcanvasMenu(!offcanvasMenu)}
            className="lg:hidden text-2xl text-gray-700 focus:outline-none ms-4"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        {/* offcanvas menu */}
      
          {offcanvasMenu && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setOffcanvasMenu(false)}
            ></div>
          )}
          <div
            className={`fixed top-0 right-0 h-full w-[310px] bg-[#161616] z-50 shadow-lg transform transition-transform duration-300 ${
              offcanvasMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col justify-between h-full pb-6">
              <div>
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <img
                      className="w-[80px]"
                      src="/images/header-icon-logo.png"
                      alt=""
                    />
                  </div>
                  <button
                    onClick={() => setOffcanvasMenu(false)}
                    className="text-gray-700 text-2xl"
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
                <ul className="p-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-[#C10000] text-start block w-full"
                    >
                      Markets
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-[#C10000] text-start block w-full"
                    >
                      Trading
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-[#C10000] text-start block w-full"
                    >
                      Investing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-[#C10000] text-start block w-full"
                    >
                      Tools & Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-[#C10000] text-start block w-full"
                    >
                      Company
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-[#C10000] text-start block w-full"
                    >
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-[#C10000] text-start block w-full"
                    >
                      Partner with us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center gap-4">
                <a href="#">
                  <img src="/images/appstore.png" alt="" />
                </a>
                <a href="#">
                  <img src="/images/googleplay.png" alt="" />
                </a>
              </div>{" "}
            </div>
          </div>
       
        {/* offcanvas lang */}

        {offcanvasLang && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setOffcanvasLang(false)}
          ></div>
        )}
        <div
          className={`fixed top-0 right-0 h-full w-[310px] bg-[#161616] z-50 shadow-lg transform transition-transform duration-300 ${
            offcanvasLang ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-between h-full pb-6">
            <div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <img
                    className="w-[80px]"
                    src="/images/header-icon-logo.png"
                    alt=""
                  />
                </div>
                <button
                  onClick={() => setOffcanvasLang(false)}
                  className="text-gray-700 text-2xl"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <ul className="p-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#C10000] text-start block w-full"
                  >
                    ไทย
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#C10000] text-start block w-full"
                  >
                    English
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center gap-4">
              <a href="#">
                <img src="/images/appstore.png" alt="" />
              </a>
              <a href="#">
                <img src="/images/googleplay.png" alt="" />
              </a>
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="hidden lg:flex">
        <div className="container mx-auto">
          <div className="flex flex-wrap text-[#eeeeee]">
            <div className="w-1/2 flex items-center text-[#5a5a5a] text-[10px] text-start">
              Member of HF Markets Group
            </div>
            <div className="w-1/2 flex justify-end items-center text-sm">
              <a
                href="#"
                className="flex items-center justify-center border-[1px] border-[#5a5a5a] py-[3px] px-[10px]"
              >
                <div className="me-2">
                  <img src="/images/header-icon-phone.png" alt="" />
                </div>
                <div>Download App</div>
              </a>
              <a
                href="#"
                className="px-4 border-r border-[#5a5a5a]  text-[#EEEEEE] hover:text-[#CD0511] transition duration-300"
              >
                Contact us
              </a>
              <a
                href="#"
                className="px-4 border-r border-[#5a5a5a]  text-[#EEEEEE] hover:text-[#CD0511] transition duration-300"
              >
                Partner with us
              </a>

              <div className="relative ps-4" ref={dropdownRef}>
                <button onClick={() => setOpenLang(!openLang)}>
                  <img src="/images/header-icon-flag.png" alt="" />
                </button>

                {openLang && (
                  <div className="absolute right-0 mt-2 w-32 bg-white text-black shadow-md z-10">
                    <ul>
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-100"
                          onClick={() => {
                            setOpenLang(false);
                            console.log("English selected");
                          }}
                        >
                          English
                        </button>
                      </li>
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-100"
                          onClick={() => {
                            setOpenLang(false);
                            console.log("Thai selected");
                          }}
                        >
                          ไทย
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-3/4 flex justify-start items-center">
              <a href="#" className="me-20 md:me-4">
                <img src="/images/header-icon-logo.png" alt="" />
              </a>
              <nav>
                <a
                  className="px-4 text-white hover:text-[#CD0511] transition duration-300"
                  href=""
                >
                  Markets
                </a>
                <a
                  className="px-4 text-white hover:text-[#CD0511] transition duration-300"
                  href=""
                >
                  Trading
                </a>
                <a
                  className="px-4 text-white hover:text-[#CD0511] transition duration-300"
                  href=""
                >
                  Investing
                </a>
                <a
                  className="px-4 text-white hover:text-[#CD0511] transition duration-300"
                  href=""
                >
                  Tools & Education
                </a>
                <a
                  className="px-4 text-white hover:text-[#CD0511] transition duration-300"
                  href=""
                >
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
