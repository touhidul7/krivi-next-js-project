import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaCaretRight } from "react-icons/fa";

const NewSection = ({ resetQuestions }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("../../../data/services.json")
      .then((response) => response.json())
      .then((data) => setServices(data.services))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  return (
    <div>
      <section className="sm:mt-6 lg:mt-8 mt-12 mx-auto px-4 sm:px-6">
        <div className="mt-5 mb-10 new-section flex justify-around w-full gap-20">
          <div>
            <h1 className="text-[42px] text-start leading-12 text-black mb-3 font-medium ">
              You selected <span className="font-bold">Retail</span> as your industry and <span className="font-bold">Data Analytics </span> as your business need.
            </h1>
          </div>

          <div>
            <button
              className="mt-2 px-32 py-5 border border-gray-400 cursor-pointer text-red-600 font-bold hover:bg-red-800 transition-all hover:text-white text-sm"
              onClick={resetQuestions}
            >
              RESET
            </button>
          </div>
        </div>

        <p className="text-black text-lg font-bold mb-5">Recommended for you</p>

        <div className="grid grid-cols-3 gap-4 w-full">
          {services.map((service, index) => (
            <div key={index} className="h-full border-t-3 border-1 p-4 border-gray-400 flex flex-col gap-4 cursor-pointer hover:border-t-red-600 transition-all relative group">
              <h2 className="text-black text-xl pb-5 font-bold">{service.title}</h2>
              <p>{service.description}</p>
              <Link href={service.linkHref}>
                <button className="flex justify-center items-center mt-4 cursor-pointer text-red-600 font-medium hover:icon-move">
                  {service.linkText} <FaCaretRight className="transition-transform" />
                </button>
              </Link>
              <div className="absolute top-0 left-0 w-full h-[.5px] bg-red-600 transition-all duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewSection;