import { useParams } from 'react-router-dom';
import { ProjectList } from '../Helpers/ProjectDetails';
import { motion } from 'framer-motion';
import Button from '../Components/Button';
import { AiOutlineGithub } from 'react-icons/ai';
import { TbWorldWww } from 'react-icons/tb';
import { useEffect } from 'react';

const SingleProject = () => {
  const { id } = useParams();
  const { codeLink, demoLink, image, info, name, skills, youtube_url } = ProjectList[id];
  useEffect(()=>{
    window.scroll(0, 0);
  },[])

  return (
    <div className="min-h-screen pt-20">
      <div className="lg:max-w-[70%] xl mx-auto p-4 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
            <motion.h1
              className="text-4xl font-bold my-4 text-center text-fadeMainTheme"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {name}
            </motion.h1>
          <div className="flex flex-col justify-center  items-center dark:bg-gray-700 rounded-xl shadow-lg">

            <div className=" py-8 px-3 flex items-center justify-between  lg:flex-row flex-col gap-5">
              <motion.div
                className="lg:w-1/2 my-8 lg:mt-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <img src={image} alt={name} className="w-full rounded-lg" />
              </motion.div>
              <motion.div
                className="lg:w-1/2 pr-4 flex flex-col my-5 justify-center gap-10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.p
                  className="mb-4 dark:text-lightText text-xl text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {info}
                </motion.p>
                <div className="">
                  <motion.h2
                    className="text-3xl font-semibold mb-2 text-fadeMainTheme text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    Skills Used:
                  </motion.h2>
                  <motion.ul
                    className="list-disc list-inside text-center text-lg dark:text-lightText"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    {skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </div>
                <motion.div
                  className="my-8 flex justify-center items-center flex-col gap-10 px-5 w-full max-w-7xl "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  {youtube_url && (
                    <div className="mt-4 mx-auto w-full aspect-header ">
                      <motion.h2
                        className="text-xl text-center font-bold mb-2 text-fadeMainTheme"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                      >
                        Demo Video:
                      </motion.h2>
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
                  <motion.div
                    className="flex justify-center text-fadeMainTheme"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline mr-4 text-xl"
                    >
                      <Button btnText="View Code" btnIcon={<AiOutlineGithub />} />
                    </a>
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-xl"
                    >
                      <Button btnText="View Demo" btnIcon={<TbWorldWww />} />
                    </a>
                  </motion.div>
                </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SingleProject;
