import React, { useRef } from "react";

import { Fade, Slide } from "react-awesome-reveal";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimationControls,
} from "framer-motion";

import Parallax1 from "../assets/images/parallax-1.jpg";
import Parallax2 from "../assets/images/parallax-2.jpg";
import Parallax3 from "../assets/images/parallax-3.jpg";

export default function Parallaxstyle() {
  const parallax = useRef(null);
  const controls = useAnimationControls();
  const isInView = useInView(parallax);
  const scrollAmount = 700;
  const { scrollYProgress, scrollY } = useScroll({
    target: parallax,
    offset: ["end end", "start start"],
  });
  console.log(scrollYProgress);
  const opacity = useTransform(scrollY, [0, scrollAmount], [0, 1]);
  const scale = useTransform(scrollY, [0, scrollAmount], [1, 1.3]);

  const alignCenter = {
    display: "flex",
    alignItems: "center",
    maxWidth: "100%",
  };

  return (
    <>
      <motion.div
        whileInView={{ y: "0%" }}
        viewport={{ once: false, amount: 0.1 }}
        initial={{ y: "25%" }}
        transition={{ ease: "easeOut", stiffness: 50, staggerChildren: 0.75 }}
        exit={{ opacity: 1 }}
        style={{
          ...alignCenter,
          height: "100vh",
          backgroundRepeat: "no-repeat",
        }}
        ref={parallax}
        cascade
      >
        <div
          style={{
            ...alignCenter,
            backgroundImage: `url(${Parallax1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            opacity,
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              exit={{ opacity: 1 }}
              className="copy-title title-regular pt-5 pb-4 align-center"
            >
              Why You Should Choose<br></br> a Global Pathway Programme to New
              Zealand
            </motion.h2>
          </div>
          <div
            style={{
              opacity,
            }}
          >
            <motion.div
              initial={{ x: "100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              exit={{ opacity: 1 }}
              className="parallax-right"
            >
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
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ y: "0%" }}
        viewport={{ once: false, amount: 0.1 }}
        initial={{ y: "25%" }}
        transition={{ ease: "easeOut", stiffness: 50, staggerChildren: 0.75 }}
        exit={{ opacity: 1 }}
        style={{
          ...alignCenter,
          height: "100vh",
          backgroundRepeat: "no-repeat",
        }}
        ref={parallax}
        cascade
      >
        <div
          style={{
            ...alignCenter,
            backgroundImage: `url(${Parallax2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            opacity,
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              exit={{ opacity: 1 }}
              className="copy-title title-regular pt-5 pb-4 align-center"
            >
              Why You Should Choose<br></br> a Global Pathway Programme to New
              Zealand
            </motion.h2>
          </div>
          <div
            style={{
              opacity,
            }}
          >
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
        </div>
      </motion.div>
    </>
  );
}
