import React from "react";
import Home from "../assets/about.webp";

function About() {
  return (
    <div>
      <section id="about" className="bg-white">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="w-full text-4xl xl:text-5xl text-left py-10 font-semibold text-[#00a4f9] uppercase">
              About Ceo
            </h2>
            <p className="mb-4 text-xl md:text-2xl text-black">
              CEO, an event designed to cultivate management and leadership
              qualities in college students. Through this engaging experience,
              participants will have the opportunity to tackle realworld
              challenges, take calculated risks, and exceed their competition to
              become influential leaders.
            </p>

            <a href="#reg">
              <button className="mt-5 bg-primary border-primary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-black bg-[#00a4f9] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5">
                Register Now
              </button>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src={Home}
              alt="office content 1"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
