import Image from 'next/image';
import React from 'react';
import { GoTriangleRight } from 'react-icons/go';
import { FaChartLine, FaUsers, FaAward, FaCogs, FaHandshake, FaBullseye, FaGlobe, FaProjectDiagram } from 'react-icons/fa';

const WhyChoseUs = () => {
    const points = [
        { text: "Data-Driven Approach", icon: <FaChartLine className="text-red-600 text-lg" /> },
        { text: "B2B Specialists", icon: <FaUsers className="text-red-600 text-lg" /> },
        { text: "Proven Track Record", icon: <FaAward className="text-red-600 text-lg" /> },
        { text: "Time-Tested Methodologies", icon: <FaCogs className="text-red-600 text-lg" /> },
        { text: "Flexible Engagement Model", icon: <FaHandshake className="text-red-600 text-lg" /> },
        { text: "Measurable Results", icon: <FaBullseye className="text-red-600 text-lg" /> },
        { text: "Global Delivery Expertise", icon: <FaGlobe className="text-red-600 text-lg" /> },
        { text: "Multi-Shore Delivery Model", icon: <FaProjectDiagram className="text-red-600 text-lg" /> },
    ];

    return (
        <div>
            <section id="scroll" className="sm:mt-6 lg:mt-8 mt-12 max-w-full mx-auto px-4 sm:px-6 lg:px-0">
                <div className="mx-auto sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-0 flex flex-col lg:flex-row gap-3">
                    <div className="lg:w-full w-full bg-[#E7000B]">
                        <div className="lg:w-[85%] mx-auto py-20">
                            <div className="container mt-12 mx-auto px-4 md:px-0 md:flex md:justify-center md:items-start">
                                <div className="md:w-1/2 lg:w-1/3 md:mr-8 p-4">
                                    <Image
                                        width={400}
                                        height={400}
                                        alt="Why Choose Us"
                                        src="/whyUs.png"
                                        className="mb-7 w-full"
                                    />
                                </div>

                                <div className="md:w-1/2 lg:w-2/3 mt-8 md:mt-0 px-4 py-4 flex flex-col gap-8">
                                    <h1 className="text-xl font-bold text-left text-white">Why Choose Us</h1>
                                    <p className="text-white text-sm text-gray-200 font-thin">
                                        We tap into existing market demand to maximize your ROI through targeted pull marketing.
                                        By connecting with decision-makers at the right moment in their buying journey,
                                        we transform your B2B outreach into measurable results.
                                        Our data-backed approach aligns perfectly with how your buyers actually make purchasing decisions,
                                        helping you acquire valuable corporate clients more efficiently.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-2 w-full">
                                        {points.map((point, index) => (
                                            <div key={index} className="flex gap-3 items-center bg-white px-4 py-2 rounded-md">
                                                <div>{point.icon}</div>
                                                <h1 className="text-black text-sm font-medium">{point.text}</h1>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="z-50 flex border border-white w-fit gap-4 hover:bg-white hover:text-black items-center mt-4 cursor-pointer bg-transparent text-white px-4 py-2">
                                        Get Started <GoTriangleRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChoseUs;