import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger); 

const Work = () => {

  const containerRef = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;

  // useGSAP(() => {
  //   gsap.to(slider, {
  //     scrollTrigger: {
  //       trigger: document.documentElement,
  //       scrub: 0.25,
  //       start: 0,
  //       end: window.innerHeight,
  //       onUpdate: (self) => {
  //         direction = self.direction * -1;
  //       },
  //     },
  //     x: '-500px',
  //   });

  //   const animate = () => {
  //     if (xPercent < -100) {
  //       xPercent = 0;
  //     } else if (xPercent > 0) {
  //       xPercent = -100;
  //     }
  //     gsap.set(firstText.current, { xPercent });
  //     gsap.set(secondText.current, { xPercent });
  //     xPercent += 0.1 * direction;
  //     requestAnimationFrame(animate);
  //   };

  //   animate();
  // }, { scope: containerRef });


  return (
    <div className="w-full h-[calc(100vh-5rem)] font-Satoshi relative overflow-hidden">
      <div className="relative max-w-screen-xl mx-auto pt-20">
        <h1 className="text-[5vw] leading-none tracking-tight font-thin select-none">
          Front-end
        </h1>
        {/* <h1 className="text-[15vw] leading-none tracking-tight font-semibold select-none">
          WEB
        </h1> */}
        <h1 className="text-[5vw] leading-none tracking-tight font-thin select-none">
        <span className="font-Mazius text-[#14CF93]">Web</span> Developer
        </h1>
      </div>
      <div ref={slider} className="relative mt-20 whitespace-nowrap">
        <h1 ref={firstText} className="font-medium text-[18vw] tracking-tight leading-none">
          Ankit Patel
          <span className="inline-block w-[15vw] h-[2vw] rounded-sm bg-[#333333] ml-4 align-middle"></span>
        </h1>
        <h1 ref={secondText} className="absolute left-[100%] top-0 font-medium text-[18vw] tracking-tight leading-none">
          Ankit Patel
          <span className="inline-block w-[15vw] h-[2vw] rounded-sm bg-white ml-4 align-middle"></span>
        </h1>
      </div>
    </div>
  );
};

export default Work;
