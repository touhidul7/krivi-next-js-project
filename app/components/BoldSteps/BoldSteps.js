"use client";
import Image from "next/image";
import tabdata from "../../../public/data/boldSteps.json";
import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import Link from "next/link";

export default function BoldSteps() {
  const [activeTab, setActiveTab] = useState(null);
  const [hoveredParent, setHoveredParent] = useState(false);

  

  const tab = (item) => {
    setActiveTab(item);
  };

  if (!activeTab) {
    setActiveTab(tabdata[0]);
  }

  return (
    <div className="py-50 text-left">
      <div className="flex gap-10 justify-center w-[85%] mx-auto">
        {activeTab && activeTab.img && (
          <div className="border w-fit text-right">
            <Image
              src={activeTab?.img}
              className="h-auto w-[900px] text-right"
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
                <div className="">
                  <div className="font-semibold leading-10 text-[28px] font-graphic">
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
                <div className=" parent">
                  <div
                    className={`font-semibold leading-10 ${
                      hoveredParent ? "text-[20px]" : "text-[28px]"
                    } font-graphic title transition-all duration-500`}
                  >
                    {activeTab?.helped.title}
                  </div>
                  <div
                    className={`text-[16px] font-tiempos description transition-all duration-300 ${
                      hoveredParent ? "block" : "hidden"
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
      <div className="pagination flex gap-4 justify-center">
        {tabdata?.map((item, index) => (
          <button
            key={index}
            onClick={() => tab(item)}
            className={`p-2 rounded-full cursor-pointer ${
              activeTab === item ? "bg-red-600" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
