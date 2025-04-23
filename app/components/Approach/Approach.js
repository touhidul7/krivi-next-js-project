"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  BarChart3,
  BrainCircuit,
  GaugeCircle,
  Megaphone,
  UserCheck,
  LayoutGrid,
  Search,
  Layers,
} from "lucide-react";

const items = [
  {
    title: "Marketing Competency Center",
    description:
      "Build and structure your marketing leadership function for maximum impact and strategic alignment.",
    icon: BrainCircuit,
  },
  {
    title: "Marketing Audit",
    description:
      "Comprehensive assessment of your marketing efforts to identify gaps and opportunities for growth.",
    icon: GaugeCircle,
  },
  {
    title: "Customer Experience Optimization",
    description:
      "Create seamless, personalized customer journeys that drive loyalty and business growth.",
    icon: UserCheck,
  },
  {
    title: "Marketing Analytics & ROI",
    description:
      "Implement data-driven frameworks to measure and optimize marketing performance and investment returns.",
    icon: BarChart3,
  },
  {
    title: "Top of Funnel Activation",
    description:
      "Generate quality leads through targeted awareness and engagement strategies.",
    icon: Megaphone,
  },
  {
    title: "Omnichannel Marketing",
    description:
      "Unify your marketing presence across all channels for consistent, effective customer engagement.",
    icon: LayoutGrid,
  },
  {
    title: "Digital Marketing Strategy",
    description:
      "Create comprehensive digital roadmaps aligned with your business objectives and market opportunities.",
    icon: Search,
  },
  {
    title: "Sales Enablement",
    description:
      "Equip your sales team with tools and content to effectively convert marketing-qualified leads.",
    icon: Layers,
  },
];

const Approach = () => {
  const [clickedIndex, setClickedIndex] = useState(null);


  return (
    <div>
      <section
        id="scroll"
        className="sm:mt-6 lg:mt-8 mt-12 max-w-fu mx-auto px-4 sm:px-6 lg:px-0"
      >
        <div className="my-10 mx-auto sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-0 flex flex-col lg:flex-row gap-3">
          <div className="lg:w-full w-full bg-[#1c1c1f]">
            <div className="py-20 lg:w-[85%] mx-auto">
              <div className="container mx-auto px-4 md:px-0 md:flex md:justify-center md:items-start">
                <div className="md:w-1/2 lg:w-1/3 md:mr-8 h-full border-t-2 border-1 px-4 pt-4 pb-10 border-gray-400 flex flex-col gap-4 cursor-pointer hover:border-t-red-600 transition-all relative group bg-white">
                  <h1 className="text-4xl font-bold mb-2">
                    Expert solutions for every aspect of your marketing journey
                  </h1>

                  <p>
                    In {"today's"} competitive landscape, exceptional customer
                    experiences define brand success. We help CMOs navigate
                    complexity and deliver cohesive brand experiences through
                    intelligent, scalable marketing operations.
                    <br />
                    <br />
                    Our approach combines customer-centric strategy with
                    data-driven intelligence, enabling your marketing team to
                    operate more efficiently and deliver measurable growth in an
                    ever-evolving digital world.
                  </p>

                  <div className="absolute top-0 left-0 w-full h-[.5px] bg-red-600 transition-all duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                </div>

                <div className="md:w-1/2 lg:w-2/3 mt-8 md:mt-0 bg-white grid grid-cols-2 gap-3">
                  {items.map((item, index) => {
                    const isClicked = clickedIndex === index;
                    const Icon = item.icon;

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
                        <div className="mt-1">
                          <Icon
                            size={35}
                            className={`${isClicked ? "text-white" : "text-gray-800"}`}
                          />
                        </div>

                        <div className="flex flex-col">
                          <p className="text-md mb-3 font-semibold">
                            {item.title}
                          </p>
                          <p
                            className={`${
                              isClicked ? "text-white" : "text-gray-600"
                            }`}
                          >
                            {item.description}
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