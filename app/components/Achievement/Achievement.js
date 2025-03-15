"use client";
import React, { useState } from "react";

const Achievement = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showSecondQuestion, setShowSecondQuestion] = useState(false);
  const [showAllOptions, setShowAllOptions] = useState(false);

  const handleFirstQuestionChange = (event) => {
    setSelectedOption(event.target.value);
    setShowSecondQuestion(true);
  };

  const toggleShowAllOptions = () => {
    setShowAllOptions(!showAllOptions);
  };

  const options = Array.from({ length: 20 }, (_, i) => `Option ${i + 1}`);

  const optionToImageMap = {
    "Option 1": "/one.jpg",
    "Option 2": "/two.jpg",
    "Option 3": "/three.jpg",
    // Add mappings for other options
  };

  const selectedImage = optionToImageMap[selectedOption] || "/one.jpg";

  return (
    <div>
      <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">

          <div className="lg:w-1/2">
            {!showSecondQuestion && (
              <div className="mt-5 flex flex-col items-start">
                <label htmlFor="first-question" className="block text-sm font-medium text-gray-700 mb-5">
                <span className="text-lg text-black font-bold">1. What is your industry? </span> <span className="text-gray-500"> Question 1 of 2</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {options.slice(0, showAllOptions ? options.length : 10).map((option, index) => (
                    <button
                      key={index}
                      className="p-4 border border-gray-200 text-red-600 font-bold text-lg rounded-4xl"
                      onClick={() => handleFirstQuestionChange({ target: { value: option } })}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {!showAllOptions && (
                  <button
                    className="mt-2 px-4 py-2 underline  rounded-md text-sm"
                    onClick={toggleShowAllOptions}
                  >
                    View All
                  </button>
                )}
              </div>
            )}

            {showSecondQuestion && (
              <div className="mt-5">
                <label htmlFor="second-question" className="block text-sm font-medium text-gray-700">
                  Question 2
                </label>
                <select
                  id="second-question"
                  name="second-question"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="">Select an option</option>
                  <option value="Option A">Option A</option>
                  <option value="Option B">Option B</option>
                  <option value="Option C">Option C</option>
                </select>
              </div>
            )}
          </div>

          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={selectedImage}
              alt=""
            />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Achievement;