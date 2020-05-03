import React from 'react';
import './SessionControl.css';

const SessionControl = ({ id, main, onClick, type }) => {
  const mainClass = main ? '--main' : '';
  return (
    <div className="SessionControl">
      <button className={`SessionControl-btn ${mainClass}`} id={id} onClick={onClick}>
        {type}
      </button>
    </div>
  );
};

export default SessionControl;
