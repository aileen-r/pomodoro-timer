import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';
import LengthControl from './components/LengthControl';
import SessionControl from './components/SessionControl';
import './App.css';

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [focusLength, setFocusLength] = useState(25);
  const [timer, setTimer] = useState(focusLength * 60);
  // const [timerInterval, setTimerInterval] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);

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
    // TODO: store timeout in state and cancel here
    setTimerRunning(false);
  };

  const onTick = () => {
    setTimer(timer - 1);
  }

  return (
    <div className="App">
      <main className="App-container">
        <h1>Pomodoro Timer</h1>
        <div className="length-controls">
          <LengthControl length={focusLength} setLength={(x) => setFocusLength(x)} type="focus" />
          <LengthControl length={breakLength} setLength={(x) => setBreakLength(x)} type="break" />
        </div>
        <Timer time={timer} />
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
