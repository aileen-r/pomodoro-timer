import React from 'react';
import PropTypes from 'prop-types';
import { secondsToClockTime } from './timeFormatting';
import { ReactComponent as Tomato } from './tomato.svg';

import './Timer.scss';

const Timer = ({ mode, time }) => {
  // https://codepen.io/agrimsrud/pen/EmCoa

  const clockTime = secondsToClockTime(time);

  return (
    <div className="Timer">
      <Tomato className="Timer-tomato" />
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

Timer.propTypes = {
  mode: PropTypes.string,
  time: PropTypes.number,
};

export default Timer;
