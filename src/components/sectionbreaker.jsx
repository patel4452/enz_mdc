import React from "react";
import Fade from "react-reveal/Fade";
import { useMediaQuery } from "react-responsive";

import Learnmore from "../assets/images/learnmore.jpg";
import TabLearnmore from "../assets/images/learnmore-tab.jpg";
import MobLearnmore from "../assets/images/learnmore-mobile.jpg";

const Sectionbreaker = () => {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1199px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });
  return (
    <>
      {isMobileDevice && (
        <>
          <div
            className="section pt-5"
            style={{
              backgroundImage: `url(${MobLearnmore})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
            }}
          >
            <div className="h-100 mx-auto d-flex flex-column justify-content-end p-3">
              <Fade bottom>
                <h2 className="copy-title title-primary pb-4">
                  We're excited to welcome students back!
                </h2>
                <p className="text-light pb-2">
                  <strong>
                    New Zealand is progressively reopening its borders in 2022,
                    ready for a new start in 2023.
                  </strong>
                </p>
                <p className="text-light pb-2">
                  We've missed hosting new international students over the past
                  two years, and look forward to seeing more of you in our
                  classrooms and learning environment soon.
                </p>
                <a href="#">
                  <button className="w-50 p-2 btn btn-danger btn-rounded rounded-pill">
                    LEARN MORE
                  </button>
                </a>
              </Fade>
            </div>
          </div>
          <div className="section section-breaker d-flex">
            <div className="mx-auto d-flex flex-column justify-content-center p-3">
              <Fade bottom>
                <h2 className="copy-title title-primary pb-4">
                  Click the button below to learn more about your study options
                </h2>
                <a href="#">
                  <button className="w-50 p-2 btn btn-danger btn-rounded rounded-pill">
                    COURSE AVAILABLE
                  </button>
                </a>
              </Fade>
            </div>
          </div>
        </>
      )}
      {isTabletDevice && (
        <>
          <div
            className="section pt-5 vh-100"
            style={{
              backgroundImage: `url(${MobLearnmore})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="w-50 h-100 mx-auto d-flex flex-column justify-content-end pb-5">
              <Fade bottom>
                <h2 className="copy-title title-primary pb-4">
                  We're excited to welcome students back!
                </h2>
                <p className="text-light pb-2">
                  <strong>
                    New Zealand is progressively reopening its borders in 2022,
                    ready for a new start in 2023.
                  </strong>
                </p>
                <p className="text-light pb-2">
                  We've missed hosting new international students over the past
                  two years, and look forward to seeing more of you in our
                  classrooms and learning environment soon.
                </p>
                <a href="#">
                  <button className="w-50 p-2 btn btn-danger btn-rounded rounded-pill">
                    LEARN MORE
                  </button>
                </a>
              </Fade>
            </div>
          </div>
          <div className="section section-breaker d-flex">
            <div className="w-50 mx-auto d-flex flex-column justify-content-center">
              <Fade bottom>
                <h2 className="copy-title title-primary pb-4">
                  Click the button below to learn more about your study options
                </h2>
                <a href="#">
                  <button className="w-50 p-2 btn btn-danger btn-rounded rounded-pill">
                    COURSE AVAILABLE
                  </button>
                </a>
              </Fade>
            </div>
          </div>
        </>
      )}
      {isLaptop && (
        <>
          <div
            className="section pt-5 vh-100"
            style={{
              backgroundImage: `url(${TabLearnmore})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="w-50 h-100 mx-auto d-flex flex-column justify-content-end pb-5">
              <Fade bottom>
                <h2 className="copy-title title-primary pb-4">
                  We're excited to welcome students back!
                </h2>
                <p className="text-light pb-2">
                  <strong>
                    New Zealand is progressively reopening its borders in 2022,
                    ready for a new start in 2023.
                  </strong>
                </p>
                <p className="text-light pb-2">
                  We've missed hosting new international students over the past
                  two years, and look forward to seeing more of you in our
                  classrooms and learning environment soon.
                </p>
                <a href="#">
                  <button className="w-50 p-2 btn btn-danger btn-rounded rounded-pill">
                    LEARN MORE
                  </button>
                </a>
              </Fade>
            </div>
          </div>
          <div className="section section-breaker d-flex">
            <div className="w-50 mx-auto d-flex flex-column justify-content-center">
              <Fade bottom>
                <h2 className="copy-title title-primary pb-4">
                  Click the button below to learn more about your study options
                </h2>
                <a href="#">
                  <button className="w-50 p-2 btn btn-danger btn-rounded rounded-pill">
                    COURSE AVAILABLE
                  </button>
                </a>
              </Fade>
            </div>
          </div>
        </>
      )}
      {isDesktop && (
        <>
          <div
            className="section pt-5 vh-100"
            style={{
              backgroundImage: `url(${Learnmore})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="w-50 h-100 mx-auto d-flex flex-column justify-content-end pb-5">
              <Fade bottom>
                <h2 className="copy-title title-primary pb-4">
                  We're excited to welcome students back!
                </h2>
                <p className="text-light pb-2">
                  <strong>
                    New Zealand is progressively reopening its borders in 2022,
                    ready for a new start in 2023.
                  </strong>
                </p>
                <p className="text-light pb-2">
                  We've missed hosting new international students over the past
                  two years, and look forward to seeing more of you in our
                  classrooms and learning environment soon.
                </p>
                <a href="#">
                  <button className="w-50 p-2 btn btn-danger btn-rounded rounded-pill">
                    LEARN MORE
                  </button>
                </a>
              </Fade>
            </div>
          </div>
          <div className="section section-breaker d-flex">
            <div className="w-50 mx-auto d-flex flex-column justify-content-center">
              <Fade bottom>
                <h2 className="copy-title title-primary pb-4">
                  Click the button below to learn more about your study options
                </h2>
                <a href="#">
                  <button className="w-50 p-2 btn btn-danger btn-rounded rounded-pill">
                    COURSE AVAILABLE
                  </button>
                </a>
              </Fade>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sectionbreaker;
