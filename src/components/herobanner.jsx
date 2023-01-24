import React, { useRef, useEffect, useState } from "react";
import arrowDown from "../assets/images/arrow-down.png";
import Typist from "react-typist";
import "./herobanner.css";

import Videosectionbanner from "./videosection";
import { useWindowSize } from "./checkresize";
import Clientlogo from "../assets/images/clientlogo.png";
import Clientlogo2 from "../assets/images/clientlogo1.png";
import Clientlogo3 from "../assets/images/clientlogo2.png";
import Twitter from "../assets/images/twitter.png";
import Facebook from "../assets/images/facebook.png";
import Youtube from "../assets/images/youtube.png";
import Instagram from "../assets/images/instagram.png";
import Wechat from "../assets/images/wechat.png";
import Social from "../assets/images/social-6.png";
import Sectiontext from "./textanimate";
import Studyoptions from "./studyoptions";
import Parallaxstyletwo from "./parallaxstyletwo";
import Institutionlayer from "./institutionlayer";
import Sectionbreaker from "./sectionbreaker";
import SmoothScroll from "./Smoothscroll";
import Herobannerimage from "./herobanner-image";

function Herobanner() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [width, setWidth] = React.useState(window.innerWidth);
  // Add a second state variable "height" and default it to the current window height
  const [height, setHeight] = React.useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      // Set the height in state as well as the width
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="main">
      <nav>
        <img src={Clientlogo} className="align-left logo" />
        <img src={Clientlogo2} className="logo" />
      </nav>
      <div className="section" onClick={handleClick}>
        <Herobannerimage />
        <div className="centered">
          <h1 className="ml6">
            <div className="text-wrapper">
              <Typist>Live your ambitions from accross the globe.</Typist>
            </div>
          </h1>

          <p>We create global pathways so you can create your global future</p>
          <img
            src={arrowDown}
            className="icon icon-size-sm img-responsive down-arrow"
          />
        </div>
      </div>
      <Videosectionbanner clickRef={ref} />
      <Sectiontext />
      <Studyoptions />
      <Parallaxstyletwo />
      <Institutionlayer />
      <Sectionbreaker />
      <SmoothScroll />
      <footer>
        <div className="section-footer">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={Clientlogo3} className="align-left logo-footer" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="social-overlay">
                <h4>Find Us here</h4>
                <div>
                  <span className="first-row social-row">
                    <a href="https://www.facebook.com/studywithnewzealand">
                      <img src={Facebook} className="logo" />
                    </a>
                    <a href="">
                      <img src={Twitter} className="logo" />
                    </a>
                    <a href="">
                      <img src={Instagram} className="logo" />
                    </a>
                  </span>
                  <span className="second-row social-row">
                    <a href="">
                      <img src={Youtube} className="logo" />
                    </a>
                    <a href="">
                      <img src={Social} className="logo" />
                    </a>
                    <a href="">
                      <img src={Wechat} className="logo" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Herobanner;
