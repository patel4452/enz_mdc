import React, { Component, useRef } from "react";
import heroBanner from "../assets/images/hero-banner.jpg";
import TabheroBanner from "../assets/images/hero-banner-tablet.jpg";
import arrowDown from "../assets/images/arrow-down.png";
import Typist from "react-typist";
import "./herobanner.css";
import Videoone from "../assets/videos/video1.mp4";
import Bannervideo from "../assets/images/video_layer.png";
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

function Herobanner() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="main">
      <nav>
        <img src={Clientlogo} className="align-left logo" />
        <img src={Clientlogo2} className="logo" />
      </nav>
      <div className="section" onClick={handleClick}>
        <img
          src={heroBanner}
          srcSet={`${TabheroBanner} 300w, ${TabheroBanner} 768w, ${heroBanner} 1280w`}
          sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
          alt="Snow"
          className="img-responsive"
        />
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
      <div className="section">
        <video
          ref={ref}
          width="100%"
          height="100%"
          preload="auto"
          controls
          poster={Bannervideo}
        >
          <source src={Videoone} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <Sectiontext />
      <Studyoptions />
      <Parallaxstyletwo />
      <Institutionlayer />
      <Sectionbreaker />
      <SmoothScroll />
      <footer>
        <div className="section-footer">
          <div className="row justify-content-between">
            <div className="col-4">
              <img src={Clientlogo3} className="align-left logo-footer" />
            </div>
            <div className="col-2">
              <div className="social-overlay">
                <h4>Find Us here</h4>
                <div>
                  <span className="first-row social-row">
                    <a href="">
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
