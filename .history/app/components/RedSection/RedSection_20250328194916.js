import React from "react";

export default function RedSection() {
  return (
    <div>
      <div className="flex   w-full bg-black py-10 px-20">
        <div className="w-full flex flex-col justify-items-start items-start gap-10 py-16">
          
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
