import React, { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Parallax1 from "../assets/images/parallax-1.jpg";
import Parallax2 from "../assets/images/parallax-2.jpg";
import Parallax3 from "../assets/images/parallax-3.jpg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const defaultValue = {
  value: "#fff",
  type: "color",
};

// Little helpers ...
const Parallaxcomponent = () => {
  const parallax = useRef();
  const alignCenter = {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  };

  const removeScrollbar = {
    webkitScrollbarDisplay: "none !important",
    scrollbarWidth: "0 !important",
  };

  return (
    <div className="section">
      <Parallax
        ref={parallax}
        pages={3}
        style={{ ...removeScrollbar, top: "0", left: "0" }}
      >
        <ParallaxLayer
          offset={0}
          speed={0.1}
          factor={1}
          style={{
            ...alignCenter,
            backgroundImage: `url(${Parallax1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0.2}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div>
            <h2 className="copy-title title-regular pt-5 pb-4 align-center">
              Why You Should Choose<br></br> a Global Pathway Programme to New
              Zealand
            </h2>
            <div className="parallax-right">
              <p>
                Start your journey right now, at a recognised provider near you
              </p>
              <p>Enjoy the convenience of studying locally</p>
              <p>
                Studying closer to home means you'll save on travel and living
                costs
              </p>
              <p>
                Choose to progress your education to anyone of New Zealand's
                world-ranked universities.
              </p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.1}
          factor={1}
          style={{
            ...alignCenter,
            backgroundImage: `url(${Parallax2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={1.2}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div>
            <h2 className="copy-title title-regular pt-5 pb-4 align-center">
              Why You Should Choose<br></br> a Global Pathway Programme to New
              Zealand
            </h2>
            <div className="parallax-right">
              <p>
                Start your journey right now, at a recognised provider near you
              </p>
              <p>Enjoy the convenience of studying locally</p>
              <p>
                Studying closer to home means you'll save on travel and living
                costs
              </p>
              <p>
                Choose to progress your education to anyone of New Zealand's
                world-ranked universities.
              </p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.1}
          factor={1}
          style={{
            ...alignCenter,
            backgroundImage: `url(${Parallax3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={2.3}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div>
            <h2 className="copy-title title-regular pt-5 pb-4 align-center">
              Why You Should Choose<br></br> a Global Pathway Programme to New
              Zealand
            </h2>
            <div className="parallax-right">
              <p>
                Start your journey right now, at a recognised provider near you
              </p>
              <p>Enjoy the convenience of studying locally</p>
              <p>
                Studying closer to home means you'll save on travel and living
                costs
              </p>
              <p>
                Choose to progress your education to anyone of New Zealand's
                world-ranked universities.
              </p>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Parallaxcomponent;
