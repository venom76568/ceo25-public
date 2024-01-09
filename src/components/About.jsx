import React from "react";

function About() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-9 pt-7 text-[#00a4f9] text-3xl uppercase font-bold text-dark  sm:text-4xl md:text-[40px]">
              About ceo
            </h2>
            <p className="mb-4 text-xl text-white">
              CEO, an event designed to cultivate management and leadership
              qualities in college students. Through this engaging experience,
              participants will have the opportunity to tackle realworld
              challenges, take calculated risks, and exceed their competition to
              become influential leaders.
            </p>

            <button className="mt-5 bg-primary border-primary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#00a4f9] hover:border-[#1B44C8] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#1B44C8] active:border-[#1B44C8]">
              Register Now
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;