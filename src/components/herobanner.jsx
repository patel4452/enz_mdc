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
                    <div class="down-arrow"></div>
                </div>
                
            </div>
        );
    }
}

export default Herobanner;