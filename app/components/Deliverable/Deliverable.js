"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaAdversal, FaArrowRight, FaCaretRight } from "react-icons/fa";
import LogoSlider from "./LogoSlider";

const NewSection = ({ resetQuestions }) => {
    const [services, setServices] = useState([]);
    const [headers, setHeaders] = useState({ industry: "", businessNeed: "" });

    useEffect(() => {
        fetch("../../../data/Deliverable.json")
            .then((response) => response.json())
            .then((data) => {
                setServices(data.services);
                setHeaders(data.headers);
            })
            .catch((error) => console.error("Error fetching services:", error));
    }, [resetQuestions]);

    return (
        <div>

            <section className="sm:mt-6 max-w-full lg:w-[85%] mx-auto px-4 sm:px-6 lg:px-0">
                <div className="my-10  sm:mt-12 sm:px-6  lg:px-0  flex flex-col lg:flex-row gap-3">

                    <div className="lg:w-full w-full ">
                        <div className="bg-white  ">
                            <div className=" w-full  px-0 lg:px-0 md:px-0 md:flex md:justify-stretch md:items-start">{/* container */}

                                <section className="sm:mt-6 w-full lg:px-0 px-0 pb-5 sm:px-0">
                                    <div className=" mb-10 new-section flex flex-col lg:flex-row justify-center lg:justify-stretch w-full gap-10 lg:gap-20">
                                        <div className="w-full ">
                                            <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">
                                                {headers.industry}
                                            </h1>
                                            <p className="text-md md:text-lg mb-4 font-semibold text-center">What do our B2B SEO services include?</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 w-full">
                                        {services.map((service, index) => (
                                            <div key={index} className="min-h-fit border-gray-400 flex flex-row gap-4 cursor-pointer transition-all relative group bg-[#e9e0e0] hover:bg-[#d9d0d0]">
                                            {/* Left side - text */}
                                            <div className="flex-1 flex flex-col gap-2 pl-4 py-4 h-full">
                                                <h2 className="text-black text-md font-semibold">{service.title}</h2>
                                                <p className="text-sm ">
                                                    {service.description}
                                                </p>
                                            </div>
                                        
                                            {/* Right side - image */}
                                            <div className="w-1/3 min-w-[100px] max-w-[150px]">
                                                <Image
                                                    width={400} 
                                                    height={400}
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        ))}
                                    </div>


                                    <div className="flex w-full mt-5 bg-[#E3E3E3] p-3 justify-around items-center text-xl">
                                        <LogoSlider />
                                    </div>
                                </section>





                            </div>
                        </div>
                    </div>

                </div>
            </section>






        </div>
    );
};

export default NewSection;