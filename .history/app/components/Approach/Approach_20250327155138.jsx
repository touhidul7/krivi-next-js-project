import React from 'react';

const Approach = () => {
    return (
        <div>
            <section id="scroll" className="sm:mt-6 lg:mt-8 mt-12 max-w-full mx-auto px-4 sm:px-6 lg:px-0">
                <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-0 xl:mt-28 flex flex-col lg:flex-row gap-3">

                    <div className="lg:w-[100%] w-full ">

                       {/*  <section class="text-gray-600 body-font">
                            <div class="container mx-auto flex  py-24 md:flex-row flex-col items-center">
                                <div
                                    class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                                        <br class="hidden lg:inline-block"/>readymade gluten
                                    </h1>
                                    <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
                                        cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic
                                        tumeric truffaut hexagon try-hard chambray.</p>
                                    <div class="flex justify-center">
                                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                                    </div>
                                </div>
                                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                    <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
                                </div>
                            </div>
                        </section> */}

<div className="pb-20 pt-10 text-left">
      <div className="flex lg:flex-row flex-col gap-10 justify-center w-[85%] mx-auto">
        {activeTab?.img && (
          <div className="border w-fit text-right">
            <Image
              src={activeTab.img}
              className={`h-auto w-[900px] text-right transition-opacity duration-700 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
              width={500}
              height={500}
              alt="image"
            />
          </div>
        )}
        <div className="w-full font-graphic">
          <div className="mb-10">
            <div className="heading text-5xl font-bold font-graphic mb-4">
              Bold steps forward.
            </div>
            <p className="font-tiempos text-xl font-light">
              See how we’ve helped ambitious clients achieve extraordinary
              outcomes.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 justify-items-stretch items-stretch">
            <div className="h-full">
              <div className="text-lg font-graphic mb-4">
                Featured client success story
              </div>
              <div className="border-t-3 h-full pt-4 border-gray-400 flex flex-col justify-between">
                <div>
                  <div
                    className={`font-semibold leading-10 text-[28px] font-graphic transition-opacity duration-500 ${
                      fade ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {activeTab?.featured.title}
                  </div>
                </div>
                <Link className="lg:mb-0 mb-16" href={activeTab?.featured.link}>
                  <button className="flex gap-2 justify-center items-center mt-4 cursor-pointer text-red-600 font-medium">
                    Read story <FaCaretRight />
                  </button>
                </Link>
              </div>
            </div>

            {/* Parent div with Faster Hover Progress */}
            <div className="h-full cursor-pointer">
              <div className="text-lg mb-4">How we helped</div>
              <div
                className="h-full border-t-3 border-1 p-4 border-gray-400 flex flex-col justify-between parent relative"
                onMouseEnter={handleHoverStartParent}
                onMouseLeave={handleHoverEndParent}
              >
                {/* Progress Bar */}
                <div
                  className="absolute top-0 -mt-[2px] left-0 h-[3px] bg-red-600 transition-all duration-100"
                  style={{ width: `${hoverProgress}%` }}
                ></div>

                <div className="parent">
                  <div
                    className={`font-semibold leading-10 font-graphic title transition-all duration-500 ${
                      hoveredParent ? "text-[20px]" : "text-[28px]"
                    }`}
                  >
                    {activeTab?.helped.title}
                  </div>
                  <div
                    className={`text-[16px] font-tiempos description transition-opacity duration-300 ${
                      hoveredParent ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {activeTab?.helped.des}
                  </div>
                </div>
                <Link href={activeTab?.helped.link}>
                  <button className="flex gap-2 justify-center items-center mt-4 cursor-pointer text-red-600 font-medium">
                    Read story <FaCaretRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination with Faster Hover Progress */}
      <div className="pagination flex gap-4 justify-center lg:mt-6 mt-16">
        {tabdata.map((item, index) => (
          <div
            key={index}
            className="relative w-5 h-5 flex justify-center items-center"
            onMouseEnter={() => handleHoverStart(index)}
            onMouseLeave={handleHoverEnd}
          >
            <div className="absolute w-full h-full rounded-full border-2 border-gray-400"></div>

            {hoverIndex === index && (
              <div
                className="absolute w-full h-full rounded-full border-2 border-red-600"
                style={{
                  clipPath: `inset(${100 - progress}% 0 0 0)`,
                  transition: "clip-path 0.05s linear",
                }}
              ></div>
            )}

            <button
              onClick={() => tab(item)}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                activeTab === item ? "bg-red-600 scale-110" : "bg-gray-400"
              }`}
            ></button>
          </div>
        ))}
      </div>
      <div className="w-full text-center mt-10 text-[13px] font-semibold font-graphic">
            <button className="p-4 border border-gray-300 text-red-700 uppercase hover:bg-red-700 hover:text-white cursor-pointer">
            See all client results
            </button>
          </div>
    </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Approach;