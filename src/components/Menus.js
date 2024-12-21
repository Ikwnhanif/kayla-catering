import React from "react";
import { gubugs, buffets } from "../data/paket";

const Menus = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Kayla Catering Menu
      </h1>

      {/* Gubug Packages Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">
          Gubug Packages
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {gubugs.map((packageItem) => (
            <div
              key={packageItem.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={packageItem.image}
                alt={packageItem.title}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {packageItem.title}
                  </h3>
                  <span className="bg-red-500 text-white font-semibold py-1 px-3 rounded-lg shadow-md">
                    {packageItem.price}
                  </span>
                </div>
                <ul className="mt-2 text-gray-700">
                  <li>{packageItem.menu1}</li>
                  <li>{packageItem.menu2}</li>
                  <li>{packageItem.menu3}</li>
                  <li>{packageItem.menu4}</li>
                  {packageItem.menu5 && <li>{packageItem.menu5}</li>}
                  {packageItem.menu6 && <li>{packageItem.menu6}</li>}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Buffet Packages Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">
          Buffet Packages
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {buffets.map((buffetItem) => (
            <div
              key={buffetItem.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={buffetItem.image}
                alt={buffetItem.title}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {buffetItem.title}
                  </h3>
                  <span className="bg-red-500 text-white font-semibold py-1 px-3 rounded-lg shadow-md">
                    {buffetItem.price}
                  </span>
                </div>
                <ul className="mt-2 text-gray-700">
                  <li>{buffetItem.item1}</li>
                  <li>{buffetItem.item2}</li>
                  <li>{buffetItem.item3}</li>
                  <li>{buffetItem.item4}</li>
                  {buffetItem.item5 && <li>{buffetItem.item5}</li>}
                  {buffetItem.item6 && <li>{buffetItem.item6}</li>}
                  {buffetItem.item7 && <li>{buffetItem.item7}</li>}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menus;
