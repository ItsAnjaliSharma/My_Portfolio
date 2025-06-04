import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-12 px-4 md:px-10">
            <h1 className="my-12 text-center text-3xl md:text-4xl font-bold">
                About <span className="text-neutral-500">Me</span>
            </h1>

            <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-8">
                {/* Image on the Left */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <img
                        className="rounded-2xl w-full max-w-[400px] h-auto"
                        src={aboutImg}
                        alt="about"
                    />
                </motion.div>

                {/* Text on the Right */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className="text-base md:text-lg text-justify max-w-xl">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
