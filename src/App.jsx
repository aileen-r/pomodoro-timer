import React, { useState, useEffect, useRef, useCallback } from 'react';
import Timer from './components/Timer';
import LengthControl from './components/LengthControl';
import SessionControl from './components/SessionControl';
import './App.css';

const defaultBreakLength = 5;
const defaultFocusLength = 25;

const App = () => {
  const [breakLength, setBreakLength] = useState(defaultBreakLength);
  const [focusLength, setFocusLength] = useState(defaultFocusLength);
  const [timer, setTimer] = useState(defaultFocusLength * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [mode, setMode] = useState('focus');

  const timeRemaining = useRef(timer);
  const audio = useRef();

  const updateTimer = (time) => {
    setTimer(time);
    timeRemaining.current = time;
  };

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
    if (type === mode) updateTimer(length * 60);
    if (type === 'focus') {
      setFocusLength(length);
    } else {
      setBreakLength(length);
    }
  };

  const resetTimer = () => {
    if (timerRunning) stopTimer();
    setBreakLength(defaultBreakLength);
    setFocusLength(defaultFocusLength);
    updateTimer(defaultFocusLength * 60);
    setMode('focus');
  };

  const switchModes = useCallback(() => {
    const newMode = mode === 'focus' ? 'break' : 'focus';
    setMode(newMode);
    if (newMode === 'focus') updateTimer(focusLength * 60);
    else updateTimer(breakLength * 60);
  }, [breakLength, focusLength, mode]);

  const onTick = useCallback(() => {
    if (timeRemaining.current === 0) {
      audio.current.play();
      switchModes();
    } else {
      updateTimer(timeRemaining.current - 1);
    }
  }, [switchModes]);

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
          <SessionControl id="reset" onClick={resetTimer} type="reset" />
          <SessionControl id="start_stop" main onClick={startStopTimer} type="start-stop" />
          <SessionControl onClick={switchModes} type="skip"/>
        </div>
      </main>
      <audio
        loop={false}
        ref={audio}
        src={process.env.PUBLIC_URL + '/assets/Cool-alarm-tone-notification-sound.mp3'}
      ></audio>
    </div>
  );
};

export default App;
