import React from 'react';
import Timer from './components/Timer';
import LengthControl from './components/LengthControl';
import './App.css';

const App = () => (
  <div className="App">
    <main className="App-container">
      <h1>Pomodoro Timer</h1>
      <div className="length-controls">
        <LengthControl initialVal={25} type="focus" />
        <LengthControl initialVal={5} type="break" />
      </div>
      <Timer />
    </main>
  </div>
);

export default App;
