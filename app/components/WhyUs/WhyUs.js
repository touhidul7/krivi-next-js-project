import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCaretRight } from 'react-icons/fa';

const WhyUs = () => {
    return (
        <div>
            <section id="scroll" className="sm:mt-6 lg:mt-8 mt-12 max-w-fu mx-auto px-4 sm:px-6 lg:px-0">
                <div className="my-10 mx-auto sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-0 xl:mt-28 flex flex-col lg:flex-row gap-3">

                    <div className="lg:w-full w-full ">
                        <div class="bg-[#C52222] py-20">
                            <div class="container mx-auto px-4 md:px-0 md:flex md:justify-center lg:flex items-baseline md:items-start lg:w-[85%]">

                                {/*  */}

                                <Image className='md:w-1/2 lg:w-1/3 md:mr-8' width={1000} height={1000} src={"/whyusimg.png"} alt='fsd' />

                                {/*  <div className=" md:w-1/2 lg:w-1/3 md:mr-8 border-t-3 border-1 p-4 border-gray-400 flex flex-col gap-4 cursor-pointer hover:border-t-red-600 transition-all relative group bg-white">
                                    <h1 class="text-3xl font-bold mb-4">Approach</h1>
                                    <p class="text-lg mb-4 font-semibold">Customer-Centric and Data-Driven Marketing:</p>
                                    <p>  By focusing on customer needs and perspectives, organizations can bridge the traditional divide between marketing and sales teams for maximum impact.</p>
                                    <div className="absolute top-0 left-0 w-full h-[.5px] bg-red-600 transition-all duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                                </div>
 */}

                                {/*  */}


                                <div class="md:w-1/2 lg:w-2/3 mt-8 md:mt-0 bg-[#C52222] text-white px-4 py-7 flex flex-col gap-4">

                                    <div>
                                        <p class="text-2xl text-center mb-4 font-semibold">Why Us</p>
                                        <p class="text-md text-center mb-4 font-semibold">Drive Growth With Proven B2B Strategies</p>
                                        <p className='text-sm text-gray-200 font-thin'>
                                            We tap into existing market demand to maximize your ROI through targeted pull marketing. By
                                            connecting with decision-makers at the right moment in their buying journey, we transform
                                            your B2B outreach into measurable results. Our data-backed approach aligns perfectly with
                                            how your buyers actually make purchasing decisions, helping you acquire valuable
                                            corporate clients more efficiently.
                                        </p>

                                    </div>

                                    <div className='flex justify-center items-stretch text-black'>

                                        <div className=" md:w-1/2 lg:w-full md:mr-8 border-t-3 border-1 p-4 border-gray-400 flex justify-between flex-col gap-4 cursor-pointer hover:border-t-red-600 transition-all relative group bg-white">
                                            <h1 class="text-3xl font-bold mb-4">Your Dedicated Team</h1>
                                            <p class="text-sm mb-4 ">Your dedicated team will be with you every step of the way. We will work with you to create a plan that fits your needs. We will be there to help you with any questions or concerns you may have.</p>
                                            <Link href={"/"}>
                                                <button className="flex justify-center items-center mt-4 cursor-pointer text-black font-medium hover:icon-move">
                                                    More <FaCaretRight className="transition-transform" />
                                                </button>
                                            </Link>
                                            <div className="absolute top-0 left-0 w-full h-[.5px] bg-red-600 transition-all duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                                        </div>
                                        <div className=" text-white md:w-1/2 lg:w-full md:mr-8 border-t-3 border-1 p-4 border-gray-400 flex flex-col gap-4 cursor-pointer hover:border-t-red-600 transition-all relative group bg-[#C52222]">
                                            <h1 class="text-3xl font-bold mb-4">Clear, Data-Driven Reports</h1>
                                            <p class="text-sm mb-4 ">We will provide you with clear, data-driven reports that show you how your website is performing. We will help you understand what the data means and how you can use it to improve your website.</p>
                                            <Link href={"/"}>
                                                <button className="flex justify-center items-center mt-4 cursor-pointer text-white font-medium hover:icon-move">
                                                    More <FaCaretRight className="transition-transform" />
                                                </button>
                                            </Link>
                                            <div className="absolute top-0 left-0 w-full h-[.5px] bg-red-600 transition-all duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
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

export default WhyUs;