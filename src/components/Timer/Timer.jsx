import React from 'react';
import { secondsToClockTime } from './timeFormatting';
import './Timer.css';

const Timer = ({ mode, time }) => {
  // https://codepen.io/agrimsrud/pen/EmCoa

  const clockTime = secondsToClockTime(time);

  return (
    <div className="Timer">
      <div className="Timer-tomato"></div>
      <div className="Timer-inner">
        <div id="time-left" className="Timer-countdown">
          {clockTime}
        </div>
        <div id="timer-label" className="Timer-label">
          {mode}
        </div>
      </div>
    </div>
  );
};

export default Timer;
