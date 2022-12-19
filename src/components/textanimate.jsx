import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Sectiontext extends Component {
  state = {};
  render() {
    return (
      <div className="section section-text">
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
            <span className="underline copy-dark">global pathways</span>, or
            study from anywhere in the worls by{" "}
            <span className="underline copy-dark">learning online</span>. Learn
            about our high-quality education and unbeatable lifestyle when you{" "}
            <span className="underline copy-dark">
              study right here in New Zealand.
            </span>
          </p>
        </Fade>
      </div>
    );
  }
}

export default Sectiontext;
