import React, { Component } from 'react';

class Splash extends Component {
  render() {
    return (
      <div id="splash">
        <div className="row">
          <div className="quad">
            1 of 4
          </div>
          <div className="quad">
            2 of 4
          </div>
        </div>
        <div className="row">
          <div className="quad">
            3 of 4
          </div>
          <div className="quad">
            4 of 4
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
