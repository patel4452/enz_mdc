import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import { useMediaQuery } from "react-responsive";

import "./parallaxstyletwo.css";
import Parallax1 from "../assets/images/parallax-1.jpg";
import Parallax2 from "../assets/images/parallax-2.jpg";
import Parallax3 from "../assets/images/parallax-3.jpg";
import Parallax1tab from "../assets/images/parallax-tablet-1.jpg";
import Parallax2tab from "../assets/images/parallax-tablet-2.jpg";
import Parallax3tab from "../assets/images/parallax-tablet-3.jpg";
import Check from "../assets/images/check_enz.png";

const Parallaxstyletwo = () => {
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
    <>
      {isMobileDevice && (
        <div>
          <Controller>
            <Scene
              duration={1000}
              pin={true}
              indicators={false}
              triggerHook="onLeave"
            >
              {(progress) => (
                <div
                  style={{
                    background: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100vh",
                    overflow: "hidden",
                  }}
                >
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{ y: "0vh", scale: 1.5 }}
                      to={{ y: "1vh", scale: 1.1 }}
                      duration={1000}
                    >
                      <img
                        src={Parallax1}
                        style={{
                          width: "100%",
                          transition: "transform .4s ease-out",
                          position: "absolute",
                          zIndex: 0,
                          left: 0,
                          top: 0,
                        }}
                      />
                    </Tween>
                    <Tween
                      from={{ y: "-110vh" }}
                      to={{ y: "10vh" }}
                      duration={1000}
                    >
                      <h2
                        className="copy-title title-regular pt-5 pb-4 align-center"
                        style={{
                          position: "absolute",
                          zIndex: 1,
                          //left: "15%",
                          top: "0",
                        }}
                      >
                        Why You Should Choose<br></br> a Global Pathway
                        Programme to New Zealand
                      </h2>
                    </Tween>

                    <Tween
                      from={{ y: "110vh" }}
                      to={{ y: "30vh" }}
                      duration={1000}
                    >
                      <div
                        className="parallax-right"
                        style={{
                          position: "absolute",
                          zIndex: 0,
                          left: "10%",
                          bottom: "45%",
                          maxWidth: "90%",
                        }}
                      >
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Start your journey right now, at a recognised
                            provider near you
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>Enjoy the convenience of studying locally</span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Studying closer to home means you'll save on travel
                            and living costs
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Choose to progress your education to anyone of New
                            Zealand's world-ranked universities.
                          </span>
                        </p>
                      </div>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
          </Controller>
          <Controller>
            <Scene
              duration={1000}
              pin={true}
              indicators={false}
              triggerHook="onLeave"
            >
              {(progress) => (
                <div
                  style={{
                    background: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100vh",
                    overflow: "hidden",
                  }}
                >
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{ y: "0vh", scale: 1.5 }}
                      to={{ y: "1vh", scale: 1.1 }}
                      duration={1000}
                    >
                      <img
                        src={Parallax2}
                        style={{
                          width: "100%",
                          transition: "transform .4s ease-out",
                          position: "absolute",
                          zIndex: 0,
                          left: 0,
                          top: 0,
                        }}
                      />
                    </Tween>
                    <Tween
                      from={{ y: "-110vh" }}
                      to={{ y: "10vh" }}
                      duration={1000}
                    >
                      <h2
                        className="copy-title title-regular pt-5 pb-4 align-center"
                        style={{
                          position: "absolute",
                          zIndex: 1,
                          //left: "15%",
                          top: "0",
                        }}
                      >
                        Why You Should Choose<br></br> a Global Pathway
                        Programme to New Zealand
                      </h2>
                    </Tween>

                    <Tween
                      from={{ y: "110vh" }}
                      to={{ y: "30vh" }}
                      duration={1000}
                    >
                      <div
                        className="parallax-right"
                        style={{
                          position: "absolute",
                          zIndex: 0,
                          right: "10%",
                          bottom: "45%",
                          maxWidth: "90%",
                        }}
                      >
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Start your journey right now, at a recognised
                            provider near you
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>Enjoy the convenience of studying locally</span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Studying closer to home means you'll save on travel
                            and living costs
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Choose to progress your education to anyone of New
                            Zealand's world-ranked universities.
                          </span>
                        </p>
                      </div>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
          </Controller>
          <Controller>
            <Scene
              duration={1000}
              pin={true}
              indicators={false}
              triggerHook="onLeave"
            >
              {(progress) => (
                <div
                  style={{
                    background: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100vh",
                    overflow: "hidden",
                  }}
                >
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{ y: "0vh", scale: 1.5 }}
                      to={{ y: "1vh", scale: 1.1 }}
                      duration={1000}
                    >
                      <img
                        src={Parallax3}
                        style={{
                          width: "100%",
                          transition: "transform .4s ease-out",
                          position: "absolute",
                          zIndex: 0,
                          left: 0,
                          top: 0,
                        }}
                      />
                    </Tween>
                    <Tween
                      from={{ y: "-110vh" }}
                      to={{ y: "10vh" }}
                      duration={1000}
                    >
                      <h2
                        className="copy-title title-regular pt-5 pb-4 align-center"
                        style={{
                          position: "absolute",
                          zIndex: 1,
                          //left: "15%",
                          top: "0",
                        }}
                      >
                        Why You Should Choose<br></br> a Global Pathway
                        Programme to New Zealand
                      </h2>
                    </Tween>

                    <Tween
                      from={{ y: "110vh" }}
                      to={{ y: "30vh" }}
                      duration={1000}
                    >
                      <div
                        className="parallax-right"
                        style={{
                          position: "absolute",
                          zIndex: 0,
                          right: "10%",
                          bottom: "45%",
                          maxWidth: "90%",
                        }}
                      >
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Start your journey right now, at a recognised
                            provider near you
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>Enjoy the convenience of studying locally</span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Studying closer to home means you'll save on travel
                            and living costs
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Choose to progress your education to anyone of New
                            Zealand's world-ranked universities.
                          </span>
                        </p>
                      </div>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
          </Controller>
        </div>
      )}
      {isTabletDevice && (
        <div>
          <Controller>
            <Scene
              duration={1000}
              pin={true}
              indicators={false}
              triggerHook="onLeave"
            >
              {(progress) => (
                <div
                  style={{
                    background: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100vh",
                    overflow: "hidden",
                  }}
                >
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{ y: "0vh", scale: 1.5 }}
                      to={{ y: "1vh", scale: 1.1 }}
                      duration={1000}
                    >
                      <img
                        src={Parallax1}
                        style={{
                          width: "100%",
                          transition: "transform .4s ease-out",
                          position: "absolute",
                          zIndex: 0,
                          left: 0,
                          top: 0,
                        }}
                      />
                    </Tween>
                    <Tween
                      from={{ y: "-110vh" }}
                      to={{ y: "10vh" }}
                      duration={1000}
                    >
                      <h2
                        className="copy-title title-regular pt-5 pb-4 align-center"
                        style={{
                          position: "absolute",
                          zIndex: 1,
                          //left: "15%",
                          top: "0",
                        }}
                      >
                        Why You Should Choose<br></br> a Global Pathway
                        Programme to New Zealand
                      </h2>
                    </Tween>

                    <Tween
                      from={{ y: "110vh" }}
                      to={{ y: "30vh" }}
                      duration={1000}
                    >
                      <div
                        className="parallax-right"
                        style={{
                          position: "absolute",
                          zIndex: 0,
                          left: "10%",
                          bottom: "45%",
                          maxWidth: "40%",
                        }}
                      >
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Start your journey right now, at a recognised
                            provider near you
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>Enjoy the convenience of studying locally</span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Studying closer to home means you'll save on travel
                            and living costs
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Choose to progress your education to anyone of New
                            Zealand's world-ranked universities.
                          </span>
                        </p>
                      </div>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
          </Controller>
          <Controller>
            <Scene
              duration={1000}
              pin={true}
              indicators={false}
              triggerHook="onLeave"
            >
              {(progress) => (
                <div
                  style={{
                    background: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100vh",
                    overflow: "hidden",
                  }}
                >
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{ y: "0vh", scale: 1.5 }}
                      to={{ y: "1vh", scale: 1.1 }}
                      duration={1000}
                    >
                      <img
                        src={Parallax2}
                        style={{
                          width: "100%",
                          transition: "transform .4s ease-out",
                          position: "absolute",
                          zIndex: 0,
                          left: 0,
                          top: 0,
                        }}
                      />
                    </Tween>
                    <Tween
                      from={{ y: "-110vh" }}
                      to={{ y: "10vh" }}
                      duration={1000}
                    >
                      <h2
                        className="copy-title title-regular pt-5 pb-4 align-center"
                        style={{
                          position: "absolute",
                          zIndex: 1,
                          //left: "15%",
                          top: "0",
                        }}
                      >
                        Why You Should Choose<br></br> a Global Pathway
                        Programme to New Zealand
                      </h2>
                    </Tween>

                    <Tween
                      from={{ y: "110vh" }}
                      to={{ y: "30vh" }}
                      duration={1000}
                    >
                      <div
                        className="parallax-right"
                        style={{
                          position: "absolute",
                          zIndex: 0,
                          right: "10%",
                          bottom: "45%",
                          maxWidth: "40%",
                        }}
                      >
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Start your journey right now, at a recognised
                            provider near you
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>Enjoy the convenience of studying locally</span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Studying closer to home means you'll save on travel
                            and living costs
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Choose to progress your education to anyone of New
                            Zealand's world-ranked universities.
                          </span>
                        </p>
                      </div>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
          </Controller>
          <Controller>
            <Scene
              duration={1000}
              pin={true}
              indicators={false}
              triggerHook="onLeave"
            >
              {(progress) => (
                <div
                  style={{
                    background: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100vh",
                    overflow: "hidden",
                  }}
                >
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{ y: "0vh", scale: 1.5 }}
                      to={{ y: "1vh", scale: 1.1 }}
                      duration={1000}
                    >
                      <img
                        src={Parallax3}
                        style={{
                          width: "100%",
                          transition: "transform .4s ease-out",
                          position: "absolute",
                          zIndex: 0,
                          left: 0,
                          top: 0,
                        }}
                      />
                    </Tween>
                    <Tween
                      from={{ y: "-110vh" }}
                      to={{ y: "10vh" }}
                      duration={1000}
                    >
                      <h2
                        className="copy-title title-regular pt-5 pb-4 align-center"
                        style={{
                          position: "absolute",
                          zIndex: 1,
                          //left: "15%",
                          top: "0",
                        }}
                      >
                        Why You Should Choose<br></br> a Global Pathway
                        Programme to New Zealand
                      </h2>
                    </Tween>

                    <Tween
                      from={{ y: "110vh" }}
                      to={{ y: "30vh" }}
                      duration={1000}
                    >
                      <div
                        className="parallax-right"
                        style={{
                          position: "absolute",
                          zIndex: 0,
                          right: "10%",
                          bottom: "45%",
                          maxWidth: "40%",
                        }}
                      >
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Start your journey right now, at a recognised
                            provider near you
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>Enjoy the convenience of studying locally</span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Studying closer to home means you'll save on travel
                            and living costs
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Choose to progress your education to anyone of New
                            Zealand's world-ranked universities.
                          </span>
                        </p>
                      </div>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
          </Controller>
        </div>
      )}
      {isLaptop && (
        <div>
          <Controller>
            <Scene
              duration={1000}
              pin={true}
              indicators={false}
              triggerHook="onLeave"
            >
              {(progress) => (
                <div
                  style={{
                    background: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100vh",
                    overflow: "hidden",
                  }}
                >
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{ y: "0vh", scale: 1.5 }}
                      to={{ y: "10vh", scale: 1.1 }}
                      duration={1000}
                    >
                      <img
                        src={Parallax1tab}
                        style={{
                          width: "100%",
                          transition: "transform .4s ease-out",
                          position: "absolute",
                          zIndex: 0,
                          left: 0,
                          top: 0,
                        }}
                      />
                    </Tween>
                    <Tween
                      from={{ y: "-110vh" }}
                      to={{ y: "10vh" }}
                      duration={1000}
                    >
                      <h2
                        className="copy-title title-regular pt-5 pb-4 align-center"
                        style={{
                          position: "absolute",
                          zIndex: 1,
                          //left: "15%",
                          top: "0",
                          right: "15%",
                        }}
                      >
                        Why You Should Choose<br></br> a Global Pathway
                        Programme to New Zealand
                      </h2>
                    </Tween>

                    <Tween
                      from={{ y: "110vh" }}
                      to={{ y: "30vh" }}
                      duration={1000}
                    >
                      <div
                        className="parallax-right"
                        style={{
                          position: "absolute",
                          zIndex: 0,
                          left: "10%",
                          bottom: "45%",
                          maxWidth: "40%",
                        }}
                      >
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Start your journey right now, at a recognised
                            provider near you
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>Enjoy the convenience of studying locally</span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Studying closer to home means you'll save on travel
                            and living costs
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Choose to progress your education to anyone of New
                            Zealand's world-ranked universities.
                          </span>
                        </p>
                      </div>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
          </Controller>
          <Controller>
            <Scene
              duration={1000}
              pin={true}
              indicators={false}
              triggerHook="onLeave"
            >
              {(progress) => (
                <div
                  style={{
                    background: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100vh",
                    overflow: "hidden",
                  }}
                >
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{ y: "0vh", scale: 1.5 }}
                      to={{ y: "10vh", scale: 1.1 }}
                      duration={1000}
                    >
                      <img
                        src={Parallax2tab}
                        style={{
                          width: "100%",
                          transition: "transform .4s ease-out",
                          position: "absolute",
                          zIndex: 0,
                          left: 0,
                          top: 0,
                        }}
                      />
                    </Tween>
                    <Tween
                      from={{ y: "-110vh" }}
                      to={{ y: "10vh" }}
                      duration={1000}
                    >
                      <h2
                        className="copy-title title-regular pt-5 pb-4 align-center"
                        style={{
                          position: "absolute",
                          zIndex: 1,
                          //left: "15%",
                          top: "0",
                          right: "15%",
                        }}
                      >
                        Why You Should Choose<br></br> a Global Pathway
                        Programme to New Zealand
                      </h2>
                    </Tween>

                    <Tween
                      from={{ y: "110vh" }}
                      to={{ y: "30vh" }}
                      duration={1000}
                    >
                      <div
                        className="parallax-right"
                        style={{
                          position: "absolute",
                          zIndex: 0,
                          right: "10%",
                          bottom: "45%",
                          maxWidth: "40%",
                        }}
                      >
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Start your journey right now, at a recognised
                            provider near you
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>Enjoy the convenience of studying locally</span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Studying closer to home means you'll save on travel
                            and living costs
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Choose to progress your education to anyone of New
                            Zealand's world-ranked universities.
                          </span>
                        </p>
                      </div>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
          </Controller>
          <Controller>
            <Scene
              duration={1000}
              pin={true}
              indicators={false}
              triggerHook="onLeave"
            >
              {(progress) => (
                <div
                  style={{
                    background: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100vh",
                    overflow: "hidden",
                  }}
                >
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{ y: "0vh", scale: 1.5 }}
                      to={{ y: "10vh", scale: 1.1 }}
                      duration={1000}
                    >
                      <img
                        src={Parallax3tab}
                        style={{
                          width: "100%",
                          transition: "transform .4s ease-out",
                          position: "absolute",
                          zIndex: 0,
                          left: 0,
                          top: 0,
                        }}
                      />
                    </Tween>
                    <Tween
                      from={{ y: "-110vh" }}
                      to={{ y: "10vh" }}
                      duration={1000}
                    >
                      <h2
                        className="copy-title title-regular pt-5 pb-4 align-center"
                        style={{
                          position: "absolute",
                          zIndex: 1,
                          //left: "15%",
                          top: "0",
                          right: "15%",
                        }}
                      >
                        Why You Should Choose<br></br> a Global Pathway
                        Programme to New Zealand
                      </h2>
                    </Tween>

                    <Tween
                      from={{ y: "110vh" }}
                      to={{ y: "30vh" }}
                      duration={1000}
                    >
                      <div
                        className="parallax-right"
                        style={{
                          position: "absolute",
                          zIndex: 0,
                          right: "10%",
                          bottom: "45%",
                          maxWidth: "40%",
                        }}
                      >
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Start your journey right now, at a recognised
                            provider near you
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>Enjoy the convenience of studying locally</span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Studying closer to home means you'll save on travel
                            and living costs
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Choose to progress your education to anyone of New
                            Zealand's world-ranked universities.
                          </span>
                        </p>
                      </div>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
          </Controller>
        </div>
      )}
      {isDesktop && (
        <div>
          <Controller>
            <Scene
              duration={1000}
              pin={true}
              indicators={false}
              triggerHook="onLeave"
            >
              {(progress) => (
                <div
                  style={{
                    background: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100vh",
                    overflow: "hidden",
                  }}
                >
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{ y: "0vh", scale: 1.5 }}
                      to={{ y: "1vh", scale: 1.1 }}
                      duration={1000}
                    >
                      <img
                        src={Parallax1}
                        style={{
                          width: "100%",
                          transition: "transform .4s ease-out",
                          position: "absolute",
                          zIndex: 0,
                          left: 0,
                          top: 0,
                        }}
                      />
                    </Tween>
                    <Tween
                      from={{ y: "-110vh" }}
                      to={{ y: "10vh" }}
                      duration={1000}
                    >
                      <h2
                        className="copy-title title-regular pt-5 pb-4 align-center"
                        style={{
                          position: "absolute",
                          zIndex: 1,
                          //left: "15%",
                          top: "0",
                        }}
                      >
                        Why You Should Choose<br></br> a Global Pathway
                        Programme to New Zealand
                      </h2>
                    </Tween>

                    <Tween
                      from={{ y: "110vh" }}
                      to={{ y: "30vh" }}
                      duration={1000}
                    >
                      <div
                        className="parallax-right"
                        style={{
                          position: "absolute",
                          zIndex: 0,
                          left: "10%",
                          bottom: "45%",
                          maxWidth: "40%",
                        }}
                      >
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Start your journey right now, at a recognised
                            provider near you
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>Enjoy the convenience of studying locally</span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Studying closer to home means you'll save on travel
                            and living costs
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Choose to progress your education to anyone of New
                            Zealand's world-ranked universities.
                          </span>
                        </p>
                      </div>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
          </Controller>
          <Controller>
            <Scene
              duration={1000}
              pin={true}
              indicators={false}
              triggerHook="onLeave"
            >
              {(progress) => (
                <div
                  style={{
                    background: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100vh",
                    overflow: "hidden",
                  }}
                >
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{ y: "0vh", scale: 1.5 }}
                      to={{ y: "1vh", scale: 1.1 }}
                      duration={1000}
                    >
                      <img
                        src={Parallax2}
                        style={{
                          width: "100%",
                          transition: "transform .4s ease-out",
                          position: "absolute",
                          zIndex: 0,
                          left: 0,
                          top: 0,
                        }}
                      />
                    </Tween>
                    <Tween
                      from={{ y: "-110vh" }}
                      to={{ y: "10vh" }}
                      duration={1000}
                    >
                      <h2
                        className="copy-title title-regular pt-5 pb-4 align-center"
                        style={{
                          position: "absolute",
                          zIndex: 1,
                          //left: "15%",
                          top: "0",
                        }}
                      >
                        Why You Should Choose<br></br> a Global Pathway
                        Programme to New Zealand
                      </h2>
                    </Tween>

                    <Tween
                      from={{ y: "110vh" }}
                      to={{ y: "30vh" }}
                      duration={1000}
                    >
                      <div
                        className="parallax-right"
                        style={{
                          position: "absolute",
                          zIndex: 0,
                          right: "10%",
                          bottom: "45%",
                          maxWidth: "40%",
                        }}
                      >
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Start your journey right now, at a recognised
                            provider near you
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>Enjoy the convenience of studying locally</span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Studying closer to home means you'll save on travel
                            and living costs
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Choose to progress your education to anyone of New
                            Zealand's world-ranked universities.
                          </span>
                        </p>
                      </div>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
          </Controller>
          <Controller>
            <Scene
              duration={1000}
              pin={true}
              indicators={false}
              triggerHook="onLeave"
            >
              {(progress) => (
                <div
                  style={{
                    background: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100vh",
                    overflow: "hidden",
                  }}
                >
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{ y: "0vh", scale: 1.5 }}
                      to={{ y: "1vh", scale: 1.1 }}
                      duration={1000}
                    >
                      <img
                        src={Parallax3}
                        style={{
                          width: "100%",
                          transition: "transform .4s ease-out",
                          position: "absolute",
                          zIndex: 0,
                          left: 0,
                          top: 0,
                        }}
                      />
                    </Tween>
                    <Tween
                      from={{ y: "-110vh" }}
                      to={{ y: "10vh" }}
                      duration={1000}
                    >
                      <h2
                        className="copy-title title-regular pt-5 pb-4 align-center"
                        style={{
                          position: "absolute",
                          zIndex: 1,
                          //left: "15%",
                          top: "0",
                        }}
                      >
                        Why You Should Choose<br></br> a Global Pathway
                        Programme to New Zealand
                      </h2>
                    </Tween>

                    <Tween
                      from={{ y: "110vh" }}
                      to={{ y: "30vh" }}
                      duration={1000}
                    >
                      <div
                        className="parallax-right"
                        style={{
                          position: "absolute",
                          zIndex: 0,
                          right: "10%",
                          bottom: "45%",
                          maxWidth: "40%",
                        }}
                      >
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Start your journey right now, at a recognised
                            provider near you
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>Enjoy the convenience of studying locally</span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Studying closer to home means you'll save on travel
                            and living costs
                          </span>
                        </p>
                        <p>
                          <img
                            src={Check}
                            className="img-responsive align-icon"
                          />
                          <span>
                            Choose to progress your education to anyone of New
                            Zealand's world-ranked universities.
                          </span>
                        </p>
                      </div>
                    </Tween>
                  </Timeline>
                </div>
              )}
            </Scene>
          </Controller>
        </div>
      )}
    </>
  );
};

export default Parallaxstyletwo;