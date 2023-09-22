import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import Switcher from "../Components/Switcher";
import { MainLogo } from "../Helpers/AssetsList";
import NavItems from "../Helpers/NavItems";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menu animations
  const menuAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const menuIconAnimation = {
    hidden: { rotate: 0 },
    visible: { rotate: 90, transition: { duration: 0.3 } },
  };
  
  const initialNavItemAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl xl:max-w-full md:px-24 lg:px-8 dark:bg-darkBg z-40">
      <div className="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          {MainLogo}
        </a>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          {NavItems.map((item) => (
            <li className="hover:text-gray-600 focus:outline-none focus:text-white underline-custom">
              <a
                href="/"
                aria-label={item}
                title={item}
                className="font-medium tracking-wide text-gray-700 dark:text-lightText transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Switcher />
          </li>
        </ul>
        <div className="lg:hidden flex justify-center items-center z-40">
          <Switcher />
          <motion.button
            aria-label="Toggle Menu"
            title="Toggle Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              className="text-gray-600 text-6xl font-bold dark:text-lightText"
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              variants={menuIconAnimation}
            >
              <BiMenuAltRight />
            </motion.div>
          </motion.button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="absolute top-0 left-0 w-full"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuAnimation}
              >
                <div className="p-5 bg-white border rounded-xl shadow-sm dark:bg-darkBg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        {MainLogo}
                      </a>
                    </div>
                    <div>
                      <motion.button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.div
                          className="text-gray-600 dark:text-lightText text-4xl font-bold"
                          initial="hidden"
                          animate="visible"
                          variants={menuIconAnimation}
                        >
                          <RxCross2 />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {NavItems.map((item) => (
                        <li key={item}>
                          <motion.a
                            href="/"
                            aria-label={item}
                            title={item}
                            className="font-medium tracking-wide dark:text-gray-300 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            variants={menuAnimation}
                          >
                            {item}
                          </motion.a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
