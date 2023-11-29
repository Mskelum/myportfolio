import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { gp } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { psprojects } from "../constants"

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const [tiltState, setTiltState] = useState({ mouseX: 0, mouseY: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const tiltX = (windowWidth / 2 - clientX) / (windowWidth / 2) * 30;
    const tiltY = (windowHeight / 2 - clientY) / (windowHeight / 2) * 30;

    setTiltState({ mouseX: tiltX, mouseY: tiltY });
  };

  const handleMouseLeave = () => {
    setTiltState({ mouseX: 0, mouseY: 0 });
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tiltState.mouseY}deg) rotateY(${tiltState.mouseX}deg)`,
          transition: "transform 0.5s ease",
        }}
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={gp}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Playstore = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Playstore Apps</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {psprojects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Playstore, "psprojects");
