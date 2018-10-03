import React, { Component } from 'react';
import RevealingPicture from './revealingPicture';

class Splash extends Component {
  render() {
    return (
      <div id="splash">
        <div className="row">
          <div className="quad">
            <RevealingPicture source="/images/1.jpg"/>
          </div>
          <div className="quad">
            <RevealingPicture source="/images/2.jpg"/>
          </div>
        </div>
        <div className="row">
          <div className="quad">
            <RevealingPicture source="/images/3.jpg"/>
          </div>
          <div className="quad">
            <RevealingPicture source="/images/4.jpg"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
