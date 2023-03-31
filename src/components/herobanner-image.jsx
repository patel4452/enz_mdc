import React from "react";

import heroBanner from "../assets/images/hero-banner.jpg";
import TabheroBanner from "../assets/images/hero-banner-tablet.jpg";
import MobheroBanner from "../assets/images/hero-banner-mobile.jpg";

const Herobannerimage = () => {
  return (
    <>
      <picture>
        <source
          media="(min-width: 1024px) and (max-width: 1449px)"
          srcSet={TabheroBanner}
        />
        <img src={heroBanner} alt="Flowers" style={{ width: "100%" }} />
      </picture>
    </>
  );
};

export default Herobannerimage;
