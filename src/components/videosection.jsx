import React, { Component, useRef } from "react";
import Videoone from "../assets/videos/video1.mp4";
import Bannervideo from "../assets/images/video_layer.png";

function Videosection() {
  return (
    <div className="section">
      <video
        ref={this.props.ref}
        width="100%"
        height="100%"
        preload="auto"
        controls
        poster={Bannervideo}
      >
        <source src={Videoone} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}

export default Videosection;
