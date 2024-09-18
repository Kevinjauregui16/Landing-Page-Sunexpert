import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const Footers = () => {
  return (
    <Footer container className="pt-20">
      <div className="w-full flex flex-col">
        {/* <div className="grid w-[80%] m-auto justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-4 m-auto">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div> */}
        <Footer.Divider className="max-md:m-auto w-[80%]" />
        <div className="w-full flex flex-col gap-6 items-center sm:justify-between">
          <div className="mt-4 flex space-x-4 sm:mt-0 sm:justify-center">
            <a
              href="https://www.facebook.com/SolarCenterMX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#1877f2] transition-all text-2xl"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.instagram.com/solarcentermx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#D43089] transition-all text-2xl"
            >
              <BsInstagram />
            </a>
            {/* <Footer.Icon href="#" icon={BsTwitter} /> */}
            {/* <Footer.Icon href="#" icon={BsGithub} /> */}
            {/* <Footer.Icon href="#" icon={BsDribbble} /> */}
          </div>
          <Footer.Copyright href="#" by="SunExpert" year={2024} />
        </div>
      </div>
    </Footer>
  );
};
export default Footers;
