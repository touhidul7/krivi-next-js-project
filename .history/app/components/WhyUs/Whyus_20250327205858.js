import Image from 'next/image';
import React from 'react';

const Whyus = () => {
    return (
        <div>
            <section id="scroll" className="sm:mt-6 lg:mt-8 mt-12 max-w-fu mx-auto px-4 sm:px-6 lg:px-0">
                <div className="my-10 mx-auto sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-0  flex flex-col lg:flex-row gap-3">

                    <div className="lg:w-full w-full ">
                        <div className="bg-[#E7000B] py-20">
                            <div className="container mx-auto px-4 md:px-0 md:flex md:justify-center md:items-start">

                                <div className="md:w-1/2 lg:w-1/3 md:mr-8  p-4">

                                    <Image width={500} height={500} alt="image" src={"../../../whyUs.png"} className="mb-7 w-full" />

                                </div>


                                <div className="md:w-1/2 lg:w-2/3 mt-8 md:mt-0  px-4 py-7 flex flex-col gap-4">

                                    <div>
                                        <p className="text-lg mb-4 font-semibold">Transform Your Customer Journey Through Search</p>
                                        <p>
                                            When your potential clients need solutions, 94% of them turn to search engines first. By optimizing your digital presence, we ensure your company connects with decision-makers at crucial moments in their buying journey. Our SEO strategies put your services in front of the right eyes, transforming searches into meaningful business relationships.</p>

                                    </div>
                                    <hr className="my-4" />

                                    <div>
                                        <p className="text-lg mb-4 font-semibold">Transform Your Customer Journey Through Search</p>
                                        <p>
                                            When your potential clients need solutions, 94% of them turn to search engines first. By optimizing your digital presence, we ensure your company connects with decision-makers at crucial moments in their buying journey. Our SEO strategies put your services in front of the right eyes, transforming searches into meaningful business relationships.</p>

                                    </div>

                                    <hr className="my-4" />

                                    <div>
                                        <p className="text-lg mb-4 font-semibold">Transform Your Customer Journey Through Search</p>
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

export default Whyus;