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

          <p class="mt-4 leading-relaxed text-gray-600">
            Address: Lodha Supremus, New Cuffe Parade, Bandra Kurla Complex Ex, Mumbai, Maharashtra 400037
          </p>


        </div>


        <div className="w-full flex flex-col justify-items-start items-start gap-10 py-10">
        
        </div>
      </div>
    </div>
  );
}
