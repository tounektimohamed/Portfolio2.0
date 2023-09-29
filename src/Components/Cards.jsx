import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Cards = ({ title, imgSrc, index ,demoLink,clientDemoLink}) => {
  const ref = useRef(null);
      const navigate = useNavigate();

  const isInView = useInView(ref);
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
      },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      rotateY: 10,
      boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
const navigateToProject=()=>{
  window.open(demoLink, "_blank", "noopener noreferrer")
}
  return (
    <motion.div
      ref={ref}
      className="flex justify-center items-center flex-col border border-gray-300 dark:border-gray-500 rounded-3xl p-20 m-10 gap-5"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      whileHover={hoverVariants}
      onClick={() => {
        clientDemoLink ? window.open(clientDemoLink, "_blank", "noopener noreferrer")
            : navigate("/project/" + index)
    }}
    >
      <picture className="flex justify-center items-center">
        <motion.img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        />
      </picture>
      <h2 className="font-black leading-none text-fadeMainTheme text-xl mt-3 font-bebas-neue">
        {title}
      </h2>
    </motion.div>
  );
};

export default Cards;