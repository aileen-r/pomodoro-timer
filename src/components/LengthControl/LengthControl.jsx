import React from 'react';
import './LengthControl.css';

const IncrDecrBtn = ({ action, controlLabel, onClick, type }) => {
  let icon;
  switch (action) {
    case 'Increment':
      icon = '+';
      break;
    case 'Decrement':
      icon = '-';
      break;
    default:
      break;
  }
  const btnId = (action && type ? type + '-' + action : '').toLowerCase();
  return (
    (action && (
      <button id={btnId} aria-label={action + ' ' + controlLabel} onClick={onClick}>
        {icon}
      </button>
    )) ||
    null
  );
};

const LengthControl = ({ length, setLength, type }) => {
  const controlLabel = type && type[0].toUpperCase() + type.slice(1) + ' Length';
  const typeId = type && type === 'focus' ? 'session' : type;
  const controlLabelId = typeId && typeId + '-label';
  const valueId = typeId && typeId + '-length';

  const increment = () => {
    setLength(length + 1);
  };

  const decrement = () => {
    setLength(length -1);
  };

  return (
    <div className="LengthControl">
      <p id={controlLabelId}>{controlLabel}</p>
      <IncrDecrBtn
        action="Decrement"
        controlLabel={controlLabel}
        onClick={decrement}
        type={typeId}
      />
      <span id={valueId}>{length}</span>
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
