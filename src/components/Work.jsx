import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Work = () => {

  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "40%",
      left: "50%",
      isActive: false,
    },
    {
      id: 2,
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      id: 3,
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "60%",
      isActive: false,
    },
    {
      id: 4,
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "65%",
      isActive: false,
    },
    {
      id: 5,
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "55%",
      left: "40%",
      isActive: false,
    },
    {
      id: 6,
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "85%",
      left: "55%",
      isActive: false,
    },
  ]);


  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {

    const imagesShow = (arr) => {
        setImages(prev => (
          prev.map((item, index) => (
            arr.indexOf(index) === -1 ? (
              {...item, isActive: false}
            ) : (
              {...item, isActive: true}
            )
          ))
        ))
    }

    switch (Math.floor(data*100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0, 1]);
        break;
      case 2:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
      case 6:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 8:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
      case 10:
      imagesShow([0, 1, 2, 3, 4, 5, 6]);
        break;
    }
  })



  return (
    <div className="w-full mt-5">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[28vw] leading-none tracking-tight font-semibold select-none">
          WORK
        </h1>
      <div className="absolute top-0 w-full h-full">
        {images.map((elem, index) => (elem.isActive && (<img key={elem.id} className="absolute w-70 rounded-lg -translate-x-[50%] -translate-y-[50%]" src={elem.url} style={{top: elem.top, left: elem.left}} alt="images" />)))}
      </div>
      </div>
    </div>
  );
};

export default Work;
