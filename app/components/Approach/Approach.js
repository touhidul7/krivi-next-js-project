"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const items = [
  "Marketing Competency Center",
  "Marketing Strategy",
  "Digital Marketing Hub",
  "SEO & Content Management",
  "Social Media Branding",
  "Marketing Growth Plan",
];

const Approach = () => {
    const [clickedIndex, setClickedIndex] = useState(null);
  return (
    <div>
      <section
        id="scroll"
        className="sm:mt-6 lg:mt-8 mt-12 max-w-fu mx-auto px-4 sm:px-6 lg:px-0"
      >
        <div className="my-10 mx-auto sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-0  flex flex-col lg:flex-row gap-3">
          <div className="lg:w-full w-full bg-[#1c1c1f]">
            <div className=" py-20 lg:w-[85%] mx-auto">
              <div className="container mx-auto px-4 md:px-0 md:flex md:justify-center md:items-start">
                <div className="md:w-1/2 lg:w-1/3 md:mr-8 h-full border-t-2 border-1 px-4 pt-4 pb-10 border-gray-400 flex flex-col gap-4 cursor-pointer hover:border-t-red-600 transition-all relative group bg-white">
                  <h1 className="text-4xl font-bold mb-2">
                    Expert solutions for every aspect of your marketing journey
                  </h1>

                  <p>
                    In today's competitive landscape, exceptional customer
                    experiences define brand success. We help CMOs navigate
                    complexity and deliver cohesive brand experiences through
                    intelligent, scalable marketing operations
                    <br /> <br />
                    Our approach combines customer-centric strategy with
                    data-driven intelligence, enabling your marketing team to
                    operate more efficiently and deliver measurable growth in an
                    ever-evolving digital world.
                  </p>

                  <div className="absolute top-0 left-0 w-full h-[.5px] bg-red-600 transition-all duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                </div>

                <div className="md:w-1/2 lg:w-2/3 mt-8 md:mt-0 bg-white grid grid-cols-2 gap-3">
                  {items.map((title, index) => {
                    const isClicked = clickedIndex === index;

                    return (
                      <div
                        key={index}
                        className={`flex gap-3 p-4 cursor-pointer ${
                          isClicked
                            ? "bg-red-700 text-white"
                            : "hover:bg-[#DBDBDB]"
                            
                        }`}
                        onClick={() =>
                          setClickedIndex(isClicked ? null : index)
                        }
                      >
                        <div>
                          <Image
                            src="../../../doller.png"
                            alt="Approach"
                            width={35}
                            height={35}
                            className={`mr-2 mt-1 ${
                              isClicked ? "brightness-0 invert" : ""
                            }`}
                          />
                        </div>

                        <div
                          className={`flex flex-col ${
                            isClicked ? "text-white" : ""
                          }`}
                        >
                          <p className="text-md mb-3 font-semibold">{title}</p>
                          <p
                            className={`${
                              isClicked ? "text-white" : "text-gray-600"
                            }`}
                          >
                            Build and structure your marketing leadership
                            function for maximum impact and strategic alignment.
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Approach;
