import { motion } from "motion/react";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({width, start, para, hover="false", heading = "Get In Touch", title = "Who we are", wid}) => {
  return (
    <motion.div whileHover={{backgroundColor: hover === "true" && "#7443ff"}} className={`bg-zinc-800 hover:${hover} p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}>
      <motion.div whileHover={{padding: "25px"}} className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3 className="font-light">{heading}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className={`text-3xl font-normal tracking-tight mt-10 ${wid}`}>{title}</h1>
      </motion.div>
      <div className="down w-full">
        {
        start === true && (
          <>
           <h1 className="text-7xl font-semibold leading-none tracking-tight">Start a Project</h1>
           <button className="rounded-full mt-5 border px-5 py-2 border-zinc-400 hover:bg-purple-600">Contact Us</button>
          </> 
        )
      }
      {
        para && (
          <p className="text-sm text-zinc-400 font-medium">Explore what drives our team.</p>
        )
      }
      </div>
    </motion.div>
  );
};

export default Card;
