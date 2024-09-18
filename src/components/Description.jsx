import React, { useEffect } from "react";
import {
  UserGroupIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";

const Description = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="p-4 mt-2 md:mt-10 lg:-mt-14">
      <h1
        className="text-center text-3xl md:text-4xl xl:text-5xl font-bold text-gray-700 mb-6"
        data-aos="fade-right"
      >
        ¿Qué obtienes?
      </h1>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-10 shadow-lg rounded-2xl flex flex-col items-center">
          <div className="flex flex-row items-center gap-2 mb-2">
            <h2 className="text-xl md:text-2xl text-gray-700 font-bold">
              +Control
            </h2>
            <ChartBarIcon className="w-6 md:w-8 h-6 md:h-8 text-gray-700" />
          </div>
          <p className="text-center text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            repudiandae fuga ea dignissimos nisi sit quo? Facere labore ratione
            ipsam illo maxime necessitatibus? Pariatur, minus rem quaerat quod
            nemo aut.
          </p>
        </div>
        <div className="p-10 shadow-lg rounded-2xl flex flex-col items-center">
          <div className="flex flex-row items-center gap-2 mb-2">
            <h2 className="text-xl md:text-2xl text-gray-700 font-bold">
              Herramientas
            </h2>
            <WrenchScrewdriverIcon className="w-6 md:w-8 h-6 md:h-8 text-gray-700" />
          </div>
          <p className="text-center text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            nesciunt repellendus, quod libero explicabo dicta, culpa cupiditate
            aperiam veritatis necessitatibus quaerat quae possimus excepturi
            harum recusandae mollitia eius itaque. Deserunt!
          </p>
        </div>
        <div className="p-10 shadow-lg rounded-2xl flex flex-col items-center">
          <div className="flex flex-row items-center gap-2 mb-2">
            <h2 className="text-xl md:text-2xl text-gray-700 font-bold">
              Atención
            </h2>
            <UserGroupIcon className="w-6 md:w-8 h-6 md:h-8 text-gray-700" />
          </div>
          <p className="text-center text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            reprehenderit voluptas temporibus doloremque quis quos cum culpa,
            consequatur nemo cupiditate, ipsum at cumque sequi, quam delectus
            corporis deleniti minima sapiente.
          </p>
        </div>
        <div className="p-10 shadow-lg rounded-2xl flex flex-col items-center">
          <div className="flex flex-row items-center gap-2 mb-2">
            <h2 className="text-xl md:text-2xl text-gray-700 font-bold">
              Stock
            </h2>
            <ShoppingCartIcon className="w-6 md:w-8 h-6 md:h-8 text-gray-700" />
          </div>
          <p className="text-center text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ad
            in dignissimos temporibus quam nemo eos voluptates, autem illo hic,
            rerum est iusto pariatur! Obcaecati libero voluptatem placeat beatae
            quod.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
