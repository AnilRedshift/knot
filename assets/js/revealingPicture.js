import React from 'react';


const RevealingPicture = (props) => (
  <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
    <div class="flipper">
      <div class="front">
      </div>
      <div class="back">
        <div className="revealing">
            <img src={props.source}></img>
        </div>
      </div>
    </div>
  </div>
);
export default RevealingPicture;
