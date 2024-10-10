import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { AiOutlineGlobal } from "react-icons/ai";
const ProjectCard = ({
  index,
  name,
  tags,
  description,
  image,
  source_code_link,
  production_link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {production_link&& (<div
              onClick={() => window.open(production_link, "_blank")}
              className="black-gradient rounded-full flex items-center justify-center cursor-pointer mr-2 w-10 h-10"
            >
              <AiOutlineGlobal className="w-1/2 h-1/3 object-contain" />
            </div>)}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient rounded-full flex items-center justify-center cursor-pointer w-10 h-10"
            >
              <img src={github} alt="github" className="w-1/2 h-1/3 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>

        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}> 
            &#35;{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          In this section, you will find a collection of various projects that highlight my creativity and technical skills.
         Each project demonstrates my ability to design and implement functional, 
         user-friendly applications that address real-world challenges. 
         Utilizing modern technologies like React, Node.js, Express, and MongoDB, 
         I focus on creating responsive designs and efficient solutions while prioritizing quality and performance. 
         Explore my work to see how I leverage my skills to bring ideas to life.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");