import React from "react";
import home1 from "../img/home1.png";
import {About,Description,Image,Hide} from '../styles';
import {motion} from 'framer-motion';
import {titleAnim,fade,photoAnim} from '../animation';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim} >We work to make </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim} >
              your <span>dreams</span> come{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim} >true. </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa
          quidem qui blanditiis deleniti expedita aperiam voluptate, similique,
          quo sequi quod non? Et quia exercitationem ducimus, numquam atque
          delectus accusamus.
        </motion.p>
        <motion.button variants={fade} >Contact us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};



export default AboutSection;
