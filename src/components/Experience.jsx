import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
      <motion.h1 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
       className="my-20 text-center text-4xl">Experience</motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
            
            {/* Left Section (Year) */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
             className="w-full lg:w-1/4 mb-2 lg:mb-0">
              <p className="text-sm text-neutral-400">{experience.year}</p>
            </motion.div>

            {/* Right Section (Role, Company, Description, Technologies) */}
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
             className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-300">{experience.company}</span>
              </h6>
              
              <p className="text-neutral-400 mb-4 text-justify leading-relaxed">
                {experience.description}
              </p>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-neutral-900 text-purple-400 px-3 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
