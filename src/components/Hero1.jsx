import React from "react";
import Logo from "../assets/CEO_web.webp";
import Brochure from "../assets/CEO Brochure 25.pdf"

const Hero = () => {
  return (
    <>
      <div className=" w-full h-screen flex flex-col  bg-no-repeat bg-blend-overlay bg-center bg-cover items-center justify-center bg-[url(https://media-hosting.imagekit.io//36afcca8560640da/h01.gif?Expires=1831473055&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0NIxk5tcozpoyjNbkkyFsuMCvZ7j0UrStrNTM79ieCrD3MgsFzZy7LYzFz8~6PiIvo2asFg2BTNp5KgCAf2~yp4xCCm2t5-sA1PRG-Hm8~zYSAbqaiK-Wthj~TpwRQIT32fslQcS6~YMmgycq45SbKTeshl1hxCpMs9IVcMlc~e3vN52OuPc4pE1Sh9WvfMAWvGI-7VUoYFX7C9SKUiYZDHyLxLkehpkjOuy1eFVekS07-5Rox3BnOlxxz3qBjjJ0g9HWllX~IcuSiD2JUDXYkWmotjuWFsjr2V-mTeoWvkGlf8wfIgAk6PicSlPnL9W77FUfttVQJVC4b8IJRnjAw__)]">
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
              href="#register"
              className="flex flex-row w-[250px] self-center items-center justify-center px-4 py-4 mb-4 text-xl text-white font-sans bg-sky-600 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1"
            >
              Register
            </a>

            <a
              href={Brochure}
              download="CeoBrochure.pdf"
              className="flex self-center w-[250px] items-center justify-center px-4 py-4 text-xl text-white font-sans leading-6 capitalize duration-100 transform border-2 rounded-sm cursor-pointer border-blue-300 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1"
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
