import React, { useState, useEffect, useRef, useCallback } from 'react';
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

  const timeRemaining = useRef(timer);

  const onTick = useCallback(() => {

    if (timeRemaining.current === 0) {
      // Trigger audio
      const newMode = mode === 'focus' ? 'break' : 'focus';
      setMode(newMode);
      if (newMode === 'focus') updateTimer(focusLength * 60);
      else updateTimer(breakLength * 60);
    } else {
      updateTimer(timeRemaining.current -1);
    }
  }, [breakLength, focusLength, mode]);

  useEffect(() => {
    if (timerRunning) {
      const timeout = setTimeout(() => {
        onTick();
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [onTick, timer, timerRunning]);

  const updateTimer = time => {
    setTimer(time);
    timeRemaining.current = time;
  }

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
