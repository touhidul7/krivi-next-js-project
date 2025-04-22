"use client";
import Image from "next/image";
import tabdata from "../../../public/data/boldSteps.json";
import React, { useState, useEffect } from "react";
import { FaCaretRight } from "react-icons/fa";
import Link from "next/link";

export default function BoldSteps() {
  const [activeTab, setActiveTab] = useState(tabdata[0]);
  const [fade, setFade] = useState(true);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [progress, setProgress] = useState(0);
  const [hoveredParent, setHoveredParent] = useState(false);
  const [hoverProgress, setHoverProgress] = useState(0);

  let hoverTimer;
  let hoverProgressTimer;

  // Auto-switch content every 3 seconds (faster)
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActiveTab((prevTab) => {
          const currentIndex = tabdata.findIndex((tab) => tab === prevTab);
          return tabdata[(currentIndex + 1) % tabdata.length];
        });
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const tab = (item) => {
    setFade(false);
    setTimeout(() => {
      setActiveTab(item);
      setFade(true);
    }, 200);
  };

  // Faster hover progress
  const handleHoverStart = (index) => {
    setHoverIndex(index);
    setProgress(0);
    hoverTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(hoverTimer);
          tab(tabdata[index]);
          return 0;
        }
        return prev + 5; // Faster progress
      });
    }, 50);
  };

  const handleHoverEnd = () => {
    clearInterval(hoverTimer);
    let tempProgress = progress;
    const decreaseInterval = setInterval(() => {
      tempProgress -= 10; // Faster decrease
      setProgress(tempProgress);
      if (tempProgress <= 0) clearInterval(decreaseInterval);
    }, 20);
  };

  // Faster parent hover effect
  const handleHoverStartParent = () => {
    setHoveredParent(true);
    setHoverProgress(0);
    hoverProgressTimer = setInterval(() => {
      setHoverProgress((prev) => {
        if (prev >= 100) {
          clearInterval(hoverProgressTimer);
          return 100;
        }
        return prev + 5;
      });
    }, 50);
  };

  const handleHoverEndParent = () => {
    setHoveredParent(false);
    clearInterval(hoverProgressTimer);
    let tempProgress = hoverProgress;
    const decreaseInterval = setInterval(() => {
      tempProgress -= 10;
      setHoverProgress(tempProgress);
      if (tempProgress <= 0) clearInterval(decreaseInterval);
    }, 20);
  };

  return (
    <div className="pb-20 pt-10 text-left">
      <div className="flex lg:flex-row flex-col gap-10 justify-center w-[80] mx-auto">
        {activeTab?.img && (
          <div className="border w-fit text-right">
            <Image
              src={activeTab.img}
              className={`h-auto w-[900px] text-right transition-opacity duration-700 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
              width={500}
              height={500}
              alt="image"
            />
          </div>
        )}
        <div className="w-full font-graphic">
          <div className="mb-10">
            <div className="heading text-5xl font-bold font-graphic mb-4">
              Bold steps forward.
            </div>
            <p className="font-tiempos text-xl font-light">
              See how we’ve helped ambitious clients achieve extraordinary
              outcomes.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 justify-items-stretch items-stretch">
            <div className="h-full">
              <div className="text-lg font-graphic mb-4">
                Featured client success story
              </div>
              <div className="border-t-3 h-full pt-4 border-gray-400 flex flex-col justify-between">
                <div>
                  <div
                    className={`font-semibold leading-10 text-[28px] font-graphic transition-opacity duration-500 ${
                      fade ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {activeTab?.featured.title}
                  </div>
                </div>
                <Link className="lg:mb-0 mb-16" href={activeTab?.featured.link}>
                  <button className="flex gap-2 justify-center items-center mt-4 cursor-pointer text-red-600 font-medium">
                    Read story <FaCaretRight />
                  </button>
                </Link>
              </div>
            </div>

            {/* Parent div with Faster Hover Progress */}
            <div className="h-full cursor-pointer">
              <div className="text-lg mb-4">How we helped</div>
              <div
                className="h-full border-t-3 border-1 p-4 border-gray-400 flex flex-col justify-between parent relative"
                onMouseEnter={handleHoverStartParent}
                onMouseLeave={handleHoverEndParent}
              >
                {/* Progress Bar */}
                <div
                  className="absolute top-0 -mt-[2px] left-0 h-[3px] bg-red-600 transition-all duration-100"
                  style={{ width: `${hoverProgress}%` }}
                ></div>

                <div className="parent">
                  <div
                    className={`font-semibold leading-10 font-graphic title transition-all duration-500 ${
                      hoveredParent ? "text-[20px]" : "text-[28px]"
                    }`}
                  >
                    {activeTab?.helped.title}
                  </div>
                  <div
                    className={`text-[16px] font-tiempos description transition-opacity duration-300 ${
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

      {/* Pagination with Faster Hover Progress */}
      <div className="pagination flex gap-4 justify-center lg:mt-6 mt-16">
        {tabdata.map((item, index) => (
          <div
            key={index}
            className="relative w-5 h-5 flex justify-center items-center"
            onMouseEnter={() => handleHoverStart(index)}
            onMouseLeave={handleHoverEnd}
          >
            <div className="absolute w-full h-full rounded-full border-2 border-gray-400"></div>

            {hoverIndex === index && (
              <div
                className="absolute w-full h-full rounded-full border-2 border-red-600"
                style={{
                  clipPath: `inset(${100 - progress}% 0 0 0)`,
                  transition: "clip-path 0.05s linear",
                }}
              ></div>
            )}

            <button
              onClick={() => tab(item)}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                activeTab === item ? "bg-red-600 scale-110" : "bg-gray-400"
              }`}
            ></button>
          </div>
        ))}
      </div>
      <div className="w-full text-center mt-10 text-[13px] font-semibold font-graphic">
            <button className="p-4 border border-gray-300 text-red-700 uppercase hover:bg-red-700 hover:text-white cursor-pointer">
            See all client results
            </button>
          </div>
    </div>
  );
}
