import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <section className="">
        <div className="container flex items-center h-screen px-6 mx-auto">
          <div className="flex flex-col items-center md:w-[60%] lg:w-[40%] mx-auto text-center">
            <img src="/404.png" alt="Macbook" className="w-full rounded-xl" />
            <div className="flex items-center w-full md:w-auto mt-6 gap-x-3">
              <button className="flex items-center justify-center m-auto w-1/2 md:w-full px-2 md:px-5 py-2 text-xs md:text-sm text-gray-700 transition-colors border rounded-lg gap-x-2 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180 bg-transparent"
                >
                  <path d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <Link
                  to="/"
                  className=" bg-transparent transition-all cursor-pointer"
                >
                  Volver al inicio
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error404;
