import React from "react";
import styled from "styled-components";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import {Link} from 'react-router-dom';


const OurWork = () => {
  return (
    <Work>
      <Movie>
        <h2>The Athlete</h2>
        <div >
        <div className="line"></div>
          <Link>
            <img src={athlete} alt="athlete" />
          </Link>
        </div>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div >
        <div className="line"></div>
          <Link>
            <img src={theracer} alt="racer" />
          </Link>
        </div>
      </Movie>
      <Movie>
        <h2>The Good Times</h2>
        <div >
        <div className="line"></div>
          <Link>
            <img src={goodtimes} alt="goodtimes" />
          </Link>
        </div>
      </Movie>
    </Work>
  );
};
const Work = styled.div`
  min-height: 100vh;
  overflow:hidden;
  padding: 5rem 10rem;
  background:white;
  h2{
      padding:1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line{
      height:0.5rem;
      background:#cccccc;
      margin-bottom:3rem;
  }
  img{
      width:100%;
      height:70vh;
      object-fit:cover;
  }
`;
export default OurWork;
