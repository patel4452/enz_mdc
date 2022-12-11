import React, { Component } from 'react';
import Videoone from '../assets/videos/video1.mp4' ;
import Bannervideo from '../assets/images/video_layer.png';

class Videosection extends Component {
  state = {  } 
  render() { 
    return (
        <video width="100%" height="100%"  preload='auto' controls poster={Bannervideo}>
          <source src={Videoone} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
    );
  }
}
 
export default Videosection;