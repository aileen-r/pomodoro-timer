import React from 'react';
import './Timer.css';

const Timer = ({ time }) => {
  // https://codepen.io/agrimsrud/pen/EmCoa
  return (
    <div className="Timer">
      <div className="Timer-tomato"></div>
      <div className="Timer-inner">
        <div id="time-left" className="Timer-countdown">
          {time}
        </div>
        <div id="timer-label" className="Timer-label">
          focus
        </div>
      </div>
    </div>
  );
};

export default Timer;
