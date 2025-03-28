import Link from 'next/link';
import React from 'react';
import { FaCaretRight } from 'react-icons/fa';

const Approach = () => {
    return (
        <div>
            <section id="scroll" className="sm:mt-6 lg:mt-8 mt-12 max-w-fu mx-auto px-4 sm:px-6 lg:px-0">
                <div className="my-10 mx-auto sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-0 xl:mt-28 flex flex-col lg:flex-row gap-3">

                    <div className="lg:w-full w-full ">
                        <div class="bg-[#1c1c1f] py-20">
                            <div class="container mx-auto px-4 md:px-0 md:flex md:justify-center md:items-start lg:w-[85%]">

                                {/*  */}

                                <div className=" md:w-1/2 lg:w-1/3 md:mr-8 border-t-3 border-1 p-4 border-gray-400 flex flex-col gap-4 cursor-pointer hover:border-t-red-600 transition-all relative group bg-white">
                                    <h1 class="text-3xl font-bold mb-4">Approach</h1>
                                    <p class="text-lg mb-4 font-semibold">Customer-Centric and Data-Driven Marketing:</p>
                                    <p>  By focusing on customer needs and perspectives, organizations can bridge the traditional divide between marketing and sales teams for maximum impact.</p>
                                    <div className="absolute top-0 left-0 w-full h-[.5px] bg-red-600 transition-all duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                                </div>


                                {/*  */}


                                <div class="md:w-1/2 lg:w-2/3 mt-8 md:mt-0 bg-white px-4 py-7 flex flex-col gap-4">

                                    <div>
                                        <p class="text-lg mb-4 font-semibold">Transform Your Customer Journey Through Search</p>
                                        <p>
                                            When your potential clients need solutions, 94% of them turn to search engines first. By optimizing your digital presence, we ensure your company connects with decision-makers at crucial moments in their buying journey. Our SEO strategies put your services in front of the right eyes, transforming searches into meaningful business relationships.</p>

                                    </div>
                                    <hr class="my-4" />

                                    <div>
                                        <p class="text-lg mb-4 font-semibold">Transform Your Customer Journey Through Search</p>
                                        <p>
                                            When your potential clients need solutions, 94% of them turn to search engines first. By optimizing your digital presence, we ensure your company connects with decision-makers at crucial moments in their buying journey. Our SEO strategies put your services in front of the right eyes, transforming searches into meaningful business relationships.</p>

                                    </div>

                                    <hr class="my-4" />

                                    <div>
                                        <p class="text-lg mb-4 font-semibold">Transform Your Customer Journey Through Search</p>
                                        <p>
                                            When your potential clients need solutions, 94% of them turn to search engines first. By optimizing your digital presence, we ensure your company connects with decision-makers at crucial moments in their buying journey. Our SEO strategies put your services in front of the right eyes, transforming searches into meaningful business relationships.</p>

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

export default Approach;