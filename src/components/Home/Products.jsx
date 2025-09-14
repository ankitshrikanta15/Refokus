import { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

const Products = () => {
  const product = [
    {
      id: 1,
      title: "Hotel Project",
      description:
        "A vibrant task management app that turns your to-do list into a game, making productivity fun with quirky rewards and challenges to keep you on track.",
      live: true,
      case: true,
      color: "#1430D4",
    },
    {
      id: 2,
      title: "Restaurant Project",
      description:
        "Craving something delicious? This app scans your fridge and suggests creative recipes based on available ingredients, so you never waste food again.",
      live: true,
      case: false,
      color: "#FB523B",
    },
    {
      id: 3,
      title: "Hospital Project",
      description:
        "A weather app with attitude—expect sassy weather updates, fun animations, and mood-based outfit suggestions to help you prepare for the day ahead.",
      live: true,
      case: false,
      color: "#FB523B",
    },
    {
      id: 4,
      title: "Retail Store",
      description:
        "A sleek personal portfolio site where each project is stored in a futuristic digital vault, complete with interactive animations and dynamic visuals.",
      live: true,
      case: true,
      color: "#FB523B",
    },
    {
      id: 5,
      title: "Cha-Ching Tracker",
      description:
        "Managing money doesn't have to be boring! This app adds a playful twist to budgeting with colorful graphs, spending challenges, and fun financial insights.",
      live: true,
      case: true,
      color: "#FB523B",
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <>
      <div className="relative max-w-screen-xl mx-auto mt-36">
        <h1 className="text-[10vw] font-Montreal inline-block">Wo<span className="font-Mazius text-[#14CF93]">r</span>k</h1>
        <div className="absolute bottom-4 left-0 w-full h-[2px] bg-gradient-to-r from-white via-[#14CF93] to-white opacity-70"></div>
      </div>
      <div className="mt-10 relative">
        {product.map((elem, index) => (
          <Product key={elem.id} val={elem} mover={mover} index={index} />
        ))}
        <div className="absolute top-0 w-full h-full pointer-events-none">
          <motion.div
            initial={{ y: pos, x: "-50%" }}
            animate={{ y: pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window absolute w-96 h-[23rem] bg-white left-[48%] overflow-hidden"
          >
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full bg-pink-100"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos//rainfallv2-169.webm"
              ></video>
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full bg-pink-200"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/josys-169.webm"
              ></video>
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full bg-pink-300"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/josys-169.webm"
              ></video>
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full bg-pink-400"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/josys-169.webm"
              ></video>
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full bg-pink-500"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/josys-169.webm"
              ></video>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="mt-20 flex justify-center">
      <button className="group relative overflow-hidden px-12 py-5 text-lg font-Montreal tracking-wider border border-[#14CF93] rounded-none hover:bg-[#14CF93] transition-all duration-500">
          <span className="relative z-10 group-hover:text-black transition-colors duration-500">See More</span>
          <div className="absolute inset-0 bg-[#14CF93] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </button>
      </div>
    </>
  );
};

export default Products;
