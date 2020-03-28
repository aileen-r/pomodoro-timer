import React from 'react';
import './Timer.css';

const Timer = () => {
  // https://codepen.io/agrimsrud/pen/EmCoa
  return (
    <div className="Timer">
      <div className="Timer-tomato"></div>
      <svg className="Timer-inner" viewBox="0 0 250 250">
        {/* TODO: change id to ref */}
        <path className="Timer-inner-loader" id="loader" transform="translate(125, 125)" />
      </svg>
      {/* <div className="Timer-inner">
      <div id="time-left" className="Timer-countdown">25:00</div>
      <div id="timer-label" className="Timer-label">focus</div>
    </div> */}
    </div>
  );
};

export default Timer;
