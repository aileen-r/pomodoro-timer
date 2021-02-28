import React from 'react';
import './SessionControl.scss';

const SessionControl = ({ ariaLabel, children, id, main, onClick }) => {
  const mainClass = main ? '--main' : '';
  return (
    <div className="SessionControl">
      <button
        aria-label={ariaLabel}
        className={`SessionControl-btn ${mainClass}`}
        id={id}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default SessionControl;
