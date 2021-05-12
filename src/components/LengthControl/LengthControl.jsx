import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import './LengthControl.scss';

const IncrDecrBtn = ({ action, controlLabel, onClick, type }) => {
  let icon;
  switch (action) {
    case 'Increment':
      icon = <FontAwesomeIcon icon={faPlus} />;
      break;
    case 'Decrement':
      icon = <FontAwesomeIcon icon={faMinus} />;
      break;
    default:
      break;
  }
  const btnId = (action && type ? type + '-' + action : '').toLowerCase();
  return (
    (action && (
      <button
        id={btnId}
        className="LengthControl-button"
        aria-label={action + ' ' + controlLabel}
        onClick={onClick}
      >
        {icon}
      </button>
    )) ||
    null
  );
};

const LengthControl = ({ length, onLengthChange, type }) => {
  const controlLabel = type && type[0].toUpperCase() + type.slice(1) + ' Length';
  const typeId = type && type === 'focus' ? 'session' : type;
  const controlLabelId = typeId && typeId + '-label';
  const valueId = typeId && typeId + '-length';

  const increment = () => {
    onLengthChange(length + 1);
  };

  const decrement = () => {
    onLengthChange(length - 1);
  };

  return (
    <div className="LengthControl">
      <p id={controlLabelId} className="LengthControl-label">
        {controlLabel}
      </p>
      <IncrDecrBtn
        action="Decrement"
        controlLabel={controlLabel}
        onClick={decrement}
        type={typeId}
      />
      <span id={valueId} className="LengthControl-length">
        {length}
      </span>
      <IncrDecrBtn
        action="Increment"
        controlLabel={controlLabel}
        onClick={increment}
        type={typeId}
      />
    </div>
  );
};

export default LengthControl;
