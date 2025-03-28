import React from "react";

export default function RedSection() {
  return (
    <div>
      <div className="flex justify-center items-stretch w-full bg-red-600 py-10">
        <div className="w-full flex flex-col justify-start items-center gap-10 py-16">
          <h2 className="text-4xl font-graphic font-bold text-white">
            What can we help you achieve?
          </h2>
          <p class="mt-4 leading-relaxed text-gray-700">
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                                earum similique!
                                            </p>
          <button className="py-5 cursor-pointer px-6 bg-transparent border-1 border-white text-white font-graphic font-semibold text-sm hover:bg-[#9D1B22] hover:border-transparent">
            {"LET'S"} GET TO WORK
          </button>
        </div>
        <div className="h-[100% !important] p-[0.4px] bg-black lg:block hidden"></div>

        <div className="w-full flex flex-col justify-center items-center gap-10 py-16">
          <h2 className="text-4xl font-graphic font-bold text-white">
          Where will your career take you?
          </h2>
          <button className="py-5 cursor-pointer px-6 bg-transparent border-1 border-white text-white font-graphic font-semibold text-sm hover:bg-[#9D1B22] hover:border-transparent">
          COME FIND OUT
          </button>
        </div>
      </div>
    </div>
  );
}
