import React from 'react';
import './SessionControl.css';

const SessionControl = ({ children, id, main, onClick }) => {
  const mainClass = main ? '--main' : '';
  return (
    <div className="SessionControl">
      <button className={`SessionControl-btn ${mainClass}`} id={id} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default SessionControl;
