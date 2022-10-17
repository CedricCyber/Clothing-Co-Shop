import React from "react";
import { useState } from "react";

export default function Carousel() {
  // slide index
  const [slidePosition, setSlidePosition] = useState(0);
  // slid index function
  function nextPosition() {
    setSlidePosition((prev) => (prev === 3 ? 0 : prev + 1));
  }
  function prevPosition() {
    setSlidePosition((prev) => (prev === 0 ? 3 : prev - 1));
  }
  console.log(slidePosition);
  return (
    // Carousel
    <div className=" w-8/12 md:w-3/12 lg:w-4/12 aspect-[9/16] mt-10 md:mt-0 relative  cursor-pointer">
      {/* <!-- Carousel wrapper --> */}
      <div className="relative top-1/2">
        {/* <!-- Item 0 --> */}
        <img
          src="./womansStyle/strippedshirt.jpg"
          className="absolute rounded-3xl block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  duration-700 ease-in-out"
          alt="..."
          style={slidePosition === 0 ? { opacity: 1 } : { opacity: 0 }}
        />
        {/* <!-- Item 1 --> */}
        <img
          src="./womansStyle/jewlery.jpg"
          className="absolute rounded-3xl block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 duration-700 ease-in-out"
          alt="..."
          style={slidePosition === 1 ? { opacity: 1 } : { opacity: 0 }}
        />
        {/* <!-- Item 2 --> */}
        <img
          src="./mensStyle/strippedshirt.jpg"
          className="absolute rounded-3xl block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 duration-700 ease-in-out"
          alt="..."
          style={slidePosition === 2 ? { opacity: 1 } : { opacity: 0 }}
        />
        {/* <!-- Item 3 --> */}
        <img
          src="./womansStyle/whitedress.jpg"
          className="absolute rounded-3xl block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 duration-700 ease-in-out"
          alt="..."
          style={slidePosition === 3 ? { opacity: 1 } : { opacity: 0 }}
        />
      </div>

      {/* <!-- Slider controls --> */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevPosition}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextPosition}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
