import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

import Timer from './components/Timer';
import LengthControl from './components/LengthControl';
import SessionControl from './components/SessionControl';
import Footer from './components/Footer';
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
    if (length <= 0 || length > 60) return;
    if (type === mode) updateTimer(length * 60);
    if (type === 'focus') {
      setFocusLength(length);
    } else {
      setBreakLength(length);
    }
  };

  const resetTimer = () => {
    if (timerRunning) stopTimer();
    audio.current.pause();
    audio.current.currentTime = 0;
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
      switchModes();
    } else {
      if (timeRemaining.current === 1) {
        // play audio 1 second early as there is a delay
        audio.current.play();
      }
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
        <h1 className="App-header">Pomodoro Timer</h1>
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
          <SessionControl id="reset" onClick={resetTimer}>
            Reset
          </SessionControl>
          <SessionControl id="start_stop" main onClick={startStopTimer}>
            <FontAwesomeIcon icon={faPlay} />
            <FontAwesomeIcon icon={faPause} />
          </SessionControl>
          <SessionControl onClick={switchModes}>Skip</SessionControl>
        </div>
        <Footer />
      </main>
      <audio
        id="beep"
        loop={false}
        ref={audio}
        src={process.env.PUBLIC_URL + '/assets/Cool-alarm-tone-notification-sound.mp3'}
      ></audio>
    </div>
  );
};

export default App;
