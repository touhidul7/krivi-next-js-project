import Image from 'next/image';
import Link from "next/link";
import React from 'react';
import { FaCaretRight } from 'react-icons/fa';

const Whyus = () => {
    return (
        <div>
            <section id="scroll" className="sm:mt-6 lg:mt-8 mt-12 max-w-fu mx-auto px-4 sm:px-6 lg:px-0">
                <div className="my-10 mx-auto sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-0  flex flex-col lg:flex-row gap-3">

                    <div className="lg:w-full w-full ">
                        <div className="bg-[#E7000B] py-20">
                            <h1 className="text-3xl font-bold mb-4 text-center text-white">Approach</h1>
                            <p className="text-lg mb-4 font-semibold text-center text-white">Customer-Centric and Data-Driven Marketing:</p>
                            <div className="container mt-12 mx-auto px-4 md:px-0 md:flex md:justify-center md:items-start">


                                <div className="md:w-1/2 lg:w-1/3 md:mr-8  p-4">

                                    <Image width={500} height={500} alt="image" src={"../../../whyUs.png"} className="mb-7 w-full" />

                                </div>


                                <div className="md:w-1/2 lg:w-2/3 mt-8 md:mt-0  px-4 py-4 flex flex-col gap-4">

                                    <div>
                                        <p className='text-white'>
                                            We tap into existing market demand to maximize your ROI through targeted pull marketing. By connecting with decision-makers at the right moment in their buying journey, we transform your B2B outreach into measurable results. Our data-backed approach aligns perfectly with how your buyers actually make purchasing decisions, helping you acquire valuable corporate clients more efficiently..</p>

                                    </div>


                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 w-full">

                                        <div className="h-full border-t-3 border-1 p-4 border-gray-400 flex flex-col gap-4 cursor-pointer hover:border-t-red-600 transition-all relative group bg-[#e9e0e0]">
                                            <h2 className="text-black text-xl pb-5 font-bold">Your Dedicated Team</h2>
                                            <p>Your dedicated team will be with you every step of the way. We will work with you to create a plan that fits your needs. We will be there to help you with any questions or concerns you may have.</p>
                                            <Link href={"/"}>  <button className="flex justify-center items-center mt-4 cursor-pointer text-red-600 font-medium hover:icon-move">
                                                More <FaCaretRight className="transition-transform" />
                                            </button></Link>
                                        </div>

                                        <div className="h-full border-t-3 border-1 p-4 border-white flex flex-col gap-4 cursor-pointer hover:border-t-red-600 transition-all relative group bg-none">
                                            <h2 className="text-black text-xl pb-5 font-bold">Your Dedicated Team</h2>
                                            <p>Your dedicated team will be with you every step of the way. We will work with you to create a plan that fits your needs. We will be there to help you with any questions or concerns you may have.</p>
                                            <Link href={"/"}>  <button className="flex justify-center items-center mt-4 cursor-pointer text-red-600 font-medium hover:icon-move">
                                                More <FaCaretRight className="transition-transform" />
                                            </button></Link>
                                        </div>




                                    </div>



                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Whyus;