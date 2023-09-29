import { motion } from "framer-motion";
import Button from "../Components/Button";
import LottieAnimationCard from "../Components/LottieAnimationCard";
import { HeroAnimation } from "../Helpers/AssetsList";
import { HiOutlineDownload } from "react-icons/hi";

const Hero = ({id}) => {
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } },
  };

  return (
    <main className="relative h-screen overflow-hidden pt-24" id={id}>
      <motion.div
        className="relative z-20 flex items-center overflow-hidden"
        initial="hidden"
        animate="visible"
      >
        <div className="container relative flex px-6 py-8 mx-auto justify-between flex-col md:flex-row">
          <motion.div
            className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5"
            variants={textVariants}
          >
            <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue md:text-9xl dark:text-white">
              <span className="text-fadeMainTheme"> Coding </span>
              Dreams into Reality
            </h1>
            <p className="text-gray-700 dark:text-white text-4xl">
              Building Tomorrow's Digital World Today
            </p>
            <motion.div variants={buttonVariants} className="flex mt-8">
              <Button
                btnText="Download CV"
                btnIcon={<HiOutlineDownload className="text-2xl" />}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="relative flex lg:justify-end justify-center items-center mt-10 md:mt-0"
            variants={textVariants}
          >
            <LottieAnimationCard AnimationSrc={HeroAnimation} />
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
};

export default Hero;
