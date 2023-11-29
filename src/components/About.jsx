import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
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
    <div className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `rotateX(${tiltState.mouseY}deg) rotateY(${tiltState.mouseX}deg)`,
            transition: "transform 0.5s ease",
          }}
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a mobile app developer with extensive experience in React Native and Flutter. 
        My expertise spans frontend development, encompassing HTML, CSS, JavaScript, ReactJS
        and Angular. Furthermore, I have a solid background in backend development, 
        having worked with SQL, Firebase, and MongoDB. My passion lies in crafting 
        contemporary, user-friendly applications, and I stay abreast of the latest 
        trends in mobile app development and UI/UX design.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
