import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCaretRight } from 'react-icons/fa';

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
                                    <hr className='py-1' />

                                    <div class="max-w-screen-md mx-auto p-10 dark:bg-gray-800">
                                        <div id="accordion-flush" data-accordion="collapse"
                                            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                                            data-inactive-classes="text-gray-500 dark:text-gray-400">
                                            <h3 id="accordion-flush-heading-1">
                                                <button type="button"
                                                    class="flex items-center justify-between w-full py-5 px-4 font-medium text-left border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                                                    data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                                                    aria-controls="accordion-flush-body-1">
                                                    <span>Can I use Landwind in open-source projects?</span>
                                                    <svg data-accordion-icon="" class="w-6 h-6 shrink-0 rotate-180" fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </h3>
                                            <div id="accordion-flush-body-1" class="" aria-labelledby="accordion-flush-heading-1">
                                                <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                                                    <p class="mb-2 text-gray-500 dark:text-gray-400">Landwind is an open-source library of interactive
                                                        components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                                    <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="#"
                                                        class="text-purple-600 dark:text-purple-500 hover:underline">get started</a> and start
                                                        developing websites even faster with components on top of Tailwind CSS.</p>
                                                </div>
                                            </div>
                                            <h3 id="accordion-flush-heading-2">
                                                <button type="button"
                                                    class="flex items-center justify-between w-full py-5 px-4 font-medium text-left border-b border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400"
                                                    data-accordion-target="#accordion-flush-body-2" aria-expanded="false"
                                                    aria-controls="accordion-flush-body-2">
                                                    <span>Is there a Figma file available?</span>
                                                    <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </h3>
                                            <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
                                                <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                                                    <p class="mb-2 text-gray-500 dark:text-gray-400">Landwind is first conceptualized and designed using the
                                                        Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                                    <p class="text-gray-500 dark:text-gray-400">Check out the <a href="#"
                                                        class="text-purple-600 dark:text-purple-500 hover:underline">Figma design system</a> based on
                                                        the utility classes from Tailwind CSS and components from Landwind.</p>
                                                </div>
                                            </div>
                                            <h3 id="accordion-flush-heading-3">
                                                <button type="button"
                                                    class="flex items-center justify-between w-full py-5 px-4 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                                                    data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
                                                    aria-controls="accordion-flush-body-3">
                                                    <span>What are the differences between Landwind and Tailwind UI?</span>
                                                    <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </h3>
                                            <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
                                                <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                                                    <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from
                                                        Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another
                                                        difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers
                                                        sections of pages.</p>
                                                    <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Landwind,
                                                        Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best
                                                        of two worlds.</p>
                                                    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                                    <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                                        <li><a href="#" class="text-purple-600 dark:text-purple-500 hover:underline">Landwind Pro</a></li>
                                                        <li><a href="#" class="text-purple-600 dark:text-purple-500 hover:underline">Tailwind UI</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <h3 id="accordion-flush-heading-4">
                                                <button type="button"
                                                    class="flex items-center justify-between w-full py-5 px-4 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                                                    data-accordion-target="#accordion-flush-body-4" aria-expanded="false"
                                                    aria-controls="accordion-flush-body-4">
                                                    <span>What about browser support?</span>
                                                    <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </h3>
                                            <div id="accordion-flush-body-4" class="hidden" aria-labelledby="accordion-flush-heading-4">
                                                <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                                                    <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from
                                                        Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another
                                                        difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers
                                                        sections of pages.</p>
                                                    <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Landwind,
                                                        Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best
                                                        of two worlds.</p>
                                                    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                                    <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                                        <li><a href="#" class="text-purple-600 dark:text-purple-500 hover:underline">Landwind Pro</a></li>
                                                        <li><a href="#" class="text-purple-600 dark:text-purple-500 hover:underline">Tailwind UI</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>




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