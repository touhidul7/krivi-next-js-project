"use client";
import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const DemoVedio = () => {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        videoRef.current.controls = true; // Enable controls when playing
      } else {
        videoRef.current.pause();
        videoRef.current.controls = false; // Disable controls when paused
      }
    }
  };

  const handleEnableControls = () => {
    if (videoRef.current) {
      videoRef.current.controls = true; // Enable controls
    }
  };

  return (
    <div className="max-w-screen p-0">
      <section className="relative w-[99vw] mx-auto h-[40rem] flex flex-col items-start justify-center text-left text-white overflow-hidden">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden ">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="../../../demo.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
            onClick={handleEnableControls}
          ></video>
        </div>
        <div className="video-content z-10 ml-10">
          <h2 className="font-bold text-6xl leading-20 text-start mb-5">
            Helping fast-moving <br /> innovators scale <br /> with purpose.
          </h2>
          <button className="border px-7 py-4 fomt-bold text-md hover:bg-red-900 hover:border-red-900 transition-all  z-30 cursor-pointer">Join Us</button>

        </div>
        <div className="play-button absolute right-0 left-0 flex items-center justify-center z-[30] ">
          <button
            className="bg-white cursor-pointer text-red-600 p-6 opacity-65 rounded-full flex items-center justify-center"
            onClick={() => { handlePlayPause(); setPlay(!play); }}
          >
            <FaPlay size={25} />
          </button>
        </div>
        <FullScreenVideo play={play} />
      </section>
    </div>
  );
};

export default DemoVedio;


const FullScreenVideo = ({ play }) => {
  return (
    <div className={`absolute inset-0 bg-black z-50 flex items-center justify-center ${play ? "block" : "hidden"}`}>
      <video 
        className="w-screen h-full object-contain" 
        controls={true} 
        autoPlay={play}
      >
        <source src="../../../demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};