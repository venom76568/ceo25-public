import React from 'react';

const TimelineItem = ({ date, title, description, link }) => {
  return (
    <li className="relative py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold">{date}</span>
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-base text-gray-500">{description}</p>
          <a
            href={link}
            className="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200"
          >
            Learn more
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </li>
  );
};

const Timeline1 = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Timeline</h2>
      <ol className="relative space-y-4">
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

export default Timeline1;
