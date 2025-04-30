import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaCaretRight } from 'react-icons/fa';
const KnowledgeAssets = () => {
    const assetData = [
        "Email Strategy for B2B Customers",
        "How to tell an Enterprise Story",
        "How to Use AI in Customer Segmentation",
        "The ICP Framework",
        "Search Optimization on Public LLM's"
      ]
    return (
        <div>
            <section id="scroll" className="sm:mt-6  mt-12 max-w-full mx-auto  sm:px-6 lg:px-0">
                <div className=" mx-auto sm:mt-12 sm:px-6 md:mt-16 lg:mt-0 lg:px-0  flex flex-col lg:flex-row gap-3">

                    <div className="lg:w-full w-full ">
                        <div className="bg-black py-5">
                            <div className=" lg:w-[85%] mt-12 mx-auto  md:px-0 md:flex md:justify-center lg:justify-stretch md:items-start">{/* container */}


                                <div className="md:w-1/2 mt-8 md:mt-0 px-4  lg:px-0 py-4 justify-stretch items-stretch flex flex-col gap-8">

                                    <h1 className="text-2xl md:text-4xl font-bold mb-4 mt-0 text-white ">Knowledge Assets</h1>

                                    <div className=" border-none divide-y divide-gray-200 rounded-xl h-full my-auto">

                                        <div className="flex flex-wrap gap-6 mt-6">
                                            {assetData?.map((data, index) => (
                                                <button
                                                    key={index} // or index if data values aren't unique
                                                    className="px-3 py-2 border cursor-pointer hover:bg-[#CC0000] hover:text-white border-red-600 text-white font-thin text-sm md:text-md rounded-4xl"
                                                >
                                                    {data}
                                                </button>
                                            ))}
                                        </div>

                                    </div>
                                </div>

                                <div className="md:w-1/2 lg:w-1/2 py-4  pl-4">

                                    <Image width={400} height={400} alt="image" src={"../../../knowledgeassets.jpg"} className="mb-7 h-full w-auto" />

                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default KnowledgeAssets;