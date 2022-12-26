import React from "react";
import "./institutionlayer.css";
import Fade from "react-reveal/Fade";
import Institution1 from "../assets/images/institution-1.jpg";
import Institution2 from "../assets/images/institution-2.jpg";
import Institution3 from "../assets/images/institution-3.jpg";
import Institution4 from "../assets/images/institution-4.jpg";
import Institution5 from "../assets/images/institution-5.jpg";
import Institution6 from "../assets/images/institution-6.jpg";
import Institution7 from "../assets/images/institution-7.jpg";
import Institution8 from "../assets/images/institution-8.jpg";

const Institutionlayer = () => {
  return (
    <div className="parent">
      <div className="child">
        <Fade>
          <img src={Institution1} className="img-responsive" />
          <span>The University of Auckland</span>
        </Fade>
      </div>
      <div className="child">
        <Fade>
          <img src={Institution2} className="img-responsive" />
          <span>Auckland University of Technology</span>
        </Fade>
      </div>
      <div className="child">
        <Fade>
          <img src={Institution3} className="img-responsive" />
          <span>University of Canterbury</span>
        </Fade>
      </div>
      <div className="child">
        <Fade>
          <img src={Institution4} className="img-responsive" />
          <span>Lincoln University</span>
        </Fade>
      </div>
      <div className="child">
        <Fade>
          <img src={Institution5} className="img-responsive" />
          <span>Massey University</span>
        </Fade>
      </div>
      <div className="child">
        <Fade>
          <img src={Institution6} className="img-responsive" />
          <span>University of Otago</span>
        </Fade>
      </div>
      <div className="child">
        <Fade>
          <img src={Institution7} className="img-responsive" />
          <span>Victoria University of Wellington</span>
        </Fade>
      </div>
      <div className="child">
        <Fade>
          <img src={Institution8} className="img-responsive" />
          <span>University of Waikato</span>
        </Fade>
      </div>
    </div>
  );
};

export default Institutionlayer;
