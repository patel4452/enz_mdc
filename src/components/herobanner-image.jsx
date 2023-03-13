import React from "react";
import { useMediaQuery } from "react-responsive";

import heroBanner from "../assets/images/hero-banner.jpg";
import TabheroBanner from "../assets/images/hero-banner-tablet.jpg";
import MobheroBanner from "../assets/images/hero-banner-mobile.jpg";

const Herobannerimage = () => {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const isTabletDevice = useMediaQuery({
    query:
      "(min-width: 768px) and (orientation: landscape) and (max-width: 1023px)",
  });

  const isPortraitTab = useMediaQuery({
    query:
      "(min-width: 768px) and (orientation: portrait) and (max-width: 1023px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1199px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });
  return (
    <>
      {isMobileDevice && (
        <img src={heroBanner} alt="Snow" className="img-responsive w-100" />
      )}
      {isTabletDevice && (
        <img src={heroBanner} alt="Snow" className="img-responsive w-100" />
      )}
      {isPortraitTab && (
        <img src={heroBanner} alt="Snow" className="img-responsive w-100" />
      )}
      {isLaptop && (
        <img src={TabheroBanner} alt="Snow" className="img-responsive w-100" />
      )}
      {isDesktop && (
        <img src={heroBanner} alt="Snow" className="img-responsive w-100" />
      )}
    </>
  );
};

export default Herobannerimage;
