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


        <div className="w-full flex flex-col justify-center items-center gap-10 py-16">
          <div className="font-sans max-w-xs mx-auto p-4">
            <div className="mb-4">
              <p className="text-sm text-gray-800 mb-1">Your email address</p>
              <div className="h-px bg-gray-300 w-full mb-4"></div>
            </div>

            <div className="flex items-start mb-4">
              <input
                type="checkbox"
                id="privacy"
                className="mt-0.5 mr-2 rounded border-gray-300 text-gray-700 focus:ring-gray-500"
              />
              <label htmlFor="privacy" className="text-xs text-gray-800">
                1 have read the Privacy Policy and agree to its terms.
              </label>
            </div>

            <div className="text-center">
              <p className="text-xs text-gray-800">in f 💹😊</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
