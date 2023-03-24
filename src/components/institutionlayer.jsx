import React from "react";
import "./institutionlayer.css";
import Fade from "react-reveal/Fade";
import Institution1 from "../assets/images/institution-1.jpg";
import Institution2 from "../assets/images/institution-2.jpg";
import Institution3 from "../assets/images/institution-3.jpg";
import Institution4 from "../assets/images/institution-4.jpg";
import Institution5 from "../assets/images/institution-5.jpg";
import Institution6 from "../assets/images/institution-6.jpg";
import Institution7 from "../assets/images/institution-7.jpg";
import Institution8 from "../assets/images/institution-8.jpg";

const Institutionlayer = () => {
  return (
    <div className="custom-background">
      <div className="row parent py-5 px-5">
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 py-3">
          <a href="https://www.studywithnewzealand.govt.nz/en/study-options/education-provider/1502efc5-bcc8-11ea-9d98-0a38361e411e?utm_source=website&utm_medium=partner&utm_campaign=afterschoolmy">
            <div className="child">
              <Fade>
                <img src={Institution1} className="img-responsive" />
                <span>The University of Auckland</span>
              </Fade>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 py-3">
          <a href="https://www.studywithnewzealand.govt.nz/en/study-options/education-provider/14edbd51-bcc8-11ea-9d98-0a38361e411e?utm_source=website&utm_medium=partner&utm_campaign=afterschoolmy">
            <div className="child">
              <Fade>
                <img src={Institution2} className="img-responsive" />
                <span>Auckland University of Technology</span>
              </Fade>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 py-3">
          <a href="https://www.studywithnewzealand.govt.nz/en/study-options/education-provider/1503a894-bcc8-11ea-9d98-0a38361e411e?utm_source=website&utm_medium=partner&utm_campaign=afterschoolmy">
            <div className="child">
              <Fade>
                <img src={Institution3} className="img-responsive" />
                <span>University of Canterbury</span>
              </Fade>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 py-3">
          <a href="https://www.studywithnewzealand.govt.nz/en/study-options/education-provider/14f4e071-bcc8-11ea-9d98-0a38361e411e?utm_source=website&utm_medium=partner&utm_campaign=afterschoolmy">
            <div className="child">
              <Fade>
                <img src={Institution4} className="img-responsive" />
                <span>Lincoln University</span>
              </Fade>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 py-3">
          <a href="https://www.studywithnewzealand.govt.nz/en/study-options/education-provider/14f78440-bcc8-11ea-9d98-0a38361e411e?utm_source=website&utm_medium=partner&utm_campaign=afterschoolmy">
            <div className="child">
              <Fade>
                <img src={Institution5} className="img-responsive" />
                <span>Massey University</span>
              </Fade>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 py-3">
          <a href="https://www.studywithnewzealand.govt.nz/en/study-options/education-provider/1503b525-bcc8-11ea-9d98-0a38361e411e?utm_source=website&utm_medium=partner&utm_campaign=afterschoolmy">
            <div className="child">
              <Fade>
                <img src={Institution6} className="img-responsive" />
                <span>University of Otago</span>
              </Fade>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 py-3">
          <a href="https://www.studywithnewzealand.govt.nz/en/study-options/education-provider/1503f7ab-bcc8-11ea-9d98-0a38361e411e?utm_source=website&utm_medium=partner&utm_campaign=afterschoolmy">
            <div className="child">
              <Fade>
                <img src={Institution7} className="img-responsive" />
                <span>Victoria University of Wellington</span>
              </Fade>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 py-3">
          <a href="https://www.studywithnewzealand.govt.nz/en/study-options/education-provider/1502f8d5-bcc8-11ea-9d98-0a38361e411e?utm_source=website&utm_medium=partner&utm_campaign=afterschoolmy">
            <div className="child">
              <Fade>
                <img src={Institution8} className="img-responsive" />
                <span>The University of Waikato</span>
              </Fade>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Institutionlayer;
