import React, { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const Navbars = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingUp = prevScrollPos > currentScrollPos;
    setVisible(isScrollingUp || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);

    if (!isScrollingUp && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Navbar
        className={`w-full sticky top-0 z-50 transition-all duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link to="/">
          <img
            src="/sunexpert.png"
            className="mr-3 ml-10 md:ml-16 h-8 md:h-9"
            alt="Logo sunexpert"
          />
        </Link>
        <div className="flex md:order-2">
          <Link to="/contact">
            <button className="hidden md:flex bg-[#61a730] hover:bg-[#73c23b] shadow-2xl transition-all p-2 rounded-lg text-white font-semibold mr-16">
              Solicitar demo
            </button>
          </Link>
          <Navbar.Toggle className="mr-10" onClick={toggleMenu} />
        </div>
        <ul className="hidden md:flex flex-row gap-10 text-lg font-semibold">
          <li className="relative group">
            <Link
              to="/"
              className="hover-underline text-gray-700 hover:text-gray-500 transition-all cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/plans"
              className="hover-underline text-gray-700 hover:text-gray-500 transition-all cursor-pointer"
            >
              Planes
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/contact"
              className="hover-underline text-gray-700 hover:text-gray-500 transition-all cursor-pointer"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </Navbar>

      {/* Menú desplegable para mobil */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 z-40">
          <ul className="flex flex-col items-center gap-6 p-6 text-lg font-semibold shadow-2xl rounded-b-3xl bg-white">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-500 transition-all cursor-pointer "
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/plans"
                className="text-gray-700 hover:text-gray-500 transition-all cursor-pointer"
                onClick={toggleMenu}
              >
                Planes
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-500 transition-all cursor-pointer"
                onClick={toggleMenu}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbars;
///////////
