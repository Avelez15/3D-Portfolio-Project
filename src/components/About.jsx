import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";
import SectionWrapper from "../hoc/sectionWrapper.jsx"; // Ensure the import is correct

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ml-4 mb-4">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradiant p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] ">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
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
        className="mt-4 ml-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am an aspiring developer with experience in Javascript, HTML and CSS.
        I also have experience with multiple front-end and back-end technologies
        such as React, Angular, node.js, django, and bootstrap. I began my
        journey to become a software developer through self learning and then
        moved on to a fullstack development bootcamp in nucamp. I have been
        coding for a little over a year and a half and have multiple projects to
        show as well as a list of projects in my github!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout;
