import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make </h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come{" "}
            </h2>
          </div>
          <div className="hide">
            <h2>true. </h2>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa
          quidem qui blanditiis deleniti expedita aperiam voluptate, similique,
          quo sequi quod non? Et quia exercitationem ducimus, numquam atque
          delectus accusamus.
        </p>
        <button>Contact us</button>
      </div>
      <div className="image">
        <img src={home1} alt="guy with a camera" />
      </div>
    </div>
  );
};

export default AboutSection;
