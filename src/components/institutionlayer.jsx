import React from "react";
import "./institutionlayer.css";
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
    <div class="parent">
      <div class="child">
        <img src={Institution1} className="img-responsive" />
        <span>The University of Auckland</span>
      </div>
      <div class="child">
        <img src={Institution2} className="img-responsive" />
        <span>Auckland University of Technology</span>
      </div>
      <div class="child">
        <img src={Institution3} className="img-responsive" />
        <span>University of Canterbury</span>
      </div>
      <div class="child">
        <img src={Institution4} className="img-responsive" />
        <span>Lincoln University</span>
      </div>
      <div class="child">
        <img src={Institution5} className="img-responsive" />
        <span>Massey University</span>
      </div>
      <div class="child">
        <img src={Institution6} className="img-responsive" />
        <span>University of Otago</span>
      </div>
      <div class="child">
        <img src={Institution7} className="img-responsive" />
        <span>Victoria University of Wellington</span>
      </div>
      <div class="child">
        <img src={Institution8} className="img-responsive" />
        <span>University of Waikato</span>
      </div>
    </div>
  );
};

export default Institutionlayer;
