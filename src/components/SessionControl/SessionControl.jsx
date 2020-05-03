import React from 'react';
import './SessionControl.css';

const SessionControl = ({ id, main, type }) => {
  const mainClass = main ? '--main' : '';
  return (
    <div className="SessionControl">
      <button className={`SessionControl-btn ${mainClass}`} id={id}>
        {type}
      </button>
    </div>
  );
};

export default SessionControl;
