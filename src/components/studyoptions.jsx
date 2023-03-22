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
          <div className="copy-text p-3 pt-0  custom-col">
            <h3 className="copy-text pb-3">Global Pathways</h3>
            <p className="copy-text pb-3">
              <strong>
                Take the first step towards your New Zealand education with
                Global Pathways.
              </strong>
            </p>
            <p className="copy-text-light pb-3">
              Enjoy the convenience of studying locally with a Global Pathways
              course. Find a local course provider and start your New Zealand
              education journey now.
            </p>
            <p className="copy-text">
              <a href="https://www.studywithnewzealand.govt.nz/en/study-options/new-ways-of-learning/global-pathways">
                <strong>Learn about Global Pathways &#62; </strong>
              </a>
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 mb-5">
          <div className="img-wrapper pb-5">
            <img src={image2} className="img-responsive img-icon" />
          </div>
          <div className="copy-text p-3 pt-0 custom-col">
            <h3 className="copy-text pb-3">Study in New Zealand</h3>
            <p className="copy-text pb-3">
              <strong>Find out what it is like to study in New Zealand.</strong>
            </p>
            <p className="copy-text-light pb-3">
              New Zealand is one of the best places to live and study. Our
              unique cultural values such as kaitiakitanga ( care for the world
              around us and future generations ) which influences our education
              system and way of life.
            </p>
            <p className="copy-text">
              <a href="https://www.studywithnewzealand.govt.nz/en/study-options/new-ways-of-learning/study-in-nz">
                <strong>Learn about studying in NZ here &#62; </strong>
              </a>
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 mb-5">
          <div className="img-wrapper pb-5">
            <img src={image3} className="img-responsive img-icon" />
          </div>
          <div className="copy-text p-3 pt-0  custom-col">
            <h3 className="copy-text pb-3">Study Online</h3>
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
              <a href="https://www.studywithnewzealand.govt.nz/en/study-options/new-ways-of-learning/study-online">
                <strong>Learn about studying online &#62; </strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studyoptions;
