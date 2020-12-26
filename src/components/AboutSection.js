import React from "react";
import home1 from "../img/home1.png";
import styled from 'styled-components'
import {About,Description,Image,Hide} from '../styles';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make </h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come{" "}
            </h2>
          </Hide>
          <Hide>
            <h2>true. </h2>
          </Hide>
        </div>
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
