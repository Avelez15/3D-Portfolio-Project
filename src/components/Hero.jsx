import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto mt-20 z-10">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[20px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className="text-[#915eff]">Alejandro</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I am a aspiring software developer with a passion for learning.<br className="sm:block hidden"/> I develop projects using multiple technologies, here are some of my favorites!
        </p>
      </div>
      </div>

    </section>
  );
};

export default Hero;
