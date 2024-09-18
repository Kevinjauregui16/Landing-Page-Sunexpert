import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PlayIcon } from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 10000, // duración de la animación en milisegundos
    });
  }, []);

  return (
    <div className="h-3/4 md:h-1/2 lg:h-screen max-md:pb-14 w-full flex flex-col md:flex-row items-center justify-start md:justify-center overflow-hidden gap-x-10">
      <div
        className="w-full md:w-1/2 2xl:w-1/4 flex flex-col justify-center items-center md:items-start gap-y-4 md:gap-y-3 xl:gap-y-6 md:ml-20"
        data-aos="fade-right"
      >
        <h1 className="text-gray-600 max-md:text-center text-5xl 2xl:text-7xl font-extrabold">
          <span className="font-semibold text-2xl 2xl:text-4xl text-gray-500">
            Revoluciona
          </span>
          <br /> La gestión de tus proyectos con{" "}
          <span className="text-[#61a730] text-6xl 2xl:text-8xl font-extrabold bg-transparent">
            sun
          </span>
          <span className="text-[#5B5656] text-6xl 2xl:text-8xl font-extrabold bg-transparent">
            expert
          </span>
        </h1>
        <p className="max-md:text-center max-md:mx-6 text-lg 2xl:text-2xl font-semibold text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          exercitationem ea nam, ex inventore adipisci quod vitae! Similique
          sunt a porro ea tempora facere, voluptatibus velit odit, earum ab
          nobis.
        </p>
        <div className="md:hidden w-full flex justify-center items-center">
          <img
            src="/HeroMac.png"
            alt="Hero"
            className="w-[95%]"
            data-aos="fade-left"
          />
        </div>
        <div className="flex items-center gap-x-6">
          <Link to="/contact">
            <button className="bg-[#61a730] hover:bg-[#73c23b] shadow-2xl transition-all p-2 rounded-lg text-white font-semibold">
              Solicitar demo
            </button>
          </Link>
          <Link to="#">
            <button className="flex flex-row gap-1 border-2 border-[#61a730] shadow-2xl transition-all p-2 rounded-lg text-[#61a730] hover:text-[#73c23b] font-semibold">
              Ver demostracion <PlayIcon className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </div>

      <div
        className="hidden md:flex md:w-1/2 justify-center items-center"
        data-aos="fade-left"
      >
        <img src="/HeroMac.png" alt="Hero" className="w-[90%] rounded-2xl" />
      </div>
    </div>
  );
};

export default Hero;
