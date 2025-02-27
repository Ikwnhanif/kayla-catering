import React from "react";

const Nopage = () => {
  return (
    <main className="relative grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 overflow-hidden">
      {/* Blob Background */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <svg
          className="w-[800px] h-[800px] opacity-20 animate-float"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#6366F1"
            d="M37.5,-55.1C48.7,-48.3,58,-38.3,64.1,-26.1C70.2,-13.8,73,0.8,70,14.8C67,28.7,58.2,41.9,46,47.3C33.7,52.7,16.8,50.2,1.8,47.7C-13.3,45.3,-26.7,42.9,-36.9,35.2C-47.2,27.5,-54.2,14.5,-57.8,-1.4C-61.4,-17.3,-61.6,-34.7,-52.7,-42.9C-43.8,-51.1,-25.9,-50.1,-10.5,-55.2C4.9,-60.2,22.8,-71.8,37.5,-55.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="text-center">
        <p className="font-semibold text-indigo-600 text-5xl">404</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <span aria-hidden="true">&larr; </span>Go back home
          </a>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(20px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          .animate-float {
            animation: float 6s infinite ease-in-out;
          }
        `}
      </style>
    </main>
  );
};

export default Nopage;
