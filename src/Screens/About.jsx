import LottieAnimationCard from "../Components/LottieAnimationCard"
import Timeline from "../Components/TimeLine"
import AboutAnimation from '../Assets/Animations/AboutAnimation.json'
import Title from "../Components/Title"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"


const About = ({ id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1 * 0.5,
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      ref={ref}
      id={id} className="my-7">
      <Title text='About' styles='mb-10' />
      <Timeline />
      <LottieAnimationCard AnimationSrc={AboutAnimation} />
    </motion.div>
  )
}

export default About