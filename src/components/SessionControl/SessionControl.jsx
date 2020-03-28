import React from 'react';
import './SessionControl.css';

const IncrDecrBtn = ({ action, controlLabel }) => {
  let icon;
  switch (action) {
    case 'increment':
      icon = '+';
      break;
    case 'decrement':
      icon = '-';
      break;
    default:
      break;
  }
  return (action && <button atia-label={action + ' ' + controlLabel}>{icon}</button>) || null;
};

const SessionControl = ({ initialVal, type }) => {
  const controlLabel = type && type[0].toUpperCase() + type.slice(1) + ' Length';
  const typeId = type && type === 'focus' ? 'session' : type;
  const controlLabelId = typeId && typeId + '-label';
  return (
    <div className="SessionControl">
      <p id={controlLabelId}>{controlLabel}</p>
      <IncrDecrBtn action="decrement" controlLabel={controlLabel} />
      <span>{initialVal}</span>
      <IncrDecrBtn action="increment" controlLabel={controlLabel} />
    </div>
  );
};

export default SessionControl;
