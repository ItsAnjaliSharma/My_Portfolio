import { HERO_CONTENT } from "../constants";
import mypic from "../assets/hero_avatar.png";
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
    <section className="pb-10 lg:pb-20">
      <div className="flex flex-wrap items-center lg:flex-nowrap gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-3/5">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-6xl lg:text-8xl font-extrabold tracking-tight bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent leading-tight"
            >
              Anjali Sharma
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text text-3xl tracking-tight lg:text-5xl font-semibold mt-4"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-8 max-w-2xl text-lg text-neutral-400 font-light tracking-wide leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>
            
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="mt-10 flex gap-4"
            >
              <a href="#contact" className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-all">
                Hire Me
              </a>
              <a href="https://github.com/ItsAnjaliSharma" target="_blank" rel="noreferrer" className="px-8 py-3 border border-neutral-700 rounded-full font-bold hover:bg-neutral-900 transition-all">
                View GitHub
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 blur-3xl opacity-20 rounded-full"></div>
            <img
              src={mypic}
              alt="Anjali Sharma"
              className="relative w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-neutral-800"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Hero;
