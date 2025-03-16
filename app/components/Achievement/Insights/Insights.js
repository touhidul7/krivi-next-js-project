import React from "react";
import { FaBookmark } from "react-icons/fa";

const Insights = () => {
  return (
    <div>
      <section className="sm:mt-6 lg:mt-28 lg:mb-8 mt-12 mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h3 className="flex items-center w-full mb-10">
          <span className="flex-grow bg-gray-400 rounded h-[0.5px]"></span>
          <span className="mx-3 text-3xl font-bold">Our Latest Insights</span>
          <span className="flex-grow bg-gray-400 rounded h-[0.5px]"></span>
        </h3>

        <div className="mx-auto max-w-[1260px] ">
          <main className="flex justify-center items-stretch flex-col   md:flex-row gap-5">

            <div className=" w-full md:w-1/2">
              <img
                className="mb-7 w-full"
                src="../../../../insight-1.webp"
              />
              <div className="flex flex-col items-start text-start">
                <a href="#" className="text-red-600 text-sm mb-3">Strategy</a>
                <a href="#" className="hover:text-red-600 text-2xl font-bold  mb-3">
                Energy Executive Agenda 2025: New Challenges, New Innovations
                </a>
                <a href="#" className="text-black text-lg  font-['Roboto'] mb-3">
                Our latest survey finds executives facing rising costs, surging demand, and a long to-do list.
                </a>
                <div className="flex justify-between w-full">
                    <div><a className="text-sm text-gray-600">Energy and Natural Resource Executive Pulse</a></div>
                    <div><FaBookmark className="text-gray-400" /></div>

                </div>
            
                
              </div>
            </div>

            <div className="h-[100% !important] p-[0.4px] bg-gray-300 lg:block hidden"></div>

            <div className=" w-full bg- md:w-1/2">
              <img
                className="mb-7 w-full"
                src="../../../../insight-2.webp"
              />
              <div className="flex flex-col items-start text-start">
              <a href="#" className="text-red-600 text-sm mb-3">Sustainability</a>
                <a href="#" className="hover:text-red-600 dark:text-white text-2xl font-bold mb-3">
                AI and Sustainability: The Power of Integration
                </a>
                <a href="#" className="text-black text-lg  font-['Roboto'] mb-10">
                Three practices will help companies deploy a more carbon-conscious “eco-AI” approach to their technology and sustainability priorities.
                </a>

                <div className="flex justify-between w-full">
                    <div><a className="text-sm text-gray-600">The Visionary CEO’s Guide to Sustainability</a></div>
                    <div><FaBookmark className="text-gray-400"/></div>

                </div>
                
              </div>
            </div>


          </main>
        </div>
      </section>
    </div>
  );
};

export default Insights;