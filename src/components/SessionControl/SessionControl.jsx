import React from 'react';
import './SessionControl.css';

const IncrDecrBtn = ({ action, controlLabel, type }) => {
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
  const btnId = (action && type) ? type + '-' + action : '';
  return (action && <button id={btnId} aria-label={action + ' ' + controlLabel}>{icon}</button>) || null;
};

const SessionControl = ({ initialVal, type }) => {
  const controlLabel = type && type[0].toUpperCase() + type.slice(1) + ' Length';
  const typeId = type && type === 'focus' ? 'session' : type;
  const controlLabelId = typeId && typeId + '-label';
  const valueId = typeId && typeId + '-length';

  return (
    <div className="SessionControl">
      <p id={controlLabelId}>{controlLabel}</p>
      <IncrDecrBtn action="decrement" controlLabel={controlLabel} type={typeId}/>
      <span id={valueId}>{initialVal}</span>
      <IncrDecrBtn action="increment" controlLabel={controlLabel} type={typeId}/>
    </div>
  );
};

export default SessionControl;
