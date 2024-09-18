import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Demo = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: !isLargeScreen,
    });
  }, [isLargeScreen]);

  return (
    <div
      className={`flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-20 shadow-xl py-8 lg:py-10 2xl:py-16 w-[90%] md:w-[80%] mx-auto mt-8 md:mt-12 max-lg:px-10 rounded-2xl ${
        isLargeScreen ? "data-aos" : ""
      }`}
      data-aos={isLargeScreen ? "fade-left" : ""}
    >
      <h1 className="text-2xl md:text-3xl 2xl:text-5xl text-gray-700 font-bold text-center md:text-left">
        Ponte en contacto para solicitar tu demo{" "}
        <br className="hidden md:block" /> o adquirir tu plan
      </h1>
      <Link to="/contact">
        <button className="bg-[#61a730] hover:bg-[#73c23b] shadow-2xl transition-all w-32 2xl:w-48 h-10 rounded-lg mt-auto text-white font-semibold">
          Vamos
        </button>
      </Link>
    </div>
  );
};

export default Demo;
