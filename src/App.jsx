import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';
import LengthControl from './components/LengthControl';
import SessionControl from './components/SessionControl';
import './App.css';

const App = () => {
  const [breakLength, setBreakLength] = useState(0.1);
  const [focusLength, setFocusLength] = useState(0.1);
  const [timer, setTimer] = useState(focusLength * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [mode, setMode] = useState('focus');

  useEffect(() => {
    if (timerRunning) {
      setTimeout(() => {
        onTick();
      }, 1000);
    }
  });

  const startStopTimer = () => {
    if (timerRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  const startTimer = () => {
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const onTick = () => {
    if (timer === 0) {
      // Trigger audio
      const newMode = mode === 'focus' ? 'break' : 'focus';
      setMode(newMode);
      if (newMode === 'focus') setTimer(focusLength * 60);
      else setTimer(breakLength * 60);
    } else {
      setTimer(timer - 1);
    }
  };

  const onLengthChange = (length, type) => {
    if (timerRunning) return;
    if (type === mode) setTimer(length * 60);
    if (type === 'focus') {
      setFocusLength(length);
    } else {
      setBreakLength(length);
    }
  };

  return (
    <div className="App">
      <main className="App-container">
        <h1>Pomodoro Timer</h1>
        <div className="length-controls">
          <LengthControl
            length={focusLength}
            onLengthChange={(x) => onLengthChange(x, 'focus')}
            type="focus"
          />
          <LengthControl
            length={breakLength}
            onLengthChange={(x) => onLengthChange(x, 'break')}
            type="break"
          />
        </div>
        <Timer mode={mode} time={timer} />
        <div className="session-controls">
          <SessionControl id="reset" type="reset" />
          <SessionControl id="start_stop" main onClick={startStopTimer} type="start-stop" />
          <SessionControl type="skip" />
        </div>
      </main>
    </div>
  );
};

export default App;
