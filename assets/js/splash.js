import React, { Component } from 'react';
import RevealingPicture from './revealingPicture';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      visiblePictures: 0,
    }
    this.incrementPictures = this.incrementPictures.bind(this);
  }

  componentDidMount() {
    clearInterval(this.interval);
    this.interval = setInterval(this.incrementPictures, 500);
  }

  incrementPictures() {
    this.setState((state) => {
      if (state.visiblePictures <= 4) {
        state = {
          visiblePictures: state.visiblePictures + 1,
        };
      } else {
        clearInterval(this.interval);
        this.interval = null;
      }
      return state;
    });
  }

  render() {
    const v = this.state.visiblePictures;
    return (
      <div id="splash">
        <div className="row">
          <div className="quad">
            <RevealingPicture source="/images/1.jpg" show={v >= 1} />
          </div>
          <div className="quad">
            <RevealingPicture source="/images/2.jpg"  show={v >= 2}/>
          </div>
        </div>
        <div className="row">
          <div className="quad">
            <RevealingPicture source="/images/3.jpg"  show={v >= 3}/>
          </div>
          <div className="quad">
            <RevealingPicture source="/images/4.jpg"  show={v >= 4}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
