"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaCaretRight } from "react-icons/fa";

const NewSection = ({ resetQuestions }) => {
    const [services, setServices] = useState([]);
    const [headers, setHeaders] = useState({ industry: "", businessNeed: "" });

    useEffect(() => {
        fetch("../../../data/services.json")
            .then((response) => response.json())
            .then((data) => {
                setServices(data.services);
                setHeaders(data.headers);
            })
            .catch((error) => console.error("Error fetching services:", error));
    }, []);

    return (
        <div>

            <section id="scroll" className="sm:mt-6 lg:mt-8 mt-12 max-w-fu mx-auto px-4 sm:px-6 lg:px-0">
                <div className="my-10 mx-auto sm:mt-12 sm:px-6 md:mt-16  lg:px-0 xl:mt-28 flex flex-col lg:flex-row gap-3">

                    <div className="lg:w-full w-full ">
                        <div class="bg-[#1c1c1f] mt-16 py-20">
                            <div class="container mx-auto py-8 px-4 md:px-0 md:flex md:justify-center md:items-start">

                                <section className="sm:mt-6   mx-auto px-4 sm:px-6">


                                    <p className="text-black text-lg font-bold mb-5">Recommended for you</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
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
                        </div>
                    </div>

                </div>
            </section>






        </div>
    );
};

export default NewSection;