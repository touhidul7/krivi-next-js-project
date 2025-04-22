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
          <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your email address:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              SUBSCRIBE
            </button>

            <div className="mt-4 flex items-start">
              <input
                type="checkbox"
                id="privacy"
                className="mt-1 mr-2 rounded text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="privacy" className="text-sm text-gray-700">
                I have read the Privacy Policy and agree to its terms.
              </label>
            </div>

            <div className="mt-4 text-center text-gray-500 text-sm">
              <p>In f 💹 @</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
