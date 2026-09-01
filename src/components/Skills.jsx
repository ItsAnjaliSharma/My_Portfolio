import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Skills & Expertise
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
        {SKILLS.map((skillGroup, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full md:w-1/2 lg:w-1/3"
          >
            <div className="rounded-lg border border-neutral-700 p-6 bg-neutral-900/50 hover:border-cyan-500 transition-colors duration-300">
              <h3 className="mb-4 text-xl font-bold text-cyan-400">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full bg-neutral-800 px-3 py-1 text-sm font-medium text-neutral-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
