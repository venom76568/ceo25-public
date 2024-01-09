import React from 'react';

const TimelineItem = ({ date, title, description, link }) => {
  return (
    <li className="relative">
      <div className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 bg-gray-500 w-4 h-4 border-2 border-white dark:border-gray-900 dark:bg-gray-700 rounded-full"></div>
      <div className="ml-6 p-4 border-l border-gray-300 dark:border-gray-700">
        <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
        <a
          href={link}
          className="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-white bg-blue-500 border border-blue-500 rounded-lg hover:bg-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Learn more{' '}
          <svg
            className="w-3 h-3 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </li>
  );
};

const Timeline = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100 dark:bg-gray-800">
      <h2 className="mb-2 pt-7 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-[40px]">
        Timeline
      </h2>
      <ol className="relative max-w-2xl">
        <TimelineItem
          date="February 2022"
          title="Application UI code in Tailwind CSS"
          description="Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."
          link="#"
        />
        <TimelineItem
          date="March 2022"
          title="Marketing UI design in Figma"
          description="All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project."
        />
        <TimelineItem
          date="April 2022"
          title="E-Commerce UI code in Tailwind CSS"
          description="Get started with dozens of web components and interactive elements built on top of Tailwind CSS."
        />
      </ol>
    </div>
  );
};

export default Timeline;
