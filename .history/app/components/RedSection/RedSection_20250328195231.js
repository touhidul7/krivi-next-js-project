import React from "react";

export default function RedSection() {
  return (
    <div>
      <div className="flex   w-full bg-black py-10 px-20">
        <div className="w-full flex flex-col justify-items-start items-start gap-10 py-10">
          
          <p class="mt-4 leading-relaxed text-white">
          Stay ahead in a rapidly changing world. Subscribe to Bain Insights, our monthly look at the critical issues facing global businesses.
                                            </p>
          
          <a className="text-red-400 text-xl" href="#">Krivi</a>

          <p class="mt-4 leading-relaxed text-white">
          Stay ahead in a rapidly changing world. Subscribe to Bain Insights, our monthly look at the critical issues facing global businesses.
                                            </p>


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
