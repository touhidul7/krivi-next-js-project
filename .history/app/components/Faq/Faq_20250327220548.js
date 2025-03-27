import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaCaretRight } from 'react-icons/fa';

const Faq = () => {
    return (
        <div>
            <section id="scroll" className="sm:mt-6  mt-12 max-w-full mx-auto px-4 sm:px-6 lg:px-0">
                <div className=" mx-auto sm:mt-12 sm:px-6 md:mt-16 lg:mt-0 lg:px-0  flex flex-col lg:flex-row gap-3">

                    <div className="lg:w-full w-full ">
                        <div className="bg-white py-20">
                            <div className="container mt-12 mx-auto px-4 md:px-0 md:flex md:justify-center md:items-start">


                                <div className="md:w-1/2 lg:w-1/2 mt-8 md:mt-0  px-4 py-4 flex flex-col gap-8">

                                    <h1 className="text-3xl font-bold mb-4 ">FAQ</h1>
                                    <p className="text-lg  font-semibold">What is B2B SEO?</p>

                                    <div>
                                        <p className=''>
                                            B2B SEO is a strategic approach to search engine optimization designed for businesses targeting corporate cients. Unlike traditional SEO, it focuses on high-value, competiive keywords that decision-makers use when searching for business solutions. This approach prioritizes industry-specic terms and purchase-intent keywords over broader search terms...</p>
                                    </div>
                                 
                                    
                                    <div class="bg-white border-none divide-y divide-gray-200 rounded-xl">

                                        <details class="p-6 group" open>
                                            <summary class="flex items-center justify-between cursor-pointer">
                                                <h5 class="text-lg font-medium text-gray-900">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing?
                                                </h5>

                                                <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                                    <FaArrowAltCircleDown className='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 '/>
                                                    <FaArrowAltCircleUp className='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 bg-red-700 rounded'/>
                                                 
                                                </span>
                                            </summary>

                                            <p class="mt-4 leading-relaxed text-gray-700">
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                                earum similique!
                                            </p>
                                        </details>

                                        
                                        <details class="p-6 group" >
                                            <summary class="flex items-center justify-between cursor-pointer">
                                                <h5 class="text-lg font-medium text-gray-900">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing?
                                                </h5>

                                                <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                                    <FaArrowAltCircleDown className='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0'/>
                                                    <FaArrowAltCircleUp className='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100'/>
                                                 
                                                </span>
                                            </summary>

                                            <p class="mt-4 leading-relaxed text-gray-700">
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                                earum similique!
                                            </p>
                                        </details>

                                        
                                        <details class="p-6 group" >
                                            <summary class="flex items-center justify-between cursor-pointer">
                                                <h5 class="text-lg font-medium text-gray-900">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing?
                                                </h5>

                                                <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
                                                    <FaArrowAltCircleDown className='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0'/>
                                                    <FaArrowAltCircleUp className='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100'/>
                                                 
                                                </span>
                                            </summary>

                                            <p class="mt-4 leading-relaxed text-gray-700">
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                                earum similique!
                                            </p>
                                        </details>

                                    </div>




                                </div>



                                <div className="md:w-1/2 lg:w-1/3 md:mr-8  p-4">

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