<<<<<<< HEAD
import React, { Component } from 'react';
import MovingText from 'react-moving-text';
import heroBanner from '../images/hero-banner.jpg';
import arrowDown from '../images/arrow-down.png';
import Typist from 'react-typist';
import './herobanner.css';


function Handletextanimation(props){
    const Letters = [...props.text];
    let updatedtext =  Letters.map((letter, index) =>
    <MovingText
      type="popIn"
      duration="1000ms"
      delay="index * 1000ms"
      direction="normal"
      timing="ease-in-out"
      iteration="1"
      fillMode="backwards">
      {letter}
    </MovingText>
    )
    return updatedtext;
}
class Herobanner extends Component {
    render() { 
        return (
            <div className="container">
=======
import React, { Component, useRef } from 'react';
import MovingText from 'react-moving-text';
import heroBanner from '../assets/images/hero-banner.jpg';
import arrowDown from '../assets/images/arrow-down.png';
import Typist from 'react-typist';
import './herobanner.css';
import Videoone from '../assets/videos/video1.mp4' ;
import Bannervideo from '../assets/images/video_layer.png';
import Clientlogo from '../assets/images/clientlogo.png';
import Clientlogo2 from '../assets/images/clientlogo1.png';


function Herobanner () {
    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };
    
    return (
        <div className='main'>
            <nav>
                <img src={Clientlogo} className='align-left logo' />
                <img src={Clientlogo2} className='logo' />
            </nav>
            <div className="section" onClick={handleClick}>
>>>>>>> 1de8cf1ef020f74f2dbc238b6bf391def11fc9bd
                <img src={heroBanner} alt="Snow" className='img-responsive' />
                <div className="centered">
                    <h1 className="ml6">
                        <div className="text-wrapper">
                            <Typist>
                            Live your ambitions from accross the globe.
                            </Typist>
                        </div>
                    </h1>
                    
                    <p >We create global pathways so you can create your global future</p>
                    <img src={arrowDown} className="icon icon-size-sm img-responsive down-arrow" />
<<<<<<< HEAD
                    <div class="down-arrow"></div>
                </div>
                
            </div>
        );
    }
=======
                </div>
            </div>
            <div className="section">
                <video ref={ref} width="100%" height="100%"  preload='auto' controls poster={Bannervideo}>
                    <source src={Videoone} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
        </div>
    );
>>>>>>> 1de8cf1ef020f74f2dbc238b6bf391def11fc9bd
}

export default Herobanner;