import React from "react";

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        🚀 Exciting News Ahead!
        <p className="text-2xl mt-5">🔥 We're Launching Soon! 🔥</p>
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Our team has been hard at work, crafting something truly special just
        for you. The wait is almost over, and we can't wait to unveil our latest
        creation!
      </p>
      <p className="text-2xl font-bold mt-5">
        Join Us on This Incredible Journey. 🔔 Sign up for updates
      </p>
    </div>
  );
};
