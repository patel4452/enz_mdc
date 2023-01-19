import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Smoothscroll.css";
import Slide1 from "../assets/images/slider-1.jpg";
import Slide2 from "../assets/images/slider-2.jpg";
import Slide3 from "../assets/images/slider-3.jpg";
import Slide4 from "../assets/images/slider-4.jpg";
import Slide5 from "../assets/images/slider-5.jpg";
import Slide6 from "../assets/images/slider-6.jpg";
import Slide7 from "../assets/images/slider-7.jpg";
import Slide8 from "../assets/images/slider-8.jpg";

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
        scrub: 2,
        snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + panelsContainer.current.offsetWidth,
      },
    });
  }, []);

  return (
    <>
      <div className="container section-bg" ref={panelsContainer}>
        <section className="panel" ref={(e) => createPanelsRefs(e, 1)}>
          <span style={{ width: "360px" }}></span>
        </section>
        <section className="panel keep-up" ref={(e) => createPanelsRefs(e, 2)}>
          <img src={Slide1} sx={{ width: { xs: "320px", md: "100%" } }} />
        </section>
        <section
          className="panel keep-down"
          ref={(e) => createPanelsRefs(e, 3)}
        >
          <img src={Slide2} sx={{ width: { xs: "320px", md: "100%" } }} />
        </section>
        <section className="panel keep-up" ref={(e) => createPanelsRefs(e, 4)}>
          <img src={Slide3} sx={{ width: { xs: "320px", md: "100%" } }} />
        </section>
        <section
          className="panel keep-down"
          ref={(e) => createPanelsRefs(e, 5)}
        >
          <img src={Slide4} sx={{ width: { xs: "320px", md: "100%" } }} />
        </section>
        <section className="panel keep-up" ref={(e) => createPanelsRefs(e, 6)}>
          <img src={Slide5} sx={{ width: { xs: "320px", md: "100%" } }} />
        </section>
        <section
          className="panel keep-down"
          ref={(e) => createPanelsRefs(e, 7)}
        >
          <img src={Slide6} sx={{ width: { xs: "320px", md: "100%" } }} />
        </section>
        <section className="panel keep-up" ref={(e) => createPanelsRefs(e, 8)}>
          <img src={Slide7} sx={{ width: { xs: "320px", md: "100%" } }} />
        </section>
        <section
          className="panel keep-down"
          ref={(e) => createPanelsRefs(e, 9)}
        >
          <img src={Slide8} sx={{ width: { xs: "320px", md: "100%" } }} />
        </section>
      </div>
    </>
  );
};

export default SmoothScroll;
