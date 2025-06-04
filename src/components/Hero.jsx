import { HERO_CONTENT } from "../constants";
import mypic from "../assets/my_pic.jpg";
import { motion } from "framer-motion";

const container=(delay)=>({
  hidden:{x:-100, opacity:0},

  visible:{
    x:0,
    opacity:1,
    transition:{
      delay:delay,
      duration:0.5
    }
  }
})
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 lg:pb-20">
      <div className="flex flex-wrap items-center">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/2 px-6 lg:px-12">
          <div className="flex flex-col items-center lg:items-start lg:text-left">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
           className="text-5xl lg:text-7xl font-bold tracking-tight mt-6 lg:mt-10">
              Anjali Sharma
            </motion.h1>
            <motion.span 
               variants={container(0.5)}
            initial="hidden"
            animate="visible"
           className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-transparent bg-clip-text text-2xl tracking-tight lg:text-4xl font-medium mt-2">
              Full Stack Developer
            </motion.span>
            <motion.p 
               variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-4 max-w-xl text-lg text-justify font-light tracking-tight leading-relaxed">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-6 lg:px-12">
          <motion.img
          initial={{x:100, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{delay:1.2, duration:1}}
            src={mypic}
            alt="Anjali Sharma"
            className="w-80 h-96 lg:w-96 lg:h-[450px] object-cover rounded-lg shadow-md"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
