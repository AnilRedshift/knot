import React from 'react';


const RevealingPicture = (props) => {
  const styles = "flip-container" + (props.show ? " hover" : "");
  return (<div className={styles}>
    <div className="flipper">
      <div className="front">
      </div>
      <div className="back">
        <div className="revealing">
            <img src={props.source}></img>
        </div>
      </div>
    </div>
  </div>);
};
export default RevealingPicture;
