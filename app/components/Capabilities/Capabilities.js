import Image from "next/image";
import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Capabilities = () => {
  const items = [
    "AI-powered omnichannel personalization at scale",
    "Advanced customer profiling and journey optimization",
    "Data-driven campaign strategy and execution",
    "Automated lead generation and qualification",
  ];

  const items2 = [
    "Precision audience targeting and channel optimization",
    "Advanced analytics and attribution modeling",
    "Dynamic content creation and deployment",
    "Comprehensive brand safety and fraud prevention",
  ];

  return (
    <div className=" bg-[#E3E3E3] py-1">
      <section className="sm:mt-6 max-w-full lg:w-[85%] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="my-10 mx-auto sm:mt-12 sm:px-6  lg:px-0  flex flex-col lg:flex-row gap-3">
          <div className="lg:w-full w-full ">
            <div className="">
              <div className="container mx-auto  px-4 md:px-0 md:flex md:justify-center md:items-start">
                <section className="sm:mt-6 mx-auto px-4 pb-5 sm:px-6">
                  <div className=" mb-10 new-section flex flex-col lg:flex-row justify-center w-full gap-10 lg:gap-20">
                    <div className="w-full ">
                      <h1 className="text-3xl leading-10 sm:leading-12 text-black mb-3 font-semibold text-center">
                        Our Core Capabilities - Marketing Operations managed
                        services
                      </h1>
                      <p className="text-md mb-4 text-center">
                        Driving growth through integrated digital solutions
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 w-full">
                    <div className="h-full border-t-3  hover:border-t-red-600 transition-all relative group border-gray-400  bg-white p-10">
                      <a
                        href="#"
                        className="text-white p-2  bg-red-700 text-sm font-bold"
                      >
                        CXM
                      </a>
                      <p className="text-sm mt-4 font-semibold">
                        Build meaningful customer relationships through
                        data-driven insights and personalized experiences.
                      </p>
                      <p className="text-sm mt-4 font-semibold">
                        Core Capabilities:
                      </p>

                      <div className="space-y-3 mt-4">
                        {items.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <BsArrowUpRightCircleFill className="text-[#C52222] text-lg" />

                            <a
                              href="#"
                              className="text-black text-sm "
                            >
                              {item}

                              
                            </a>
                          </div>
                        ))}
                      </div>


                      <div className="absolute top-0 left-0 w-full h-[.5px] bg-red-600 transition-all duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left"></div>

                  

                    </div>




                    <div className="h-full  border-gray-400 p-10">
                      <a
                        href="#"
                        className="text-white p-2  bg-red-700 text-sm font-bold"
                      >
                        Digital Marketing & Media Growth Solutions
                      </a>
                      <p className="text-sm mt-4 font-semibold">
                      Digital Marketing & Media Growth Solutions
                      </p>
                      <p className="text-sm mt-4 font-semibold">
                        Core Capabilities:
                      </p>

                      <div className="space-y-3 mt-4">
                        {items2.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <BsArrowUpRightCircleFill className="text-[#C52222] text-lg" />

                            <a
                              href="#"
                              className="text-black text-sm "
                            >
                              {item}

                              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 scale-x-100 group-hover:scale-x-110 transition-transform duration-300"></span>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>




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

export default Capabilities;
