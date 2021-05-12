import React from 'react';
import PropTypes from 'prop-types';

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

SessionControl.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string,
  main: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SessionControl;
