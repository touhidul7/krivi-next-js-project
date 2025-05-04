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
      title: "Transform Your Growth Engine with AI",
      description: "Where Marketing Meets Intelligence, Sales Meet Precision",
      longdescription:
        "Build future-ready marketing and sales operations powered by artificial intelligence and data-driven insights. Turn strategy into measurable success with our comprehensive suite of AI solutions.",
      image: "/slide-1.webp",
      linktxt: "Get Started",
      link: "#",
    },
    {
      id: 2,
      name: "AI In Marketing",
      title: "Transform Your Growth Engine with AI",
      description: "Where Marketing Meets Intelligence, Sales Meet Precision",
      longdescription:
        "Build future-ready marketing and sales operations powered by artificial intelligence and data-driven insights. Turn strategy into measurable success with our comprehensive suite of AI solutions.",
      image: "/slide-2.webp",
      linktxt: "Get Started",
      link: "#",
    },
    {
      id: 4,
      name: "Payments",
      title: "Transform Your Growth Engine with AI",
      description: "Where Marketing Meets Intelligence, Sales Meet Precision",
      longdescription:
        "Build future-ready marketing and sales operations powered by artificial intelligence and data-driven insights. Turn strategy into measurable success with our comprehensive suite of AI solutions.",
      image: "/slide-3.webp",
      linktxt: "Get Start",
      link: "#",
    },
    {
      id: 3,
      name: "AI In Marketing",
      title: "Transform Your Growth Engine with AI",
      description: "Where Marketing Meets Intelligence, Sales Meet Precision",
      longdescription:
        "Build future-ready marketing and sales operations powered by artificial intelligence and data-driven insights. Turn strategy into measurable success with our comprehensive suite of AI solutions.",
      image: "/slide-3.webp",
      linktxt: "Get Started",
      link: "#",
    },
  ];


  const handleMenuClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index); // Programmatically change the slide
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-transparent">
      <Slider ref={sliderRef} {...settings} className="w-full h-full">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative w-full h-screen bg-[#0000005c] flex items-center justify-center "
          >
            <Image
              height={1000}
              width={2000}
              src={slide.image}
              alt={slide.title}
              className="absolute top-0 left-0 w-full h-full object-cover zoom-in-animation"
            />
            <div className="absolute pt-32 h-full inset-0 flex flex-col  items-start  lg:px-0 bottom-0 justify-between text-black hero-bg py-6 ">
              <div className="md:w-[85%] mx-auto md:px-0 px-4 pt-12 md:pt-0 lg:pt-0 h-full flex flex-col  items-start lg:px-0 bottom-0 justify-center">{/* between */}
                <div className="z-50 lg:w-[40%]">
                  {/* <h4 className="lg:text-[1.125rem] text-[16px] font-graphic font-bold z-400">
                  {slide.name}
                </h4> */}
                  <Link
                    href={slide.link}
                    className="text-[40px] lg:text-[60px] font-semibold font-graphic z-400  leading-[70px]"
                  >
                    {slide.title}
                  </Link>
                  <p className="text-lg md:text-2xl font-semibold mt-4 z-400">{slide.description}</p>
                  <p className="mt-4 z-400 text-md">{slide.longdescription}</p>
                  <button className="z-50 flex gap-4 hover:gap-8 items-center mt-10 cursor-pointer bg-[#E7000B] text-white p-4">
                    {slide.linktxt} <FaArrowRightLong />
                  </button>
                </div>

                {/* Slide Menu */}
                <div className="slide-menu z-50 w-full flex items-center justify-between flex-wrap gap-2 lg:gap-4 mt-10">
                  {slides.map((slideitem, index) => (
                    <button
                      key={slideitem.id}
                      className={`slide-menu-item  z-50 lg:text-2xl text-sm cursor-pointer p-6 border-t-5 transition-all ${currentSlide === index ? "border-red-600" : "border-transparent"
                        } hover:border-red-600`}
                      onClick={() => handleMenuClick(index)}
                    >
                      {slideitem.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
}