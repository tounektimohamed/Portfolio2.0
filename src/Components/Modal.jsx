import { useState } from "react";
import { ProjectList } from "../Constants/ProjectDetails";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Components/Button";
import { AiOutlineGithub, AiOutlineCloseCircle } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";

const Modal = ({ onClose, projectKey }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [singleProject] = ProjectList.filter((data) => data.key === projectKey);
  const { codeLink, demoLink, info, name, skills, youtube_url } = singleProject;

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: "180deg" }}
            animate={{
              scale: 1,
              rotate: "0deg",
              transition: {
                type: "spring",
                bounce: 0.25,
              },
            }}
            exit={{ scale: 0, rotate: "180deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[70vh] cursor-default overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 p-6 text-white shadow-2xl overflow-y-auto"
          >
            <div className="flex flex-col gap-3 lg:flex-row">
              {/* Project Information */}
              <div className="flex-1 lg:mr-4">
                <h2 className="text-center text-3xl font-bold text-white">
                  {name}
                </h2>
                <p className="mb-1 text-center text-white">{info}</p>
                <div className="modal-skills mt-4">
                  <h3 className="text-xl font-semibold text-center text-white">
                    Skills Used:
                  </h3>
                  <ul className="list-disc list-inside text-lg text-center text-white">
                    {skills?.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex justify-around items-center">
                  <Button
                    btnText="View Code"
                    btnIcon={<AiOutlineGithub />}
                    handleOnClick={() =>
                      window.open(codeLink, "_blank", "noopener noreferrer")
                    }
                  />
                  <Button
                    btnText="View Demo"
                    btnIcon={<TbWorldWww />}
                    handleOnClick={() =>
                      window.open(demoLink, "_blank", "noopener noreferrer")
                    }
                  />
                </div>
              </div>

              {/* Demo Video */}
              {youtube_url && (
                <div className="flex-1 lg:ml-4 mt-4 lg:mt-0">
                  <h3 className="text-xl font-bold text-center text-white">
                    Demo Video:
                  </h3>
                  <iframe
                    width="560"
                    height="315"
                    src={youtube_url}
                    title={name}
                    className="w-full rounded-lg"
                    allowFullScreen
                  />
                </div>
              )}
            </div>

            {/* Close Button */}
            <div className="modal-close absolute top-2 right-2">
              <motion.button
                onClick={closeModal}
                className="text-red-500 hover:bg-red-600 rounded-full hover:text-white text-4xl"
                whileTap={{ scale: 0.9 }}
              >
                <AiOutlineCloseCircle />
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
