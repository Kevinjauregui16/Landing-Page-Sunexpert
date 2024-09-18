import React, { useEffect } from "react";
import { FcContacts, FcBullish, FcStatistics, FcPlanner } from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";

const Process = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="mb-16 xl:mb-28 flex flex-col justify-center items-center">
      <h1
        className="text-center text-3xl md:text-4xl xl:text-5xl my-10 font-bold text-gray-700"
        data-aos="fade-left"
      >
        Proceso sunexpert
      </h1>
      <ul className="grid gap-3 md:gap-10 text-lg md:text-2xl text-gray-700 font-bold grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mx-6">
        <li className="flex flex-col justify-center items-center shadow-lg p-4 rounded-2xl gap-y-2">
          <FcContacts className="w-10 md:w-14 h-10 md:h-14" />
          <span className="text-center">
            Alta de <br /> cliente
          </span>
        </li>
        <li className="flex flex-col justify-center items-center shadow-lg p-4 rounded-2xl gap-y-2">
          <FcStatistics className="w-10 md:w-14 h-10 md:h-14" />
          <span className="text-center">
            Creacion de <br /> prospecto
          </span>
        </li>
        <li className="flex flex-col justify-center items-center shadow-lg p-4 rounded-2xl gap-y-2">
          <FcBullish className="w-10 md:w-14 h-10 md:h-14" />
          <span className="text-center">
            Generacion de <br />
            cotizacion
          </span>
        </li>
        <li className="flex flex-col justify-center items-center shadow-lg p-4 rounded-2xl gap-y-2">
          <FcPlanner className="w-10 md:w-14 h-10 md:h-14" />
          <span className="text-center">
            Agenda de <br /> actividad
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Process;
