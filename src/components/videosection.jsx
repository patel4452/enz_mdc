import React from "react";
import { useMediaQuery } from "react-responsive";

import Banner from "../assets/images/video_layer.png";
import Bannertab from "../assets/images/video_layer-tablet.jpg";
import Bannermob from "../assets/images/video_layer-mobile.jpg";
import Videoone from "../assets/videos/video1.mp4";

function Videosectionbanner(props) {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1199px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });
  return (
    <div className="section">
      {isMobileDevice && (
        <video
          ref={props.clickRef}
          width="100%"
          height="100%"
          preload="auto"
          controls
          poster={Bannertab}
        >
          <source src={Videoone} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      )}
      {isTabletDevice && (
        <video
          ref={props.clickRef}
          width="100%"
          height="100%"
          preload="auto"
          controls
          poster={Bannertab}
        >
          <source src={Videoone} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      )}
      {isLaptop && (
        <video
          ref={props.clickRef}
          width="100%"
          height="100%"
          preload="auto"
          controls
          poster={Bannertab}
        >
          <source src={Videoone} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      )}
      {isDesktop && (
        <video
          ref={props.clickRef}
          width="100%"
          height="100%"
          preload="auto"
          controls
          poster={Banner}
        >
          <source src={Videoone} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      )}
    </div>
  );
}

export default Videosectionbanner;
