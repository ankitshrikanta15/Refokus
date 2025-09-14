import { motion } from "motion/react";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Ballpit from "../Animation/Ballpit";

const Card = ({
  width,
  start,
  para,
  hover = "false",
  heading = "Get In Touch",
  title = "Who we are",
  wid,
}) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: hover === "true" && "#14CF93" }}
      className={`bg-[#333333] hover:${hover} p-8 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between text-[#F8F8F8] relative overflow-hidden`}
    >
      {/* Ballpit Background Animation */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <Ballpit
          count={100}
          gravity={0.01}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={false}
          colors={[0x000000, 0x14CF93, 0xFFFFFF]} // Black, Green, White
          // ambientColor = {16777215}
          // ambientIntensity={10}
        />
      </div>

      {/* Content Layer - positioned above the animation */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <motion.div whileHover={{ padding: "32px" }} className="w-full">
          <div className="w-full flex items-center justify-between">
            <h3 className="font-light text-[#F8F8F8]">{heading}</h3>
            <IoIosArrowRoundForward className="text-[#14CF93] text-2xl" />
          </div>
          <h1
            className={`text-3xl font-normal tracking-tight mt-10 text-[#F8F8F8] ${wid}`}
          >
            {title}
          </h1>
        </motion.div>
        <div className="down w-full">
          {start === true && (
            <>
              <h1 className="text-7xl font-semibold leading-none tracking-tight text-[#F8F8F8]">
                Start a Project
              </h1>
              <a
                href="/contact"
                className="inline-block rounded-full mt-5 border px-6 py-3 border-[#F8F8F8] hover:bg-[#f8f8f8] hover:text-[#333333] hover:scale-110 text-[#F8F8F8] transition-all duration-300 font-medium"
              >
                Contact Me
              </a>
            </>
          )}
          {para && (
            <p className="text-sm text-[#F8F8F8]/80 font-medium">
              Discover my BIM modeling expertise and professional approach.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
