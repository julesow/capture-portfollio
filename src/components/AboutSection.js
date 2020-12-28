import React from "react";
import home1 from "../img/home1.png";
import {About,Description,Image,Hide} from '../styles';
import {motion} from 'framer-motion';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2>We work to make </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true. </motion.h2>
          </Hide>
        </motion.div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa
          quidem qui blanditiis deleniti expedita aperiam voluptate, similique,
          quo sequi quod non? Et quia exercitationem ducimus, numquam atque
          delectus accusamus.
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};



export default AboutSection;
