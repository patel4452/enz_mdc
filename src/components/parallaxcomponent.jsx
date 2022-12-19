import React, { useRef } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

import Parallax1 from "../assets/images/parallax-1.jpg";
import Parallax2 from "../assets/images/parallax-2.jpg";
import Parallax3 from "../assets/images/parallax-3.jpg";

const defaultValue = {
  value: "#fff",
  type: "color",
};

// Little helpers ...
const Parallaxcomponent = () => {
  const parallax = useRef(null);
  const alignCenter = {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  };
  return (
    <div style={{ maxWidth: "100%", width: "100%", height: "100%" }}>
      <Parallax pages={3}>
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
          sticky={{ start: 0, end: 0 }}
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
      </Parallax>
    </div>
  );
};

export default Parallaxcomponent;
