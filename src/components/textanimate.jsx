import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Sectiontext extends Component {
  state = {};
  render() {
    return (
      <div className="section section-text overflow-hidden p-1">
        <Fade bottom>
          <h2 className="copy-title title-primary pb-4">
            LEARN HERE. THERE. EVERYWHERE.
          </h2>
          <p className="copy-dark pb-2">
            Start your future-focused New Zealand education journey with our new
            ways of learning. Explore our range of flexible study options and
            choose how you study.
          </p>
          <p className="copy-dark pb-2">
            Enjoy the convenience of a locally delivered course with{" "}
            <a href="https://www.studywithnewzealand.govt.nz/en/study-options/new-ways-of-learning/global-pathways">
              <span className="underline copy-dark">global pathways</span>
            </a>
            , or study from anywhere in the world by{" "}
            <a href="https://www.studywithnewzealand.govt.nz/en/study-options/new-ways-of-learning/study-online">
              <span className="underline copy-dark">learning online</span>
            </a>
            . Learn about our high-quality education and unbeatable lifestyle
            when you{" "}
            <a href="https://www.studywithnewzealand.govt.nz/en/study-options/new-ways-of-learning/study-in-nz">
              <span className="underline copy-dark">
                study right here in New Zealand.
              </span>
            </a>
          </p>
        </Fade>
      </div>
    );
  }
}

export default Sectiontext;
