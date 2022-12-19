import React from "react";
import "./studyoptions.css";
import image1 from "../assets/images/layer4-1.png";
import image2 from "../assets/images/layer4-2.png";
import image3 from "../assets/images/layer4-3.png";

const Studyoptions = () => {
  return (
    <div className="section-study-option p-5">
      <h2 className="copy-title title-regular pb-4 align-center">
        Learn more about the study options available.
      </h2>
      <div className="row ">
        <div className="col-sm-12 col-md-4 col-lg-4 mb-5">
          <div className="img-wrapper pb-5">
            <img src={image1} className="img-responsive img-icon" />
          </div>
          <div className="copy-text p-3 pt-0 ">
            <h3 className="copy-text pb-3">Global pathways</h3>
            <p className="copy-text pb-3">
              <strong>
                Take the first step towards your New Zealand education with
                global pathways.
              </strong>
            </p>
            <p className="copy-text-light pb-3">
              Enjoy the convenience of studying locally with a global pathways
              course. find a local course provider and start your New Zealand
              education journet now.
            </p>
            <p className="copy-text">
              <strong>Learn about global pathway &#62; </strong>
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 mb-5">
          <div className="img-wrapper pb-5">
            <img src={image2} className="img-responsive img-icon" />
          </div>
          <div className="copy-text p-3 pt-0">
            <h3 className="copy-text pb-3">Study in New Zealand</h3>
            <p className="copy-text pb-3">
              <strong>Find out what it is like to study in New Zealand.</strong>
            </p>
            <p className="copy-text-light pb-3">
              New Zealand is one of the best places to live and study. Our
              unique cultural values such as kaitiakitanga
              <span className="next-line pt-1">
                &#8212; care for the world around us and future generations
              </span>
              <span className="next-line pt-1">
                &#8212; influences out education system and way of life.
              </span>
            </p>
            <p className="copy-text">
              <strong>Learn about study here &#62; </strong>
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 mb-5">
          <div className="img-wrapper pb-5">
            <img src={image3} className="img-responsive img-icon" />
          </div>
          <div className="copy-text p-3 pt-0">
            <h3 className="copy-text pb-3">Study online</h3>
            <p className="copy-text pb-3">
              <strong>
                Study from anywhere in the world and access your New Zealand
                education online.
              </strong>
            </p>
            <p className="copy-text-light pb-3">
              Looking for our most flexible study options? Find a course that
              interests you and start your New Zealand education journey online.
            </p>
            <p className="copy-text">
              <strong>Learn about studying online &#62; </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studyoptions;
