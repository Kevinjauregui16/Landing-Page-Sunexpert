import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Plans = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const plans = [
    {
      title: "Demo gratuito",
      price: 0,
      period: "15 dias",
      features: [
        { text: "1 team members", available: true },
        { text: "5GB Cloud storage", available: true },
        { text: "Integration help", available: true },
        { text: "Sketch Files", available: false },
        { text: "API Access", available: false },
        { text: "Complete documentation", available: false },
        { text: "24×7 phone & email support", available: false },
      ],
    },
    {
      title: "Standard plan",
      price: 499,
      period: "month",
      features: [
        { text: "2 team members", available: true },
        { text: "20GB Cloud storage", available: true },
        { text: "Integration help", available: true },
        { text: "Sketch Files", available: false },
        { text: "API Access", available: false },
        { text: "Complete documentation", available: false },
        { text: "24×7 phone & email support", available: false },
      ],
    },
    {
      title: "Premium plan",
      price: 999,
      period: "month",
      features: [
        { text: "10 team members", available: true },
        { text: "50GB Cloud storage", available: true },
        { text: "Priority integration help", available: true },
        { text: "Sketch Files", available: true },
        { text: "API Access", available: true },
        { text: "Complete documentation", available: true },
        { text: "24×7 phone & email support", available: true },
      ],
    },
    {
      title: "Enterprise plan",
      price: 1999,
      period: "month",
      features: [
        { text: "Unlimited team members", available: true },
        { text: "Unlimited Cloud storage", available: true },
        { text: "Dedicated integration help", available: true },
        { text: "Sketch Files", available: true },
        { text: "API Access", available: true },
        { text: "Complete documentation", available: true },
        { text: "24×7 phone & email support", available: true },
      ],
    },
  ];

  return (
    <div>
      <h1
        className="text-center text-3xl md:text-4xl xl:text-5xl font-bold text-gray-700 mt-14 2xl:mt-20 my-10 2xl:my-20"
        data-aos="fade-right"
      >
        Nuestros planes
      </h1>
      <div className="w-full lg:w-[95%] 2xl:w-[89%] 2xl:gap-10 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-5">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              {plan.title}
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">
                {plan.price}
              </span>
              <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /{plan.period}
              </span>
            </div>
            <ul className="my-7 space-y-5">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className={`flex space-x-3 ${
                    !feature.available && "line-through decoration-gray-500"
                  }`}
                >
                  <svg
                    className={`h-5 w-5 shrink-0 ${
                      feature.available
                        ? "text-[#61a730] dark:text-cyan-500"
                        : "text-gray-400 dark:text-gray-500"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="md:hidden flex justify-center items-center mt-4">
          <Link to="/contact">
            <button className="bg-[#61a730] hover:bg-[#73c23b] shadow-2xl transition-all w-48 h-10 rounded-lg text-white font-semibold">
              Solicitar demo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Plans;
