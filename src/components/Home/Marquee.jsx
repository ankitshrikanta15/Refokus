import { motion } from "motion/react"
import { GiDuration } from "react-icons/gi"


const Marquee = ({imagesURL, direction}) => {
  return (
    <motion.div className="flex w-full overflow-hidden text-[#333333]">
      <motion.div initial={{x: direction === "left" ? "0" : "-100%"}} animate={{x: direction === "left" ? "-100%" : "0"}} transition={{ease: "linear", duration: 50, repeat: Infinity}} className="flex flex-shrink-0 gap-20 py-10 pr-10">
      {imagesURL.map((url, i) => <img key={i} src={url} alt="" className="h-8 w-auto" style={{filter: 'brightness(0) saturate(100%) invert(20%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)'}} />)}
      </motion.div> 
      <motion.div initial={{x: direction === "left" ? "0" : "-100%"}} animate={{x: direction === "left" ? "-100%" : "0"}} transition={{ease: "linear", duration: 50, repeat: Infinity}} className="flex flex-shrink-0 gap-20 py-10 pr-10">
      {imagesURL.map((url, i) => <img key={i} src={url} alt="" className="h-8 w-auto" style={{filter: 'brightness(0) saturate(100%) invert(20%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)'}} />)}
      </motion.div> 
    </motion.div>
  )
}

export default Marquee