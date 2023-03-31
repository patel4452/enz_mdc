import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import { useMediaQuery } from "react-responsive";

import "./parallaxstyletwo.css";
import Parallax1 from "../assets/images/parallax-1.jpg";
import Parallax2 from "../assets/images/parallax-2.jpg";
import Parallax3 from "../assets/images/parallax-3.jpg";
import Parallax1tab from "../assets/images/parallax-tablet-1.jpg";
import Parallax2tab from "../assets/images/parallax-tablet-2.jpg";
import Parallax3tab from "../assets/images/parallax-tablet-3.jpg";
import Parallax1mob from "../assets/images/parallax-mob-1.jpg";
import Parallax2mob from "../assets/images/parallax-mob-2.jpg";
import Parallax3mob from "../assets/images/parallax-mob-3.jpg";
import Check from "../assets/images/check_enz.png";

const Parallaxstyletwo = () => {
  return (
    <div>
      <div className="row" style={{ background: "rgb(7, 25, 55)" }}>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0">
          <picture>
            <source
              media="(min-width: 1024px) and (max-width: 1449px)"
              srcSet={Parallax1tab}
            />
            <source media="(max-width: 425px)" srcSet={Parallax1mob} />
            <img src={Parallax1} alt="Flowers" style={{ width: "100%" }} />
          </picture>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-4 mx-auto d-flex flex-column justify-content-center">
          <h2
            className="copy-title title-regular text-left pt-5 pb-4 "
            style={{}}
          >
            Why You Should Choose<br></br> a Global Pathway Programme to New
            Zealand
          </h2>

          <div className="parallax-right" style={{}}>
            <p>
              <img src={Check} className="img-responsive align-icon" />
              <span>
                Start your journey right now, at a recognised provider near you.
              </span>
            </p>
            <p>
              <img src={Check} className="img-responsive align-icon" />
              <span>Enjoy the convenience of studying locally.</span>
            </p>
            <p>
              <img src={Check} className="img-responsive align-icon" />
              <span>
                Studying closer to home means you'll save on travel and living
                costs.
              </span>
            </p>
            <p>
              <img src={Check} className="img-responsive align-icon" />
              <span>
                Choose to progress your education to any one of New Zealand's
                world-ranked universities.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="row" style={{ background: "rgb(221, 85, 47)" }}>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0">
          <picture>
            <source
              media="(min-width: 1024px) and (max-width: 1449px)"
              srcSet={Parallax2tab}
            />
            <source media="(max-width: 425px)" srcSet={Parallax2mob} />
            <img src={Parallax2} alt="Flowers" style={{ width: "100%" }} />
          </picture>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-4 mx-auto d-flex flex-column justify-content-center">
          <h2 className="copy-title title-regular text-left pt-4 pb-4 ">
            Top Reasons to Study in New Zealand
          </h2>

          <div className="parallax-right" style={{}}>
            <p>
              <img src={Check} className="img-responsive align-icon" />
              <span>Enjoy the convenience of studying locally.</span>
            </p>
            <p>
              <img src={Check} className="img-responsive align-icon" />
              <span>
                High-Quality Education. All eight of our universities are in the
                top 3% in the world.
              </span>
            </p>
            <p>
              <img src={Check} className="img-responsive align-icon" />
              <span>
                Unbeatable Lifestyle. New Zealand is known around the world for
                our incredible work-life balance.
              </span>
            </p>
            <p>
              <img src={Check} className="img-responsive align-icon" />
              <span>
                Work Ready. A New Zealand education gives you skills that
                prepares you for the future of work.
              </span>
            </p>
            <p>
              <img src={Check} className="img-responsive align-icon" />
              <span>
                Gain life skills. Studying in New Zealand is an opportunity for
                personal growth and development.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="row" style={{ background: "rgb(7, 25, 55)" }}>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0">
          <Tween>
            <picture>
              <source
                media="(min-width: 1024px) and (max-width: 1449px)"
                srcSet={Parallax3tab}
              />
              <source media="(max-width: 425px)" srcSet={Parallax3mob} />
              <img src={Parallax3} alt="Flowers" style={{ width: "100%" }} />
            </picture>
          </Tween>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-4 mx-auto d-flex flex-column justify-content-center">
          <h2 className="copy-title title-regular text-left pt-4 pb-4 ">
            Begin Your New Zealand Education Online Now
          </h2>

          <div className="parallax-right" style={{}}>
            <p>
              <img src={Check} className="img-responsive align-icon" />
              <span>Enjoy better work-life balance.</span>
            </p>
            <p>
              <img src={Check} className="img-responsive align-icon" />
              <span>
                Learn at your own pace for an education experience that suits
                your needs.
              </span>
            </p>
            <p>
              <img src={Check} className="img-responsive align-icon" />
              <span>
                An accessible education option – studying online is affordable
                and flexible.
              </span>
            </p>
            <p>
              <img src={Check} className="img-responsive align-icon" />
              <span>
                Gain globally-recognised qualifications that will enable you to
                succeed in the future.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallaxstyletwo;
