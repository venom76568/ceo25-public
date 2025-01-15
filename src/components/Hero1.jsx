import React from "react";
import Logo from "../assets/CEO_web.webp";
import Brochure from "../assets/CEO Brochure 25.pdf"

const Hero = () => {
  return (
    <>
      <div className=" w-full h-screen flex flex-col  bg-no-repeat bg-blend-overlay bg-center bg-cover items-center justify-center bg-[url(https://static.vecteezy.com/system/resources/thumbnails/003/042/243/small/abstract-blue-grunge-texture-background-free-vector.jpg)]">
        <img
          className="flex justify-center items-center m-10"
          src={Logo}
          alt="logo"
        />

        <h1 className="text-center text-3xl sm:text-6xl font-bold text-[#00a4f9] pt-5">
          Cultivate. Execute. Outperform.
        </h1>

        <div className="justify-center items-center text-center flex flex-row">
          <div className="flex flex-col w-full sm:w-auto sm:flex-row p-4">
            <a
              href="https://shorturl.at/yHIyQ"
              className="flex flex-row w-[250px] self-center items-center justify-center px-4 py-4 mb-4 text-xl text-white font-sans bg-sky-600 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1 rounded-lg"
            >
              Register
            </a>

            <a
              href={Brochure}
              download="CeoBrochure.pdf"
              className="flex self-center w-[250px] items-center justify-center px-4 py-4 text-xl text-white font-sans leading-6 capitalize duration-100 transform border-2 rounded-sm cursor-pointer border-blue-300 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1 rounded-lg"
            >
              Brochure
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
