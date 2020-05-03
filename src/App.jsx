import React, { useState } from 'react';
import Timer from './components/Timer';
import LengthControl from './components/LengthControl';
import SessionControl from './components/SessionControl';
import './App.css';

const App = () => {
  const [ breakLength, setBreakLength ] = useState(5);
  const [ focusLength, setFocusLength ] = useState(25);
  return (
    <div className="App">
      <main className="App-container">
        <h1>Pomodoro Timer</h1>
        <div className="length-controls">
          <LengthControl length={focusLength} setLength={x => setFocusLength(x)} type="focus" />
          <LengthControl length={breakLength} setLength={x => setBreakLength(x)} type="break" />
        </div>
        <Timer />
        <div className="session-controls">
          <SessionControl id="reset" type="reset" />
          <SessionControl id="start_stop" main type="start-stop" />
          <SessionControl type="skip" />
        </div>
      </main>
    </div>
  );
};

export default App;
