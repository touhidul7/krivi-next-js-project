"use client";
import Image from "next/image";
import tabdata from "../../../public/data/boldSteps.json";
import React, { useState, useEffect } from "react";
import { FaCaretRight } from "react-icons/fa";
import Link from "next/link";

export default function BoldSteps() {
  const [activeTab, setActiveTab] = useState(tabdata[0]); 
  const [hoveredParent, setHoveredParent] = useState(false);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out effect
      setTimeout(() => {
        setActiveTab((prevTab) => {
          const currentIndex = tabdata.findIndex((tab) => tab === prevTab);
          const nextIndex = (currentIndex + 1) % tabdata.length;
          return tabdata[nextIndex];
        });
        setFade(true); // Start fade-in effect
      }, 500); // Half-second transition between slides
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const tab = (item) => {
    setFade(false);
    setTimeout(() => {
      setActiveTab(item);
      setFade(true);
    }, 300);
  };

  return (
    <div className="py-50 text-left">
      <div className="flex gap-10 justify-center w-[85%] mx-auto">
        {activeTab?.img && (
          <div className=" w-fit text-right">
            <Image
              src={activeTab.img}
              className={`h-auto w-[900px] text-right transition-opacity duration-1000 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
              width={100}
              height={100}
              alt="image"
            />
          </div>
        )}
        <div className="w-full font-graphic">
          <div className="mb-10">
            <div className="heading text-6xl font-bold font-graphic mb-4">
              Bold steps forward.
            </div>
            <p className="font-tiempos text-xl">
              See how we’ve helped ambitious clients achieve extraordinary
              outcomes.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 justify-items-stretch items-stretch">
            <div className="h-full">
              <div className="text-lg font-graphic mb-4">
                Featured client success story
              </div>
              <div className="border-t-3 h-full pt-4 border-gray-400 flex flex-col justify-between">
                <div>
                  <div
                    className={`font-semibold leading-10 text-[28px] font-graphic transition-opacity duration-700 ${
                      fade ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {activeTab?.featured.title}
                  </div>
                </div>
                <Link href={activeTab?.featured.link}>
                  <button className="flex gap-2 justify-center items-center mt-4 cursor-pointer text-red-600 font-medium">
                    Read story <FaCaretRight />
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-full cursor-pointer">
              <div className="text-lg mb-4">How we helped</div>
              <div
                className="h-full border-t-3 border-1 p-4 border-gray-400 flex flex-col justify-between"
                onMouseEnter={() => setHoveredParent(true)}
                onMouseLeave={() => setHoveredParent(false)}
              >
                <div className="parent">
                  <div
                    className={`font-semibold leading-10 font-graphic title transition-all duration-700 ${
                      hoveredParent ? "text-[20px]" : "text-[28px]"
                    }`}
                  >
                    {activeTab?.helped.title}
                  </div>
                  <div
                    className={`text-[16px] font-tiempos description transition-opacity duration-500 ${
                      hoveredParent ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {activeTab?.helped.des}
                  </div>
                </div>
                <Link href={activeTab?.helped.link}>
                  <button className="flex gap-2 justify-center items-center mt-4 cursor-pointer text-red-600 font-medium">
                    Read story <FaCaretRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination flex gap-4 justify-center mt-6">
        {tabdata.map((item, index) => (
          <button
            key={index}
            onClick={() => tab(item)}
            className={`p-2 w-4 h-4 rounded-full transition-all duration-500 ${
              activeTab === item
                ? "bg-red-600 scale-110"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
