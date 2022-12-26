import React from "react";
import Fade from "react-reveal/Fade";

import Learnmore from "../assets/images/learnmore.jpg";

const Sectionbreaker = () => {
  return (
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
              We've missed hosting new international students over the past two
              years, and look forward to seeing more of you in our classrooms
              and learning environment soon.
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
  );
};

export default Sectionbreaker;
