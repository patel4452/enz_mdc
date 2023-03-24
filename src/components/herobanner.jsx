import React, { useRef, useEffect, useState } from "react";
import arrowDown from "../assets/images/arrow-down.png";
import Typist from "react-typist";
import "./herobanner.css";

import Videosectionbanner from "./videosection";
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
import ReactGA from "react-ga4";

function Herobanner() {
  ReactGA.initialize("G-Y7L5D4PHT1");
  const ref = useRef(null);

  /*const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };*/

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
    <div className="main p-0 m-0">
      <nav>
        <img src={Clientlogo} className="align-left logo-header" />
      </nav>
      <div className="section overflow-hidden">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0">
            <Herobannerimage />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0">
            <Sectiontext />
          </div>
        </div>
      </div>
      <Studyoptions />
      <Parallaxstyletwo />
      <Institutionlayer />
      <Sectionbreaker />
      <div className="section-bg">
        <SmoothScroll />
      </div>
      <footer>
        <div className="section-footer overflow-hidden">
          <div className="justify-content-between">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <img src={Clientlogo3} className="align-left logo-footer" />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
              <div className="social-overlay">
                <h4>Find Us here</h4>
                <div className="hidden-xs">
                  <span className="first-row social-row">
                    <a href="https://www.facebook.com/studywithnewzealand">
                      <img src={Facebook} className="logo" />
                    </a>
                    <a href="https://twitter.com/studywithnz">
                      <img src={Twitter} className="logo" />
                    </a>
                    <a href="https://www.instagram.com/studywithnewzealand/">
                      <img src={Instagram} className="logo" />
                    </a>
                    <a href="http://www.youtube.com/user/realstudentsnz">
                      <img src={Youtube} className="logo" />
                    </a>
                  </span>
                </div>
                <div className="visible-xs">
                  <span className="first-row social-row">
                    <a href="https://www.facebook.com/studywithnewzealand">
                      <img src={Facebook} className="logo" />
                    </a>
                    <a href="https://twitter.com/studywithnz">
                      <img src={Twitter} className="logo" />
                    </a>
                    <a href="https://www.instagram.com/studywithnewzealand/">
                      <img src={Instagram} className="logo" />
                    </a>
                    <a href="http://www.youtube.com/user/realstudentsnz">
                      <img src={Youtube} className="logo" />
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
