"use client";
import React, { useRef } from "react";

const DemoVedio = () => {
  const videoRef = useRef(null);

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
    <div>
      <section class="relative h-[40rem] mb-5 flex flex-col items-start justify-center text-left text-white ">
        <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            class="min-w-full min-h-full absolute object-cover"
            src="../../../demo.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
            onClick={handleEnableControls}
          ></video>
        </div>
        <div class="video-content space-y-2 z-10 ml-10">
          <h1 class="font-light text-6xl">full Hero Video</h1>
          <h3 class="font-light text-3xl">with TailwindCSS</h3>
        </div>
        <div class="play-button absolute inset-0 flex items-center justify-center z-20">
          <button
            class="bg-white cursor-pointer text-black p-4 rounded-full"
            onClick={handlePlayPause}
          >
            Play/Pause
            
          </button>
        </div>
      </section>
    </div>
  );
};

export default DemoVedio;
