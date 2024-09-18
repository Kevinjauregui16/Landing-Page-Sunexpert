import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbars from "./components/Navbars";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Description from "./components/Description";
import PhoneHero from "./components/PhoneHero";
import Plans from "./components/Plans";
import Demo from "./components/Demo";
import Questions from "./components/Questions";
import Footers from "./components/Footers";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";

function Home() {
  return (
    <>
      <Hero />
      <Process />
      <Description />
      <PhoneHero />
      <Demo />
      <Plans />
      <Questions />
    </>
  );
}

function App() {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/plans"
          element={
            <>
              <Demo />
              <Plans />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footers />
    </>
  );
}

export default App;
