"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';

const LogoSlider = () => {
  const logos = [
    '/logos/logo1.svg',
    '/logos/logo2.svg',
    '/logos/logo3.svg',
    '/logos/logo4.svg',
    '/logos/logo5.svg',
    '/logos/logo6.svg',
    '/logos/logo7.svg',
    '/logos/logo8.svg',
  ];

  return (
    <div className="py-8 bg-[#E3E3E3] w-full relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={40}
          loop={true}
          loopedSlides={logos.length}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          freeMode={true}
          allowTouchMove={false}
          className="w-full"
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <SwiperSlide 
              key={index} 
              className="!w-[120px] !flex items-center justify-center"
            >
              <div className="h-16 w-full grayscale hover:grayscale-0 transition-all duration-300">
                <div className="flex items-center justify-center h-full text-center">
                  Logo {index % logos.length + 1}
                </div>
                {/* Uncomment when using actual images */}
                {/* <Image 
                  src={logo} 
                  alt={`Logo ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain h-full w-full px-2"
                /> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LogoSlider;