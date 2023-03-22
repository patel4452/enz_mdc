import React from "react";
import Fade from "react-reveal/Fade";

const Sectionbreaker = () => {
  return (
    <>
      <div className="section section-breaker d-flex row">
        <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6 mx-auto d-flex flex-column justify-content-center">
          <Fade bottom>
            <h2 className="copy-title title-primary pb-4">
              Click the button below to learn more about your study options
            </h2>
            <a href="https://www.studywithnewzealand.govt.nz/en/study-options/higher-education/courses-and-programmes">
              <button
                className="w-50 p-2 btn btn-rounded rounded-pill"
                style={{ background: "rgb(221, 85, 47)", color: "#fff" }}
              >
                COURSES AVAILABLE
              </button>
            </a>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Sectionbreaker;
