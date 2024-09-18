import React, { useEffect } from "react";
import { Carousel } from "flowbite-react";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import AOS from "aos";
import "aos/dist/aos.css";

const PhoneHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <h1
        className="text-center text-3xl md:text-4xl xl:text-5xl  font-bold text-gray-700 my-8"
        data-aos="fade-up"
      >
        Toma el control desde tu móvil
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full">
        <div className="w-full lg:w-1/5 2xl:p-10 flex flex-col items-center lg:items-start">
          <ol className="flex flex-col gap-y-12 lg:gap-y-24" data-aos="fade-up">
            <div className="flex flex-row lg:flex-col justify-center lg:justify-start items-center text-gray-700 gap-2">
              <CheckCircleIcon className="text-[#61a730] w-5 md:w-6 h-5 md:h-6" />
              <li className="text-xl md:text-2xl font-bold text-center">
                Cotiza tus proyectos en cualquier lugar
              </li>
            </div>

            <div className="flex flex-row lg:flex-col justify-center lg:justify-start items-center text-gray-700 gap-4">
              <CheckCircleIcon className="text-[#61a730] w-5 md:w-6 h-5 md:h-6" />
              <li className="text-xl md:text-2xl font-bold text-center">
                Asigna tareas a tus asesores
              </li>
            </div>
          </ol>
        </div>

        <div
          className="w-full lg:w-1/2 h-[450px] md:h-[600px] flex items-center justify-center my-10"
          data-aos="fade-up"
        >
          <Carousel
            rightControl
            leftControl
            slideInterval={2000}
            className="w-full h-full p-8"
          >
            <img
              src="/Dashboard.png"
              alt="Dashboard"
              className="w-full h-full object-contain"
            />
            <img
              src="/Cotizaciones.png"
              alt="Cotizaciones"
              className="w-full h-full object-contain"
            />
            <img
              src="/Productos.png"
              alt="Productos"
              className="w-full h-full object-contain"
            />
            <img
              src="/Actividades.png"
              alt="Actividades"
              className="w-full h-full object-contain"
            />
            <img
              src="/Chatbot.png"
              alt="Chatbot"
              className="w-full h-full object-contain"
            />
          </Carousel>
        </div>

        <div className="w-full lg:w-1/5 2xl:p-10 flex flex-col items-center lg:items-end">
          <ol className="flex flex-col gap-y-12 lg:gap-y-24" data-aos="fade-up">
            <div className="flex flex-row lg:flex-col justify-center items-center text-gray-700 gap-4">
              <CheckCircleIcon className="text-[#61a730] w-5 md:w-6 h-5 md:h-6" />
              <li className="text-xl md:text-2xl font-bold text-center">
                Productos de las mejores marcas
              </li>
            </div>
            <div className="flex flex-row lg:flex-col justify-center lg:justify-end items-center text-gray-700 gap-4">
              <CheckCircleIcon className="text-[#61a730] w-5 md:w-6 h-5 md:h-6" />
              <li className="text-xl md:text-2xl font-bold text-center">
                Chat en vivo para soporte
              </li>
            </div>
          </ol>
        </div>
      </div>
    </>
  );
};

export default PhoneHero;
