import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

const Products = () => {
    
  const product = [
    {
      id: 1,
      title: "FunkyTasker",
      description: "A vibrant task management app that turns your to-do list into a game, making productivity fun with quirky rewards and challenges to keep you on track.",
      live: true,
      case: false
    },
    {
      id: 2,
      title: "NomNomRadar",
      description: "Craving something delicious? This app scans your fridge and suggests creative recipes based on available ingredients, so you never waste food again.",
      live: true,
      case: false
    },
    {
      id: 3,
      title: "CloudMood",
      description: "A weather app with attitude—expect sassy weather updates, fun animations, and mood-based outfit suggestions to help you prepare for the day ahead.",
      live: true,
      case: false
    },
    {
      id: 4,
      title: "PixelVault",
      description: "A sleek personal portfolio site where each project is stored in a futuristic digital vault, complete with interactive animations and dynamic visuals.",
      live: true,
      case: true
    },
    {
      id: 5,
      title: "Cha-Ching Tracker",
      description: "Managing money doesn't have to be boring! This app adds a playful twist to budgeting with colorful graphs, spending challenges, and fun financial insights.",
      live: true,
      case: true
    }
  ]
  
  const [pos, setPos] = useState(0);

  const mover = (val) => {
      setPos(val*23)
  }

  return (
    <div className="mt-36 relative">
      {product.map((elem, index) => (
        <Product key={elem.id} val={elem} mover={mover} index={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div 
        initial={{y: pos, x: "-50%"}}
        animate={{y: pos+`rem`}}
        transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
        className="window absolute w-96 h-[23rem] bg-white left-[48%] overflow-hidden">
        <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className="w-full h-full bg-pink-100"></motion.div>
        <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className="w-full h-full bg-pink-200"></motion.div>
        <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className="w-full h-full bg-pink-300"></motion.div>
        <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className="w-full h-full bg-pink-400"></motion.div>
        <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className="w-full h-full bg-pink-500"></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
