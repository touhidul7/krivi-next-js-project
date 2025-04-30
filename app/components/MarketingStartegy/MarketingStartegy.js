'use client';
import { useState } from "react";
import caseStudies from "../../../public/data/caseStudy.json";

import {
    FaBrain,
    FaLightbulb,
    FaRocket,
    FaChartLine,
} from "react-icons/fa";
import Image from "next/image";

const MarketingStrategy = () => {
    const [selectedCaseStudy, setSelectedCaseStudy] = useState(caseStudies[0]);

    const handleCaseStudySelect = (caseStudy) => {
        setSelectedCaseStudy(caseStudy);
    };

    return (

        <section id="scroll" className="sm:mt-6 lg:mt-8 mt-12 max-w-full mx-auto px-4 sm:px-6 lg:px-0">
                <div className="mx-auto sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-0 flex flex-col lg:flex-row gap-3">
                    <div className="lg:w-full w-full ">
                        <div className="lg:w-[85%] mx-auto py-20">
                            {/* start */}


                          


        <div className=" flex w-full flex-col items-center mx-auto justify-center lg:px-0 ">{/* container */}
            <h2 className="text-2xl md:text-4xl font-bold mb-10">Marketing that Works</h2>
            <div className="flex w-full justify-between items-center space-x-2 lg:space-x-4">
                <EquationItem title="Expertise & Knowledge X Data" icon={<FaBrain />} />
                <span className="text-2xl font-bold">+</span>
                <EquationItem title="Creativity X Ideas" icon={<FaLightbulb />} />
                <span className="text-2xl font-bold">+</span>
                <EquationItem title="Out of the Box" icon={<FaRocket />} />
                <span className="text-2xl font-bold">=</span>
                <EquationItem title="Results" icon={<FaChartLine />} isResult />
            </div>

            <Image width={500} height={500} src="../../../marketing-img.png" alt="image" className="w-full h-auto lg:h-[200px] mt-10" />

            {/* Case Study section Start here */}
            <div className="w-full bg-[#e3e3e3] py-10">
                <div className="flex items-stretch gap-10 md:flex-row flex-col justify-between w-[80%] mx-auto">
                    <div className="flex gap-4 w-full">
                        <div className="flex justify-between flex-col gap-2 text-[12px] w-1/3 min-w-fit button">
                            {caseStudies.map((caseStudy) => (
                                <button
                                    key={caseStudy.id}
                                    className={`py-2 px-4 border border-transparent cursor-pointer hover:border-black rounded-sm ${
                                        selectedCaseStudy.id === caseStudy.id
                                            ? 'bg-[#c52222] text-white'
                                            : 'bg-white text-black hover:bg-[#c52222] hover:text-white'
                                    }`}
                                    onClick={() => handleCaseStudySelect(caseStudy)}
                                >
                                    {caseStudy.title}
                                </button>
                            ))}
                        </div>

                        <div className="flex-1 justify-between flex flex-col gap-2 text-[12px] headingsection">
                            {caseStudies.map((caseStudy) => (
                                <div
                                    key={caseStudy.id}
                                    className={`w-full text-[10px] cursor-pointer p-1 ${
                                        selectedCaseStudy.id === caseStudy.id
                                            ? 'font-semibold'
                                            : 'hover:font-semibold'
                                    }`}
                                    onClick={() => handleCaseStudySelect(caseStudy)}
                                >
                                    {caseStudy.heading}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="h-[100% !important] w-[0.4px] border border-gray-500"></div>

                    <div className="flex flex-col justify-between w-full text-[12px] text-justify description">
                        {selectedCaseStudy.description}
                    </div>
                </div>
            </div>
            {/* Case Study section End here */}
        </div>



          {/* end */}
          </div>
                    </div>
                </div>
        </section>
    );
};

const EquationItem = ({ title, icon, isResult }) => {
    return (
        <div className={`flex flex-col items-center ${isResult ? 'text-red-600' : 'text-black'}`}>
            <div className={`flex items-center justify-center lg:w-20 md:w-16 w-8 lg:h-20 md:h-16 h-8 border-2 rounded-full lg:p-3 ${
                isResult ? 'bg-red-600 text-white' : 'border-black'
            }`}>
                <div className="text-xl lg:text-3xl">{icon}</div>
            </div>
            <p className={`lg:text-sm text-[10px] mt-2 ${isResult ? 'font-bold' : ''}`}>{title}</p>
        </div>
    );
};

export default MarketingStrategy;