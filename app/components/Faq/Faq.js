import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaCaretRight } from 'react-icons/fa';
import options from "../../../public/data/secondQuestionOptions.json"
const Faq = () => {
    return (
        <div>
            <section id="scroll" className="sm:mt-6  mt-12 max-w-full mx-auto px-4 sm:px-6 lg:px-0">
                <div className=" mx-auto sm:mt-12 sm:px-6 md:mt-16 lg:mt-0 lg:px-0  flex flex-col lg:flex-row gap-3">

                    <div className="  lg:w-[85%] mx-auto w-full ">
                        <div className="bg-white py-20">
                            <div className=" mt-12 mx-auto  md:px-0 md:flex md:justify-stretch md:items-start lg:items-stretch">


                                <div className="md:w-1/2 lg:w-1/2 mt-8 lg:mt-0 md:mt-0   lg:px-0 py-4 h-full flex flex-col justify-between gap-8">

                                    <h1 className="text-2xl md:text-4xl font-bold mb-4 lg:mx-0 ">FAQ</h1>

                                    <div className="  divide-y divide-gray-200 rounded-xl h-full ">

                                        <details className="py-6 group" >
                                            <summary className="flex items-center justify-between cursor-pointer">
                                                <h5 className="text-md md:text-lg font-semibold text-gray-900">
                                                    What is B2B SEO?
                                                </h5>

                                                <span className="relative flex-shrink-0 ml-1.5 w-5 h-5 bg-white text-red-700 rounded-full">
                                                    <FaArrowAltCircleDown className='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 ' />
                                                    <FaArrowAltCircleUp className='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100' />

                                                </span>
                                            </summary>

                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                B2B SEO is a strategic approach to search engine optimization designed for businesses targeting corporate cients. Unlike traditional SEO, it focuses on high-value, competiive keywords that decision-makers use when searching for business solutions. This approach prioritizes industry-specic terms and purchase-intent keywords over broader search terms.
                                            </p>
                                        </details>


                                        <details className="py-6 group" >
                                            <summary className="flex items-center justify-between cursor-pointer">
                                                <h5 className="text-md md:text-lg font-semibold text-gray-900">
                                                    What are B2B SEO services?
                                                </h5>

                                                <span className="relative flex-shrink-0 ml-1.5 w-5 h-5 bg-white text-red-700">
                                                    <FaArrowAltCircleDown className='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0' />
                                                    <FaArrowAltCircleUp className='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100' />

                                                </span>
                                            </summary>

                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                                earum similique!
                                            </p>
                                        </details>


                                        <details className="py-6 group" >
                                            <summary className="flex items-center justify-between cursor-pointer">
                                                <h5 className="text-md md:text-lg font-semibold text-gray-900">
                                                    {"What's"} included in B2B SEO services?                                               </h5>

                                                <span className="relative flex-shrink-0 ml-1.5 w-5 h-5 bg-white text-red-700">
                                                    <FaArrowAltCircleDown className='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0' />
                                                    <FaArrowAltCircleUp className='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100' />

                                                </span>
                                            </summary>

                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                                earum similique!
                                            </p>
                                        </details>
                                        <div className="flex flex-wrap gap-2 mt-6">
                                            {options?.secondQuestionOptions.map((option, index) => (
                                                <button
                                                    key={index} // or index if option values aren't unique
                                                    className="px-3 py-2 border cursor-pointer hover:bg-[#CC0000] hover:text-white border-gray-200 text-[#CC0000] font-semibold text-sm md:text-md rounded-4xl"
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>

                                    </div>




                                </div>



                                <div className="md:w-1/2 lg:w-1/2 md:mr-8 lg:mr-0  p-4 lg:pr-0 lg:pl4">

                                    <Image width={400} height={400} alt="image" src={"../../../faq.png"} className="mb-7 w-full" />

                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Faq;