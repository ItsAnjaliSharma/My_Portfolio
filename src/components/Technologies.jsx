import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
// import { SiJavascript } from "react-icons/si";
// import { SiHtml5 } from "react-icons/si";
// import { SiCss3 } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants =(duration) => ({
  initial:{y:-10},
  animate:{y:[10, -10], 
    transition:
    {duration:duration,
       ease:"linear",
       repeat:Infinity, 
       repeatType:"reverse"
      }
    },}
);  

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 whileInView={{opacity:1, y:0 }}
      initial={{opacity:0, y:-100}}
     transition={{duration:1.5}}
       className="text-center text-4xl my-20 font-bold">Technologies</motion.h1>
      <motion.div
      whileInView={
        {opacity:1,x:0}
      }
      initial={{opacity:0,x:-100}}
      animate={{opacity:1,x:0}}     
      transition={{duration:1.5}}
       className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
            variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
            variants={iconVariants(5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
            variants={iconVariants(2)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
            variants={iconVariants(6)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-sky-400" />
        </motion.div>
        <motion.div     variants={iconVariants(4)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-teal-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
