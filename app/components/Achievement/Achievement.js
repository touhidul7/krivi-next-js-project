"use client";
import React, { useState } from "react";
import optionsData from "../../../public/data/options.json";
import secondQuestionOptionsData from "../../../public/data/secondQuestionOptions.json";
import Image from "next/image";
import NewSection from "./NewSection";

const Achievement = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showSecondQuestion, setShowSecondQuestion] = useState(false);
  const [showAllOptions, setShowAllOptions] = useState(false);
  const [showAllSecondOptions, setShowAllSecondOptions] = useState(false);
  const [showNewSection, setShowNewSection] = useState(false);

  const handleFirstQuestionChange = (event) => {
    setSelectedOption(event.target.value);
    setShowSecondQuestion(true);
  };

  const toggleShowAllOptions = () => {
    setShowAllOptions(!showAllOptions);
  };

  const toggleShowAllSecondOptions = () => {
    setShowAllSecondOptions(!showAllSecondOptions);
  };

  const resetQuestions = () => {
    setSelectedOption("");
    setShowSecondQuestion(false);
    setShowAllOptions(false);
    setShowAllSecondOptions(false);
    setShowNewSection(false);
  };

  const options = optionsData.options.map((option) => option.name);
  const secondQuestionOptions = secondQuestionOptionsData.secondQuestionOptions;

  const optionToImageMap = optionsData.options.reduce((map, option) => {
    map[option.name] = option.image;
    return map;
  }, {});

  const selectedImage = optionToImageMap[selectedOption] || "/madlib-02.webp";

  return (
    <div>
      <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex flex-col lg:flex-row gap-3">
          {!showNewSection ? (
            <div className="lg:w-1/2 w-full">
              <div className="mt-5 flex flex-col items-start">
                <>
                  <span className="text-[40px] text-start text-black leading-10 mb-3 font-medium pr-2">
                    We champion the bold to achieve the extraordinary.
                  </span>
                  <p className="text-gray-500 text-start mb-5">
                    Answer two questions and put our thinking to work on your
                    challenges.
                  </p>
                  {!showSecondQuestion && (
                    <>
                      <label
                        htmlFor="first-question"
                        className="block text-sm font-medium text-gray-700 mb-5"
                      >
                        <span className="text-lg text-black font-bold">
                          1. What is your industry?{" "}
                        </span>{" "}
                        <span className="text-gray-500"> Question 1 of 2</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {options
                          .slice(0, showAllOptions ? options.length : 10)
                          .map((option, index) => (
                            <button
                              key={index}
                              className="px-3 py-2 border cursor-pointer hover:bg-red-600 hover:text-white border-gray-200 text-red-600 font-semibold text-lg rounded-4xl"
                              onClick={() =>
                                handleFirstQuestionChange({
                                  target: { value: option },
                                })
                              }
                            >
                              {option}
                            </button>
                          ))}
                      </div>
                      {!showAllOptions && (
                        <button
                          className="mt-2 px-4 py-2 underline rounded-md text-sm"
                          onClick={toggleShowAllOptions}
                        >
                          View All
                        </button>
                      )}
                    </>
                  )}

                  {showSecondQuestion && !showNewSection && (
                    <>
                      <label
                        htmlFor="second-question"
                        className="block text-sm font-medium text-gray-700 mb-5"
                      >
                        <span className="text-lg text-black font-bold">
                          2. What is your role?{" "}
                        </span>{" "}
                        <span className="text-gray-500"> Question 2 of 2</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {secondQuestionOptions
                          .slice(
                            0,
                            showAllSecondOptions
                              ? secondQuestionOptions.length
                              : 10
                          )
                          .map((option, index) => (
                            <button
                              key={index}
                              className="px-3 py-2 border hover:bg-red-600 hover:text-white border-gray-200 text-red-600 font-semibold text-lg rounded-4xl cursor-pointer"
                              onClick={() => setShowNewSection(true)}
                            >
                              {option}
                            </button>
                          ))}
                      </div>
                      {!showAllSecondOptions && (
                        <button
                          className="mt-2 px-4 py-2 underline rounded-md text-sm"
                          onClick={toggleShowAllSecondOptions}
                        >
                          View All
                        </button>
                      )}
                    </>
                  )}
                </>
              </div>
            </div>
          ) : (
            <NewSection resetQuestions={resetQuestions} />
          )}
          {!showNewSection && (
            <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 w-full my-4">
              <Image
                width={500}
                height={500}
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src={selectedImage}
                alt=""
                style={{ height: "530px", width: "100%", objectFit: "cover" }}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Achievement;