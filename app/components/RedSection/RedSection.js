"use client";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import Link from "next/link";

export default function RedSection() {
  const [termChecked, setTermCheked] = useState(false);
  return (
    <div className="bg-black">

      <section className="sm:mt-6 max-w-full lg:w-[85%] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="  sm:mt-12 sm:px-6  lg:px-0  flex flex-col lg:flex-row gap-3">

          <div className="lg:w-full w-full ">
            <div className="bg-black  ">
              <div className=" w-full  px-4 lg:px-0 md:px-0 md:flex md:justify-stretch md:items-start">



                <div className="flex lg:flex-row flex-col  w-full bg-black py-10 px-0">
                  <div className="w-full flex flex-col justify-items-start items-start gap-10 py-10">
                    <p className="mt-4 leading-relaxed text-white">
                      Stay ahead in a rapidly changing world. Subscribe to Bain Insights,
                      our monthly look at the critical issues facing global businesses.
                    </p>

                    <a className="text-red-400 text-xl" href="#">
                      Krivi
                    </a>

                    <p className="mt-4 leading-relaxed text-gray-600">
                      Address: Lodha Supremus, New Cuffe Parade, Bandra Kurla Complex Ex,
                      Mumbai, Maharashtra 400037
                    </p>
                  </div>

                  <div className="w-full flex flex-col bg-black justify-items-start items-start gap-10 py-10">
                    <form className="flex flex-col gap-4 w-full">
                      <div className="flex lg:flex-row flex-col gap-4 w-full">
                        <input
                          className="lg:w-2/3 bg-[#424242] p-4 text-white"
                          placeholder="Your Email Address"
                          type="email"
                        />
                        <button
                          type="submit"
                          className="lg:w-1/3 lg:p-0 lg:py-0 py-4 text-white bg-[#C42622] cursor-pointer "
                        >
                          SUBSCRIBE
                        </button>
                      </div>
                      <div className="flex items-center">
                        <input
                          onChange={() => setTermCheked(!termChecked)}
                          checked={termChecked}
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 ring-offset-gray-800 focus:ring-0 bg-gray-700 border-gray-600"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ms-2 text-sm font-medium text-gray-300 cursor-pointer "
                        >
                          *I have Learned Privacy Policy and agree to its term
                        </label>
                      </div>
                    </form>
                    <div className="flex justify-end items-center gap-4 w-full">
                      <Link href={"#"}>
                        <FaLinkedinIn size={20} className="text-white " />
                      </Link>
                      <Link href={"#"}>
                        <FaFacebookF size={20} className="text-white " />
                      </Link>
                      <Link href={"#"}>
                        <AiOutlineYoutube size={20} className="text-white " />
                      </Link>
                      <Link href={"#"}>
                        <FaInstagram size={20} className="text-white " />
                      </Link>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
