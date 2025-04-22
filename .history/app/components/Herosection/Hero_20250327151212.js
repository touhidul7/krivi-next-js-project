"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown, FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false,
    afterChange: (index) => setCurrentSlide(index), // Update current slide index
  };

  const slides = [
    {
      id: 1,
      name: "Private Equity",
      title: "Global Private Equity Report 2025",
      description: "We provide top-notch consulting services to boost your success.",
      image: "/slide-1.webp",
      linktxt: "Read the report",
      link: "#",
    },
    {
      id: 2,
      name: "AI In Marketing",
      title: "Innovative Strategies",
      description: "Transform your business with cutting-edge solutions.",
      image: "/slide-2.webp",
      linktxt: "Register for the webinar",
      link: "#",
    },
    {
      id: 4,
      name: "Payments",
      title: "Can US Banks Protect Their Card-Issuing Business?",
      description: "Our experts are here to help you achieve your goals.",
      image: "/slide-3.webp",
      linktxt: "Read more",
      link: "#",
    },
    {
      id: 3,
      name: "AI In Marketing",
      title: "For Marketers, Gen AI Moves from Novelty to Necessity",
      description: "Our experts are here to help you achieve your goals.",
      image: "/slide-3.webp",
      linktxt: "Read more",
      link: "#",
    },
  ];

  const handleMenuClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index); // Programmatically change the slide
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-transparent">
      <Slider ref={sliderRef} {...settings} className="w-full h-full">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative w-full h-screen bg-[#0000005c] flex items-center justify-center"
          >
            <Image
              height={1000}
              width={2000}
              src={slide.image}
              alt={slide.title}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute lg:pt-20 inset-0 flex flex-col mx-auto items-start lg:px-36 bottom-0 justify-between text-black  hero-bg p-6 ">
              <div></div>
              <div className="z-50 lg:w-[40%]">
                <h4 className="lg:text-[1.125rem] text-[16px] font-graphic font-bold z-400">
                  {slide.name}
                </h4>
                <Link
                  href={slide.link}
                  className="text-[40px] lg:text-[60px] font-semibold font-graphic z-400  leading-[70px]"
                >
                  {slide.title}
                </Link>
                <p className="text-lg md:text-xl mt-4 z-400">{slide.description}</p>
                <button className="z-50 flex gap-4 hover:gap-8 items-center mt-10 cursor-pointer">
                  {slide.linktxt} <FaArrowRightLong />
                </button>
              </div>

              {/* Slide Menu */}
              <div className="slide-menu z-50 w-full flex items-center justify-between gap-2 lg:gap-4 mt-10">
                {slides.map((slideitem, index) => (
                  <button
                    key={slideitem.id}
                    className={`slide-menu-item  z-50 lg:text-2xl text-sm cursor-pointer p-6 border-t-5 transition-all ${
                      currentSlide === index ? "border-red-600" : "border-transparent"
                    } hover:border-red-600`}
                    onClick={() => handleMenuClick(index)}
                  >
                    {slideitem.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Link href={"#scroll"} className="absolute bottom-0 font-extralight gap-2 text-[12px] right-0 m-6 flex flex-col justify-center items-center text-white">
        Scroll <span className="p-2 border-1 border-white rounded-full"><FaAngleDown  size={30}/></span>
      </Link>
    </div>
  );
}
