import React from "react";

const TimelineItem = ({ date, title, description }) => {
  return (
    <li className="relative">
      <div className="absolute left-[-8px] top-1/2 transform -translate-y-1/2  w-4 h-4 border-2 border-white  rounded-full"></div>
      <div className="ml-6 p-4 border-l border-gray-300 dark:border-gray-700">
        <time className="text-sm font-normal leading-none text-white">
          {date}
        </time>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-base font-normal text-white">{description}</p>
      </div>
    </li>
  );
};

const Timeline = () => {
  return (
    <div className="flex p-2 flex-col items-center justify-center h-full bg-gray-100 dark:bg-gray-800">
      <h2 className="w-full text-4xl xl:text-5xl text-center py-10 font-semibold text-[#00a4f9] uppercase">
        Timeline
      </h2>
      <ol className="relative max-w-2xl">
        <TimelineItem
          date="10 January 2024"
          title="Registration Starts"
          description="Registration for the event starts"
        />
        <TimelineItem
          date="5 February 2024"
          title="Registration Ends"
          description="Registration for the event ends"
        />
        <TimelineItem
          date="10 February 2024"
          title="Group Discussion"
          description="Group discussion is conducted for the registered participants"
        />
        <TimelineItem
          date="11 February 2024"
          title="Case Study Competition"
          description="Case study competition challenges teams to analyze real-world market scenarios and provide innovative solutions"
        />
        <TimelineItem
          date="11 February 2024"
          title="Board Room Discussion"
          description="Board room discussion is conducted for the shortlisted teams"
        />
      </ol>
    </div>
  );
};

export default Timeline;
