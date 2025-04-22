import Image from 'next/image';
import Link from "next/link";
import React from 'react';
import { FaCaretRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoTriangleRight } from 'react-icons/go';

const WhyChoseUs = () => {
    return (
        <div>
            <section id="scroll" className="sm:mt-6 lg:mt-8 mt-12 max-w-full mx-auto px-4 sm:px-6 lg:px-0">
                <div className=" mx-auto sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-0  flex flex-col lg:flex-row gap-3">

                    <div className="lg:w-full w-full bg-[#E7000B]">
                        <div className=" lg:w-[85%] mx-auto py-20">


                            <div className="container mt-12 mx-auto px-4 md:px-0 md:flex md:justify-center md:items-start">


                                <div className="md:w-1/2 lg:w-1/3 md:mr-8  p-4">

                                    <Image width={400} height={400} alt="image" src={"../../../whyUs.png"} className="mb-7 w-full" />

                                </div>


                                <div className="md:w-1/2 lg:w-2/3 mt-8 md:mt-0  px-4 py-4 flex flex-col gap-8">
                                    <h1 className="text-xl font-bold text-left text-white">Why Choose Us</h1>
                                    <div>
                                        <p className='text-white text-sm text-gray-200 font-thin'>
                                            We tap into existing market demand to maximize your ROI through targeted pull marketing. By connecting with decision-makers at the right moment in their buying journey, we transform your B2B outreach into measurable results. Our data-backed approach aligns perfectly with how your buyers actually make purchasing decisions, helping you acquire valuable corporate clients more efficiently..</p>

                                    </div>


                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-2 w-full">
                                        {/* Cards--------- */}

                                        <div className='flex gap-2 items-center bg-white px-4 py-2 rounded-md'>
                                            <Image width={200} height={200} alt="image" src={"../../../doller.png"}
                                                className="mr-2 w-9 h-auto mt-1" />
                                            <div className='flex flex-col items-start justify-center'>
                                                <h1 className='text-black text-sm font-medium'>Data-Driven</h1>
                                                <h1 className='text-black text-sm font-medium'>Approach</h1>
                                            </div>
                                        </div>
                                        <div className='flex gap-2 items-center bg-white px-4 py-2 rounded-md'>
                                            <Image width={200} height={200} alt="image" src={"../../../doller.png"}
                                                className="mr-2 w-9 h-auto mt-1" />
                                            <div className='flex flex-col items-start justify-center'>
                                                <h1 className='text-black text-sm font-medium'>Data-Driven</h1>
                                                <h1 className='text-black text-sm font-medium'>Approach</h1>
                                            </div>
                                        </div>
                                        <div className='flex gap-2 items-center bg-white px-4 py-2 rounded-md'>
                                            <Image width={200} height={200} alt="image" src={"../../../doller.png"}
                                                className="mr-2 w-9 h-auto mt-1" />
                                            <div className='flex flex-col items-start justify-center'>
                                                <h1 className='text-black text-sm font-medium'>Data-Driven</h1>
                                                <h1 className='text-black text-sm font-medium'>Approach</h1>
                                            </div>
                                        </div>
                                        <div className='flex gap-2 items-center bg-white px-4 py-2 rounded-md'>
                                            <Image width={200} height={200} alt="image" src={"../../../doller.png"}
                                                className="mr-2 w-9 h-auto mt-1" />
                                            <div className='flex flex-col items-start justify-center'>
                                                <h1 className='text-black text-sm font-medium'>Data-Driven</h1>
                                                <h1 className='text-black text-sm font-medium'>Approach</h1>
                                            </div>
                                        </div>
                                        <div className='flex gap-2 items-center bg-white px-4 py-2 rounded-md'>
                                            <Image width={200} height={200} alt="image" src={"../../../doller.png"}
                                                className="mr-2 w-9 h-auto mt-1" />
                                            <div className='flex flex-col items-start justify-center'>
                                                <h1 className='text-black text-sm font-medium'>Data-Driven</h1>
                                                <h1 className='text-black text-sm font-medium'>Approach</h1>
                                            </div>
                                        </div>
                                        <div className='flex gap-2 items-center bg-white px-4 py-2 rounded-md'>
                                            <Image width={200} height={200} alt="image" src={"../../../doller.png"}
                                                className="mr-2 w-9 h-auto mt-1" />
                                            <div className='flex flex-col items-start justify-center'>
                                                <h1 className='text-black text-sm font-medium'>Data-Driven</h1>
                                                <h1 className='text-black text-sm font-medium'>Approach</h1>
                                            </div>
                                        </div>




                                    </div>
                                    {/* btn */}
                                    <button className="z-50 flex border border-white w-fit gap-4 hover:bg-white hover:text-black  items-center mt-10 cursor-pointer bg-transparent text-white px-4 py-2">
                                    Get Started <GoTriangleRight/>

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