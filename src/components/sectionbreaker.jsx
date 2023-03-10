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
          <div className="section row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0">
              <img src={Learnmore} className="img-responsive" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 section-learnmore">
              <div className="h-100 mx-auto d-flex flex-column justify-content-center p-5">
                <Fade bottom>
                  <h2 className="title-bold copy-title title-primary pb-4 uppercase">
                    We're excited to welcome students back!
                  </h2>
                  <p className="title-bold copy-dark pb-2 copy-subtitle">
                    <strong>
                      New Zealand is progressively reopening its borders in
                      2022, ready for a new start in 2023.
                    </strong>
                  </p>
                  <p className="text-dark pb-2 ">
                    We've missed hosting new international students over the
                    past two years, and look forward to seeing more of you in
                    our classrooms and learning environments soon.
                  </p>
                  <a href="https://www.studywithnewzealand.govt.nz/en">
                    <button className="px-5 p-2 btn btn-danger btn-rounded rounded-pill">
                      LEARN MORE
                    </button>
                  </a>
                </Fade>
              </div>
            </div>
          </div>
          <div className="section section-breaker d-flex">
            <div className="p-5 mx-auto d-flex flex-column justify-content-center">
              <Fade bottom>
                <h2 className="copy-title title-primary pb-4">
                  Click the button below to learn more about your study options
                </h2>
                <a href="https://www.studywithnewzealand.govt.nz/en/study-options/higher-education/courses-and-programmes">
                  <button className="p-2 px-5 btn btn-danger btn-rounded rounded-pill">
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
          <div className="section row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0">
              <img src={Learnmore} className="img-responsive" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 section-learnmore">
              <div className="h-100 mx-auto d-flex flex-column justify-content-center p-5">
                <Fade bottom>
                  <h2 className="title-bold copy-title title-primary pb-4 uppercase">
                    We're excited to welcome students back!
                  </h2>
                  <p className="title-bold copy-dark pb-2 copy-subtitle">
                    <strong>
                      New Zealand is progressively reopening its borders in
                      2022, ready for a new start in 2023.
                    </strong>
                  </p>
                  <p className="text-dark pb-2 ">
                    We've missed hosting new international students over the
                    past two years, and look forward to seeing more of you in
                    our classrooms and learning environments soon.
                  </p>
                  <a href="https://www.studywithnewzealand.govt.nz/en">
                    <button className="w-50 p-2 btn btn-danger btn-rounded rounded-pill">
                      LEARN MORE
                    </button>
                  </a>
                </Fade>
              </div>
            </div>
          </div>
          <div className="section section-breaker d-flex">
            <div className="p-5 mx-auto d-flex flex-column justify-content-center">
              <Fade bottom>
                <h2 className="copy-title title-primary pb-4">
                  Click the button below to learn more about your study options
                </h2>
                <a href="https://www.studywithnewzealand.govt.nz/en/study-options/higher-education/courses-and-programmes">
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
          <div className="section row vh-100">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-0">
              <img src={Learnmore} className="img-responsive" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 section-learnmore">
              <div className="h-100 mx-auto d-flex flex-column justify-content-center p-5">
                <Fade bottom>
                  <h2 className="title-bold copy-title title-primary pb-4 uppercase text-left">
                    We're excited to welcome students back!
                  </h2>
                  <p className="title-bold copy-dark pb-2 copy-subtitle text-left">
                    <strong>
                      New Zealand is progressively reopening its borders in
                      2022, ready for a new start in 2023.
                    </strong>
                  </p>
                  <p className="text-dark pb-2 text-left">
                    We've missed hosting new international students over the
                    past two years, and look forward to seeing more of you in
                    our classrooms and learning environments soon.
                  </p>
                  <a
                    className="text-left"
                    href="https://www.studywithnewzealand.govt.nz/en"
                  >
                    <button className="w-50 p-2 btn btn-danger btn-rounded rounded-pill">
                      LEARN MORE
                    </button>
                  </a>
                </Fade>
              </div>
            </div>
          </div>
          <div className="section section-breaker d-flex">
            <div className="w-50 mx-auto d-flex flex-column justify-content-center">
              <Fade bottom>
                <h2 className="copy-title title-primary pb-4">
                  Click the button below to learn more about your study options
                </h2>
                <a href="https://www.studywithnewzealand.govt.nz/en/study-options/higher-education/courses-and-programmes">
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
          <div className="section row vh-100">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-0">
              <img src={Learnmore} className="img-responsive" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 section-learnmore">
              <div className="h-100 mx-auto d-flex flex-column justify-content-center p-5">
                <Fade bottom>
                  <h2 className="title-bold copy-title title-primary pb-4 uppercase text-left">
                    We're excited to welcome students back!
                  </h2>
                  <p className="title-bold copy-dark pb-2 copy-subtitle text-left">
                    <strong>
                      New Zealand is progressively reopening its borders in
                      2022, ready for a new start in 2023.
                    </strong>
                  </p>
                  <p className="text-dark pb-2 text-left">
                    We've missed hosting new international students over the
                    past two years, and look forward to seeing more of you in
                    our classrooms and learning environments soon.
                  </p>
                  <a
                    className="text-left"
                    href="https://www.studywithnewzealand.govt.nz/en"
                  >
                    <button className="w-50 p-2 btn btn-danger btn-rounded rounded-pill">
                      LEARN MORE
                    </button>
                  </a>
                </Fade>
              </div>
            </div>
          </div>
          <div className="section section-breaker d-flex">
            <div className="w-50 mx-auto d-flex flex-column justify-content-center">
              <Fade bottom>
                <h2 className="copy-title title-primary pb-4">
                  Click the button below to learn more about your study options
                </h2>
                <a href="https://www.studywithnewzealand.govt.nz/en/study-options/higher-education/courses-and-programmes">
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
