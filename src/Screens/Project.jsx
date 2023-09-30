import React from "react";
import Cards from "../Components/Cards";
import { ProjectList } from "../Utils/ProjectDetails";

const Project = ({id}) => {
  return (
    <div
      className="flex justify-center items-center flex-col p-2 mt-20"
      id={id}
    >
      <h1 className="font-black leading-none text-fadeMainTheme text-6xl my-3  font-bebas-neue">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10">
        {ProjectList.map((project, index) => (
          <Cards
            imgSrc={project.image}
            title={project.name}
            key={index}
            index={index}
            demoLink={project.demoLink}
            clientDemoLink={project.clientDemoLink}
            />
        ))}
      </div>
    </div>
  );
};

export default Project;
