import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FloatingLabel } from "flowbite-react";

function TelephoneInput({ telephone, setTelephone }) {
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setTelephone(value);
    }
  };

  return (
    <FloatingLabel
      required
      value={telephone}
      onChange={handleInputChange}
      name="telephone"
      variant="outlined"
      label="Teléfono"
    />
  );
}

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [city, setCity] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setEmailError("ingresa una dirección de email válida.");
    } else {
      setEmailError("");
    }
  };

  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2
          className="mt-9 mb-14 text-3xl md:text-4xl xl:text-5xl tracking-tight font-bold text-center text-gray-700"
          data-aos="fade-right"
        >
          Contrata el plan perfecto para tu equipo, nosotros te ayudamos
        </h2>
        <form
          action="https://formsubmit.co/krkevinrogelio1600@gmail.com"
          method="POST"
          className="space-y-8"
        >
          <div>
            <FloatingLabel
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              variant="outlined"
              label="Nombre"
            />
          </div>
          <div>
            <FloatingLabel
              required
              value={email}
              onChange={handleEmailChange}
              name="email"
              type="email"
              variant="outlined"
              label="Email"
            />
            {emailError && (
              <p className="text-red-600 text-sm mt-1">{emailError}</p>
            )}
          </div>
          <div>
            <TelephoneInput telephone={telephone} setTelephone={setTelephone} />
          </div>
          <div>
            <FloatingLabel
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              name="city"
              variant="outlined"
              label="Ciudad"
            />
          </div>
          <div className="flex max-md:justify-center max-md:items-center">
            <button
              type="submit"
              className="bg-[#61a730] hover:bg-[#73c23b] text-white font-semibold transition-all w-48 h-10 rounded-lg"
            >
              Obtener demo gratuito
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
