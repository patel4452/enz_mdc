import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Smoothscroll.css";
import Slide1 from "../assets/images/slider-1.png";
import Slide2 from "../assets/images/slider-2.png";
import Slide3 from "../assets/images/slider-3.png";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;

    gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + panelsContainer.current.offsetWidth,
      },
    });
  }, []);

  return (
    <>
      <div className="container" ref={panelsContainer}>
        <section className="panel red" ref={(e) => createPanelsRefs(e, 1)}>
          <img src={Slide1} />
        </section>
        <section className="panel orange" ref={(e) => createPanelsRefs(e, 2)}>
          <img src={Slide2} />
        </section>
        <section className="panel purple" ref={(e) => createPanelsRefs(e, 3)}>
          <img src={Slide3} />
        </section>
        <section className="panel green" ref={(e) => createPanelsRefs(e, 4)}>
          <img src={Slide1} />
        </section>
        <section className="panel gray" ref={(e) => createPanelsRefs(e, 5)}>
          <img src={Slide2} />
        </section>
      </div>
    </>
  );
};

export default SmoothScroll;
