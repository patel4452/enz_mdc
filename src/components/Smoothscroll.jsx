import React from "react";

import "./Smoothscroll.css";
import "./institutionlayer.css";
import Fade from "react-reveal/Fade";
import Slide1 from "../assets/images/slider-1.jpg";
import Slide2 from "../assets/images/slider-2.jpg";
import Slide3 from "../assets/images/slider-3.jpg";
import Slide4 from "../assets/images/slider-4.jpg";
import Slide5 from "../assets/images/slider-5.jpg";
import Slide6 from "../assets/images/slider-6.jpg";
import Slide7 from "../assets/images/slider-7.jpg";
import Slide8 from "../assets/images/slider-8.jpg";

const SmoothScroll = () => {
  return (
    <div>
      <div className="row parent py-5 px-5">
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 py-3">
          <div className="child">
            <Fade>
              <img src={Slide1} className="img-responsive" />
            </Fade>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 py-3">
          <div className="child">
            <Fade>
              <img src={Slide2} className="img-responsive" />
            </Fade>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 py-3">
          <div className="child">
            <Fade>
              <img src={Slide3} className="img-responsive" />
            </Fade>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 py-3">
          <div className="child">
            <Fade>
              <img src={Slide4} className="img-responsive" />
            </Fade>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 py-3">
          <div className="child">
            <Fade>
              <img src={Slide5} className="img-responsive" />
            </Fade>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 py-3">
          <div className="child">
            <Fade>
              <img src={Slide6} className="img-responsive" />
            </Fade>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 py-3">
          <div className="child">
            <Fade>
              <img src={Slide7} className="img-responsive" />
            </Fade>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 py-3">
          <div className="child">
            <Fade>
              <img src={Slide8} className="img-responsive" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmoothScroll;
